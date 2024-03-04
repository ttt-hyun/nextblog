import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/Mdx";
import "highlight.js/styles/night-owl.css";
import { format } from "date-fns";

async function getDocFromParams(slug){
    const doc = allDocs.find((doc) => doc.slugAsParams === slug);

    if(!doc) notFound()

    return doc
}

const singlePostPage = async ({params, props}) => {
    const doc = await getDocFromParams(params.slug);
    const d = new Date(doc.date);
    const date = format(new Date(d.getFullYear(), d.getMonth(), d.getDate()), 'yyyy.MM.dd');
    
    return (
        <>
        <div className="page-post">
            <div className="layout-text flex-box justify-content-end align-items-center">
                <p className="date-text fs12 fw800">{date}</p>
            </div>
            <div className="post-thumb rd10"></div>
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

        </div>
        </>
    )
}

export default singlePostPage