// 'use client'
//import Bulbsvg from './bulbsvg';
import Link from 'next/link';
import Image from 'next/image';
// import {gsap, tweenMax} from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger';
// import { useEffect, useRef } from 'react';
// import { usePathname, useRouter } from 'next/navigation';


// let animation;
const Sidebar = () => {
    // const sidebar = useRef();
    // const pathname = usePathname();

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     console.log('랜더링...');
    //     const el = sidebar.current;

    //     if(animation) {
    //         console.log('gsap kill');
    //         // ScrollTrigger.getAll().forEach(trigger => {
    //         //     trigger.kill();
    //         // });
    //         ScrollTrigger.getById('sidbar_animation').kill();
    //         animation.kill();
    //     }
    //     console.log('animation 재할당')
    //     animation = gsap.to(el, 
    //         {
    //             x:0,
    //             y:0,
    //             ease: 'linear',
    //             scrollTrigger: {
    //                 id: 'sidbar_animation',
    //                 trigger: el,
    //                 start: "top 10%",
    //                 end: "bottom 50%",
    //                 scrub: 1,
    //                 duration: 3,
    //                 pin: true,
    //                 anticipatePin: 1,
    //                 pinSpacing: false,
    //                 markers: true,
    //             }
    //         }
    //     );
       
    // }, [pathname])

    return (
        <div className="cpt-sidebar flex-shrink">
            <div className='sticky-item'>
                <div className="layout-text flex-box align-items-center grow-1">
                    <div className="referer-list">
                        <ul className="flex-box">
                            <li>
                                <Link href='/blog' className='fs16 fw800 default-clr'>Blog</Link>
                            </li>
                            <li>
                                <Link href='/blog/post' className='fs16 fw800 default-clr'>Post</Link>
                            </li>
                            <li>
                                <Link href='/blog' className='fs16 fw800 default-clr'>React</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='sidebar-menu'>
                    <ul className='flex-box flex-column gap-10'>
                        <li>
                            <Link href="/post" className='flex-box align-items-center prim-bg hov rd10'>
                                <span className='fs16 fw900 default-clr'>Post</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/lab" className='flex-box align-items-center prim-bg hov rd10'>
                                <span className='fs16 fw900 default-clr'>Play lab</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components" className='flex-box align-items-center prim-bg hov rd10'>
                                <span className='fs16 fw900 default-clr'>Component's</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='sidebar-util'>
                    <ul className='flex-box gap-10'>
                        {/* <li>
                            <button className="theme-btn prim-btn prim-shadow flex-center" onClick={() => handleChange()}>
                                <div className='bright-effect'></div>
                                <Bulbsvg /> 
                            </button>
                        </li> */}
                        <li>
                            <button className="prim-btn prim-shadow flex-center">
                                <Image src="/ico_share_gry.svg" alt="" width={20} height={22} />
                            </button>
                        </li>
                        <li>
                            <button className="prim-btn prim-shadow flex-center">
                                <Image src="/ico_chat_gry.svg" alt="" width={20} height={20} />
                            </button>
                        </li>
                        <li>
                            <button className="prim-btn prim-shadow flex-center">
                                <Image src="/ico_like_gry.svg" alt="" width={20} height={18} />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='sidebar-articles'>
                    <div className='articles-head'>
                        <h4 className='fs24 fw900'>Related articles</h4>
                    </div>
                    <div className='articles-list dot-list'>
                        <ul>
                            <li>
                                <Link href='/' className='fs18 fw600'>React를 시작하며</Link>
                            </li>
                            <li>
                                <Link href='/' className='fs18 fw600'>개발을 Node.js로!!</Link>
                            </li>
                            <li>
                                <Link href='/' className='fs18 fw600'>next.js 사용하기</Link>
                            </li>
                            <li>
                                <Link href='/' className='fs18 fw600'>코드이그나이터에 대해</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar