import Link from 'next/link';
import Image from 'next/image';
import styles from './Sidebar.modal.css';

const Sidebar = () => {
    return (
        <div className="sidebar flex-shrink">
            <div className='sticky-item flex-box flex-column gap-20'>
                <div className='sidebar-controller'>
                    <button className="prim-btn prim-shadow flex-center"></button>
                    <button className="prim-btn prim-shadow flex-center"></button>
                    <button className="prim-btn prim-shadow flex-center"></button>
                    <button className="prim-btn prim-shadow flex-center">
                        <Image src="/dev/ico_share_gry.svg" alt="" width={20} height={22} />
                    </button>
                    <button className="prim-btn prim-shadow flex-center">
                        <Image src="/dev/ico_chat_gry.svg" alt="" width={20} height={20} />
                    </button>
                    <button className="prim-btn prim-shadow flex-center">
                        <Image src="/dev/ico_like_gry.svg" alt="" width={20} height={18} />
                    </button>
                    <button className="prim-btn prim-shadow flex-center"></button>
                    <button className="prim-btn prim-shadow flex-center"></button>
                </div>
                <div className='sidebar-depth'>
                    <ul>
                        <li>
                            <Link href="javascript:;">Programming Language</Link>
                            <ul className="depth2">
                                <li>
                                    <Link href="javascript:;">
                                        <span>SQL</span>
                                        <svg width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        <svg width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="javascript:;">
                                        <span>HTML & CSS</span>
                                        <svg width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.065 12L0 10.935L4.935 6L0 1.065L1.065 0L7.065 6L1.065 12Z" fill="#1a1a1a"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="javascript:;">
                                        <span>JavaScript</span>
                                        <svg width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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