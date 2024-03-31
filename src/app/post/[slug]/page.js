import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/Mdx";
// import "highlight.js/styles/night-owl.css";
import { format } from "date-fns";
import Image from "next/image";
import Headings from "@/components/mdx/Headings";
import { allDocs } from '@/../.contentlayer/generated';
import Link from "next/link";

// export const dynamic = 'force-static';

// async function getDocFromParams(slug){
//     const doc = allDocs.find((doc) => doc.slugAsParams === slug);

//     if(!doc) notFound()

//     return doc
// }

export const generateStaticParams = async () =>
    allDocs.map((post) => ({ slug: post.slugAsParams }));


const singlePostPage = async ({ params: { slug } }) => {
    const doc = allDocs.find((doc) => doc.slugAsParams === slug);

    const d = new Date(doc.date);
    const date = format(new Date(d.getFullYear(), d.getMonth(), d.getDate()), 'yyyy.MM.dd');

    if (!doc) notFound();

    return (
        <>
        <div className="page-post">
            <div className="layout-text flex-box justify-content-between align-items-center">
                <div className="referer-list">
                    <ul className="flex-box">
                        {/* <li>
                            <Link href='/blog' className='fs16 fw800 default-clr'>Blog</Link>
                        </li> */}
                        <li>
                            <Link href='/post' className='fs16 fw800 default-clr'>Post</Link>
                        </li>
                        <li>
                            <Link href='javascript:;' className='fs16 fw800 color color-default'>{doc.title}</Link>
                        </li>
                    </ul>
                </div>
                <p className="date-text fs12 fw800">
                    <svg className="icon icon-default date-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width={14} height={14}>
                        <path d="M9.31,10.29l1-1L7.7,6.72V3.5H6.3V7.28ZM7,14a6.76,6.76,0,0,1-2.73-.55A7,7,0,0,1,.55,9.73,6.76,6.76,0,0,1,0,7,6.76,6.76,0,0,1,.55,4.27,7,7,0,0,1,4.27.55,6.76,6.76,0,0,1,7,0,6.76,6.76,0,0,1,9.73.55a7,7,0,0,1,3.72,3.72A6.76,6.76,0,0,1,14,7a6.76,6.76,0,0,1-.55,2.73,7,7,0,0,1-3.72,3.72A6.76,6.76,0,0,1,7,14Zm0-1.4A5.4,5.4,0,0,0,11,11,5.4,5.4,0,0,0,12.6,7,5.4,5.4,0,0,0,11,3,5.4,5.4,0,0,0,7,1.4,5.4,5.4,0,0,0,3,3,5.4,5.4,0,0,0,1.4,7,5.4,5.4,0,0,0,3,11,5.4,5.4,0,0,0,7,12.6Z"/>
                    </svg>
                    {date}
                </p>
            </div>
            <div className="post-thumb rd10">
                <Image src="/dev/thumb_next_1.svg" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="post-contents">
                <div className="title">
                    <h3>{doc.title}</h3>
                </div>
                <div className="contents markdown-body">
                    <Mdx code={doc.body.code} />
                </div>
            </div>
        </div>
        <div className="post-heading">
            <Headings code={doc.body.code} />
        </div>
        </>
    )
}

export default singlePostPage