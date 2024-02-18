import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation";

async function getDocFromParams(slug){
    const doc = allDocs.find((doc) => doc.slugAsParams === slug);

    if(!doc) notFound()

    return doc
}

const singlePostPage = async ({params}) => {
    const doc = await getDocFromParams(params.slug);
    console.log(params)
    return (
        <div class="page-post">
            
            <div className="layout-text flex-box justify-content-end align-items-center">
                <p className="date-text fs12 fw800">2024.01.13</p>
            </div>
            <div className="post-thumb rd10">
                
            </div>
            <div className="post-contents">
                <div className="title">
                    <h3>React를 시작하며</h3>
                </div>
                <div class="contents">
                    {JSON.stringify(doc)}
                    {/* <ReactMarkdown className="markdown-body" rehypePlugins={[rehypeHighlight]} >
                        {markdown}
                    </ReactMarkdown> */}
                </div>
            </div>
        </div>
    )
}

export default singlePostPage