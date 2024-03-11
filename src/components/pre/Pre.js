"use client";

import { useState } from "react";

export const Pre = ({ children, raw, ...props }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (t) => {
    await navigator.clipboard.writeText(t);
    setIsCopied(true);
  
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const lang = props["data-language"];
  return (
    <>
    <button className="copy-button" onClick={() => copy(raw)}>
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
    <pre {...props} >
      {/* <div className={"code-header"}>{lang}</div> */}
      {children}
    </pre>
    </>
  );
};
