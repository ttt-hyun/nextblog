'use client';

import { useEffect, useState } from "react";

export default function LightBulb() {
    const [themeMode, setThemeMode] = useState('dark');
    const themeModeHandle = e => {
        console.log('click')
        e.preventDefault();
        setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
    }
    useEffect(() => {
        document.body.dataset.theme = themeMode;
        window.localStorage.setItem('theme', themeMode)
    }, [themeMode])
  return (
    <>
    <button className="bulb-btn prim-btn prim-shadow flex-center" onClick={themeModeHandle}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="73.163px" height="22px" viewBox="-30.136 -235.964 73.163 106.437">
            <g>
                <path className="bulb-head" fill="#666666" d="M-10.806-156.171c-0.459-2.494-1.229-4.93-2.451-7.17c-2.062-3.741-4.617-7.255-7.172-10.77l0,0l0,0
                    c-1.082-1.475-2.163-2.948-3.202-4.449c-4.096-5.878-6.505-13.072-6.505-20.824c0-20.204,16.377-36.581,36.579-36.581
                    c20.202,0,36.583,16.377,36.583,36.581c0,7.751-2.41,14.945-6.529,20.849c-1.039,1.494-2.118,2.968-3.202,4.443l0,0l0,0
                    c-2.553,3.495-5.111,7.009-7.17,10.769c-1.221,2.248-1.994,4.677-2.449,7.171"/>
                <path className="bulb-body" fill="#1A1A1A" d="M6.453-129.527c-9.187,0-16.626-7.442-16.626-16.627l-0.623-9.997l34.482,0.02l-0.604,9.978 C23.082-136.97,15.639-129.527,6.453-129.527z"/>
            </g>
        </svg>
        <div className="bright-effect"></div>
    </button>
    </>
  );
}

