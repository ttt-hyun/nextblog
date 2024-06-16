import Link from 'next/link';
import Image from 'next/image';
import styles from './Sidebar.modal.css';
import LightBulb from './LightBulb';

const Sidebar = () => {
    return (
        <div className="sidebar flex-shrink">
            <div className='sticky-item flex-box flex-column gap-20'>
                <div className='sidebar-controller'>
                    <button className="prim-btn prim-shadow flex-center">
                        <div className='ipt full-ipt pd-side-15'>
                            <input type="text" placeholder='Search documents...' />
                        </div>
                    </button>
                    <div className="prim-btn prim-shadow flex-column gap-10 pd-15">
                        <div className='list-head flex-box gap-5'>
                            <svg className='icon color-default pin-icon' width="11" height="11" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07076 5.12843C0.739114 4.79679 0.681794 4.31824 0.942486 4.05754L4.71294 0.287089C4.97363 0.0263968 5.45219 0.0837167 5.78383 0.415358C6.11547 0.746999 6.17279 1.22555 5.9121 1.48624L5.47761 1.92073L8.4223 4.52961C9.33569 4.36195 10.3868 4.55876 11.3676 5.13308L11.4385 5.17457C11.6707 5.30958 11.8462 5.5351 11.9133 5.77899C11.9805 6.02288 11.9313 6.25942 11.7796 6.41113L7.06652 11.1242C6.91482 11.2759 6.68162 11.3255 6.43439 11.2579C6.18716 11.1904 5.96311 11.0135 5.82996 10.7831L5.78848 10.7122C5.21416 9.73135 5.01734 8.6803 5.18501 7.76691L2.57613 4.82221L2.14164 5.2567C1.88095 5.51739 1.4024 5.46007 1.07076 5.12843ZM8.50489 8.7921L9.4475 7.84949L12.2927 10.6947C12.6243 11.0263 12.6816 11.5049 12.4209 11.7655C12.1603 12.0262 11.6817 11.9689 11.3501 11.6373L8.50489 8.7921Z" fill="#1A1A1A"/>
                            </svg>
                            <h3 className='fs16 fw700 color color-default'>Pinned Post</h3>
                        </div>
                        <div className='list-body'>
                            <ul className='flex-box flex-column gap-6'>
                                <li>
                                    <Link href="#" className='flex-box justify-content-between gap-10'>
                                        <span className='color color-default'>clipboard API</span>
                                        <span className='color color-default'>-</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='flex-box justify-content-between gap-10'>
                                        <span className='color color-default'>clipboard API</span>
                                        <span className='color color-default'>-</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='flex-box justify-content-between gap-10'>
                                        <span className='color color-default'>clipboard API</span>
                                        <span className='color color-default'>-</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <button className="prim-btn prim-shadow flex-center">
                        <svg className="icon icon-default share-icon" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 18 20">
                            <path d="M15,20a3,3,0,0,1-3-3,2.19,2.19,0,0,1,0-.36,1.57,1.57,0,0,1,.07-.34l-7-4.1a3.22,3.22,0,0,1-1,.59A3,3,0,0,1,3,13a2.89,2.89,0,0,1-2.12-.87A2.9,2.9,0,0,1,0,10,2.86,2.86,0,0,1,.88,7.88,2.86,2.86,0,0,1,3,7a3,3,0,0,1,1.1.21,3.22,3.22,0,0,1,1,.59L12.1,3.7A1.57,1.57,0,0,1,12,3.36,2.19,2.19,0,0,1,12,3,2.86,2.86,0,0,1,12.88.88,2.86,2.86,0,0,1,15,0a2.9,2.9,0,0,1,2.13.88A2.89,2.89,0,0,1,18,3a3,3,0,0,1-4.1,2.79,3.22,3.22,0,0,1-1-.59l-7,4.1A2.44,2.44,0,0,1,6,9.64c0,.12,0,.24,0,.36s0,.24,0,.36a2.44,2.44,0,0,1-.08.34l7,4.1a3.22,3.22,0,0,1,1-.59A3,3,0,0,1,15,14a3,3,0,0,1,3,3,3,3,0,0,1-3,3Z"/>
                        </svg>
                    </button>
                    <button className="prim-btn prim-shadow flex-center">
                        <svg className='icon icon-default chat-icon' xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path d="M14.71,8.71A1,1,0,1,0,14,9,1,1,0,0,0,14.71,8.71Zm-4,0A1,1,0,1,0,10,9,1,1,0,0,0,10.71,8.71Zm-4,0A1,1,0,1,0,6,9,1,1,0,0,0,6.71,8.71ZM16,16H2a1.93,1.93,0,0,1-1.41-.59A1.93,1.93,0,0,1,0,14V2A1.93,1.93,0,0,1,.59.59,1.93,1.93,0,0,1,2,0H18a1.93,1.93,0,0,1,1.41.59A1.93,1.93,0,0,1,20,2V20Zm2-.87V2H2V14H16.85ZM18,2V2Z"/>
                        </svg>
                    </button>
                    <button className="prim-btn prim-shadow flex-center">
                        <svg className='icon icon-default like-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.8 20" width={20} height={18}>
                            <path d="M10.9,20,9.32,18.58C7.48,16.93,6,15.5,4.77,14.31a30.64,30.64,0,0,1-2.86-3.23A10.29,10.29,0,0,1,.42,8.45,7.4,7.4,0,0,1,0,6,5.77,5.77,0,0,1,1.72,1.72,5.77,5.77,0,0,1,6,0a6.26,6.26,0,0,1,2.7.6A6.4,6.4,0,0,1,10.9,2.29,6.4,6.4,0,0,1,13.11.6,6.25,6.25,0,0,1,15.8,0a5.88,5.88,0,0,1,6,6,7.4,7.4,0,0,1-.42,2.46,10.6,10.6,0,0,1-1.49,2.63A30.64,30.64,0,0,1,17,14.31c-1.2,1.19-2.72,2.62-4.55,4.27Zm0-2.94c1.74-1.56,3.18-2.9,4.3-4a32.6,32.6,0,0,0,2.67-2.92,9.11,9.11,0,0,0,1.37-2.2A5.34,5.34,0,0,0,19.62,6,3.73,3.73,0,0,0,15.8,2.18a4.23,4.23,0,0,0-2.37.72,3.81,3.81,0,0,0-1.5,1.84H9.86A3.73,3.73,0,0,0,8.37,2.9,4.24,4.24,0,0,0,6,2.18,3.72,3.72,0,0,0,2.18,6a5.34,5.34,0,0,0,.38,1.93,9.35,9.35,0,0,0,1.36,2.2A36,36,0,0,0,6.59,13Q8.29,14.72,10.9,17.06Z"/>
                        </svg>
                    </button>
                    
                    <LightBulb/>
                </div>
                <div className='sidebar-depth'>
                    <ul>
                        <li>
                            <Link href="javascript:;">Programming Language</Link>
                            <ul className="depth2">
                                <li>
                                    <Link href="javascript:;">
                                        <span>SQL</span>
                                        <svg className='arrow-icon' width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                    <ul className="depth3">
                                        <li>
                                            
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="javascript:;">
                                        <span>PHP</span>
                                        <svg className='arrow-icon' width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="javascript:;">
                                        <span>HTML & CSS</span>
                                        <svg className='arrow-icon' width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="javascript:;">
                                        <span>JavaScript</span>
                                        <svg className='arrow-icon' width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="javascript:;">Web Framework</Link>
                            <ul className="depth2">
                                <li>
                                    <Link href="javascript:;">
                                        <span>Next js</span>
                                        <svg className='arrow-icon' width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                    <ul className="depth3">
                                        <li>
                                            
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="javascript:;">
                                        <span>CodeIgniter</span>
                                        <svg className='arrow-icon' width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="javascript:;">Developer Type</Link>
                            <ul className="depth2">
                                <li>
                                    <Link href="javascript:;">
                                        <span>FrontEnd</span>
                                        <svg className='arrow-icon' width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                    <ul className="depth3">
                                        <li>
                                            
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="javascript:;">
                                        <span>BackEnd</span>
                                        <svg className='arrow-icon' width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* <div className='sidebar-articles'>
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
                </div> */}
            </div>
        </div>
    )
}
export default Sidebar