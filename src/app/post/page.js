import PostCard from "@/components/postCard/postCard";
import supabase from "@/utils/supabase";

const PostPage = async () => {
    const { data, error } = await supabase.from("post").select();
    console.log(data);
    return (
        <div className="page-post">
            {JSON.stringify(data, null, 2)}
            <PostCard />


             
             

        </div>
    )
}

export default PostPage