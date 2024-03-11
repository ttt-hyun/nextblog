"use client";

import { renderToString } from 'react-dom/server';
import { useMDXComponent } from 'next-contentlayer/hooks'

const Headings = ({ code }) => {

  const Component = useMDXComponent(code);
  const postElement = renderToString(
        <div>
            <Component />
        </div>
  );  

  const getHeadings = (source) =>{
    const regex = /<h[23] id="([^"]+)"/g;

    if (source.match(regex)) {
      return source.match(regex).map((heading) => {

        let headingText = '';
        let hNumber = '';
        
        if(heading.includes('h1')){

          headingText = heading.replace('<h1 id="', '').slice(0, -1);
          hNumber = 1;

        }else if(heading.includes('h2')){

          headingText = heading.replace('<h2 id="', '').slice(0, -1);
          hNumber = 2;

        }else if(heading.includes('h3')){

          headingText = heading.replace('<h3 id="', '').replace('</h3', '');
          hNumber = 3;

        }else if(heading.includes('h4')){

          headingText = heading.replace('<h4 id="', '').replace('</h4', '');
          hNumber = 4;
        }else{
          throw new Error('Invalid heading tag found. Please ensure the heading tag on mdx');
        }
        
        return {
          id: headingText,
          h: hNumber
        };
        
      });
    }

    return [];
  }

  const headings = getHeadings(postElement);

  console.log(headings);

  return (
    <>
    <div>test</div>
    </>
  )
};

export default Headings;