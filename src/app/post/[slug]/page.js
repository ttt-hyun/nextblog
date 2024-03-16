import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/Mdx";
// import "highlight.js/styles/night-owl.css";
import { format } from "date-fns";
import Image from "next/image";
import Headings from "@/components/mdx/Headings";
import { allDocs } from '@/../.contentlayer/generated';

// export const dynamic = 'force-static';

// async function getDocFromParams(slug){
//     const doc = allDocs.find((doc) => doc.slugAsParams === slug);

//     if(!doc) notFound()

//     return doc
// }

export const generateStaticParams = async () =>
    allDocs.map((post) => ({ slug: post._raw.slugAsParams }));

const singlePostPage = async ({ params: { slug } }) => {
    console.log('slug is=============');
    console.log(slug);
    // const doc = allDocs.find((post) => post._raw.flattenedPath === slug);

    // if (!doc) notFound();

    return (
        <>
        <div className="page-post">
            <p>{slug}</p>
        </div>
        {/* <div className="page-post">
            <div className="layout-text flex-box justify-content-end align-items-center">
                <p className="date-text fs12 fw800">{date}</p>
            </div>
            <div className="post-thumb rd10">
                <Image src="/thumb_next_1.svg" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
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
        </div> */}
        </>
    )
}

export default singlePostPage