import PostCard from "@/components/postCard/postCard";
import supabase from "@/utils/supabase";
import { allDocs } from '@/../.contentlayer/generated';
import {compareDesc} from "date-fns"

const PostPage = async () => {
    const { data, error } = await supabase.from("post").select();
    const posts = allDocs.sort((a,b) => compareDesc(new Date(a.date), new Date(b.date)));
    console.log(posts[0]._id)
    // console.log(posts);

    // console.log(data);
    return (
        <div className="grid-box g-col-3 g-gap-10 grow-1">
            {/* {JSON.stringify(data, null, 2)} */}
            {posts.map(post => (
                <PostCard total={post} title={post.title} description={post.description} datetime={post.date}/>
            ))}
        </div>
    )
}

export default PostPage