"use client";

import { renderToString } from 'react-dom/server';
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link';

const Headings = ({ code }) => {

    const Component = useMDXComponent(code);
    const postElement = renderToString(
            <div>
                <Component />
            </div>
    );  

    const getHeadings = (source) =>{
        // const regex = /<h[23] id="([^"]+)"/g;
        const regex = /<h[0-9].*?>(.*?)<\/h[0-9]>/g;
        const regexForId = /id="([^"]+)"/;
        const regexForTitle = /<\/a>(.*?)<\/h[0-9]>/;

        if(source.match(regex)){

        return source.match(regex).map((headings) => {

            let headingId = headings.match(regexForId)[1];
            let headingTitle = headings.match(regexForTitle)[1];
            let headingTag = +headings[2];

            return {
            id : headingId,
            text : headingTitle,
            h : headingTag
            }
        });
        }else{
        return [];
        }
        

        
    }

    const data = getHeadings(postElement);

    function buildTree(data, level) {
        const result = [];
        let i = 0;
        while (i < data.length) {
            const item = data[i];
            if (item.h === level) {
                const child = buildTree(data.slice(i + 1), level + 1);
                result.push({ ...item, child });
                i++;
                while (i < data.length && data[i].h > level) {
                    i++;
                }
            } else {
                break;
            }
        }
        return result;
    }

    const headings = buildTree(data, 2);

    console.log(headings);

    return (
        <>
            <div className='heading-list sticky-item'>
                <ul className="depth1 flex-box flex-column gap-5">
                    {headings.map(result => {

                        if(1 == 1){
                            return (
                                <li key={result.id}>
                                    <Link href={`#${result.id}`} target='_self'>{result.text}</Link>

                                    {result.child[0] ? 
                                    (<ul className='depth2'>
                                        {result.child.map(result => 
                                            (
                                                <li key={result.id}>
                                                    <Link href={`#${result.id}`} target='_self'>{result.text}</Link>
                                                </li>
                                            )
                                        )}
                                    </ul>)
                                    : ''}



                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </>
    )
};

export default Headings;