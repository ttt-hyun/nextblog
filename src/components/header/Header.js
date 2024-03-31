'use client';

import { useEffect, useState } from "react";

const header = () => {

    const [scrollPosY, setScrollPosY] = useState(0);

    useEffect(() => {

        //스크롤 이벤트
        function handleScroll() {
            const currentScrollY = window.scrollY;
            const headerHeight = document.querySelector('header').offsetHeight;        // 헤더 고려 위치값 조정
            if(scrollPosY > currentScrollY){
                document.querySelector('header').style.top = 0;
            }else{
                document.querySelector('header').style.top = '-'+headerHeight+'px';
            }
          setScrollPosY(currentScrollY);
        }
    
        // 컴포넌트가 마운트될 때 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollPosY]);

    return (
        <header>
            <div className='header-wrapper flex-box align-items-center justify-content-center'>
                <div className='header-inner max-grid'>
                    <div className='header-contents flex-box justify-content-center'>
                        <div className='title-box rd10 prim-shadow flex-center'>
                            <h1 className="fs16 fw800 default-clr">Blog</h1>
                        </div>
                        <button className='menu-button prim-btn sz5 prim-shadow flex-center'>
                            <div className='menu-box flex-box flex-column justify-content-between'>
                                <p className='menu-path text-zero'>선</p>
                                <p className='menu-path text-zero'>선</p>
                                <p className='menu-path text-zero'>선</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default header