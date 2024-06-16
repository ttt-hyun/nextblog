const Comment = () => {
    return (
        <>
            <div className="comment-write flex-box flex-column gap-5">
                <div className="write-util flex-box justify-content-between">
                    <button className="prim-btn prim-shadow flex-center">
                        <svg className="icon icon-default share-icon" xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 18 20">
                            <path d="M15,20a3,3,0,0,1-3-3,2.19,2.19,0,0,1,0-.36,1.57,1.57,0,0,1,.07-.34l-7-4.1a3.22,3.22,0,0,1-1,.59A3,3,0,0,1,3,13a2.89,2.89,0,0,1-2.12-.87A2.9,2.9,0,0,1,0,10,2.86,2.86,0,0,1,.88,7.88,2.86,2.86,0,0,1,3,7a3,3,0,0,1,1.1.21,3.22,3.22,0,0,1,1,.59L12.1,3.7A1.57,1.57,0,0,1,12,3.36,2.19,2.19,0,0,1,12,3,2.86,2.86,0,0,1,12.88.88,2.86,2.86,0,0,1,15,0a2.9,2.9,0,0,1,2.13.88A2.89,2.89,0,0,1,18,3a3,3,0,0,1-4.1,2.79,3.22,3.22,0,0,1-1-.59l-7,4.1A2.44,2.44,0,0,1,6,9.64c0,.12,0,.24,0,.36s0,.24,0,.36a2.44,2.44,0,0,1-.08.34l7,4.1a3.22,3.22,0,0,1,1-.59A3,3,0,0,1,15,14a3,3,0,0,1,3,3,3,3,0,0,1-3,3Z"/>
                        </svg>
                    </button>
                    <button className="submit-btn prim-btn prim-shadow flex-center pd-side-15">
                        <p className="fw500 default-clr">Submit</p>
                    </button>
                </div>
                <div className="write-input flex-box flex-column">
                    <textarea className="pd-side-15" placeholder="Write your Comments..."></textarea>
                    <div className="user-info flex-box justify-content-between">
                        <div className='ipt pd-side-15'>
                            <input type="text" placeholder='Nickname' />
                        </div>
                        <div className='ipt pd-side-15'>
                            <input type="password" placeholder='Password' />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="comment-view"></div>
        </>
    )
}

export default Comment