"use client";

import { renderToString } from 'react-dom/server';
import { useMDXComponent } from 'next-contentlayer/hooks'
import { useEffect } from "react";
import Link from 'next/link';

const Headings = ({ code }) => {

    //전역상수 설정
    const defaultMargin = 10;

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

    function scrollToHeading(e, id = ''){
        e.preventDefault();
        if(id === '') return false;

        const headingEl = document.getElementById(id);
        const headerHeight = document.querySelector('header').offsetHeight;        // 헤더 고려 위치값 조정

        // 요소의 window offset 위치값 가져오기
        const rect = headingEl.getBoundingClientRect();
        const offsetTop = rect.top + window.pageYOffset;
        const targetOffSet = offsetTop - (defaultMargin + headerHeight);
        window.scrollTo(0, targetOffSet);
    }

    useEffect(() => {
        //스크롤 이벤트
        function handleScroll() {

            // 상수 지정
            const headerHeight = document.querySelector('header').offsetHeight;        // 헤더 고려 위치값 조정
            const headings  = document.querySelector('.heading-list');
            const mdxBody   = document.querySelector('.markdown-body');
            const mdxH2     = Array.from(mdxBody.querySelectorAll('h2'));
            const mdxH3     = Array.from(mdxBody.querySelectorAll('h3'));
            mdxH2.push(mdxBody);
            mdxH3.push(mdxBody);

            // 현재 h2 heading 표시
            mdxH2.map((el, idx)=>{
                if(el == mdxBody) return false;
                const observeTop = el.offsetTop - (headerHeight + defaultMargin);
                const observeBottom = (mdxH2[idx+1].offsetTop + mdxH2[idx+1].offsetHeight) - (headerHeight + defaultMargin);

                if(observeTop < window.pageYOffset && window.pageYOffset < observeBottom){
                    document.querySelector(`[data-id="${el.id}"]`).classList.add('observed');
                    Array.from(headings.querySelectorAll('[data-h="2"]')).filter((res) => res.dataset.id != el.id).map(res => {
                        res.classList.remove('observed');
                    })
                }
            })
            
            // 현재 h3 heading 표시
            mdxH3.map((el, idx)=>{
                if(el == mdxBody) return false;
                const observeTop = el.offsetTop - (headerHeight + defaultMargin);
                const observeBottom = (mdxH3[idx+1].offsetTop + mdxH3[idx+1].offsetHeight) - (headerHeight + defaultMargin);

                if(observeTop < window.pageYOffset && window.pageYOffset < observeBottom){
                    document.querySelector(`[data-id="${el.id}"]`).classList.add('observed');
                    Array.from(headings.querySelectorAll('[data-h="3"]')).filter((res) => res.dataset.id != el.id).map(res => {
                        res.classList.remove('observed');
                    })
                }
            })
        }
    
        // 컴포넌트가 마운트될 때 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <div className='heading-list sticky-item'>
                <ul className="depth1 flex-box flex-column gap-5">
                    {headings.map(result => {

                        if(1 == 1){
                            return (
                                <li key={result.id}>
                                    <Link href={`#${result.id}`} data-h="2" data-id={`${result.id}`} onClick={(event)=> scrollToHeading(event, result.id)} target='_self'>{result.text}</Link>

                                    {result.child[0] ? 
                                    (<ul className='depth2'>
                                        {result.child.map(result => 
                                            (
                                                <li key={result.id}>
                                                    <Link href={`#${result.id}`} data-h="3" data-id={`${result.id}`} onClick={(event)=> scrollToHeading(event, result.id)} target='_self'>{result.text}</Link>
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