import { format } from 'date-fns';
import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = (props) => {
    const data = props.total;
    const dataUrl = data._id.replace(/\.mdx$/, '');
    console.log(data.category);
    let thumbImage = '/dev/nextjs_thumb.jpg';
    if(data.category.includes('javascript')){
        thumbImage = '/dev/nextjs_thumb.jpg';
    }else if(data.category.includes('sql')){
        thumbImage = '/dev/sql_thumb.jpg';
    }
    // const dataUrlToView = dataUrl.replace("post/", "post/view?id=");
    const d = new Date(data.date);
    const date = format(new Date(d.getFullYear(), d.getMonth(), d.getDate()), 'yyyy.MM.dd');
    return (
        <>
            <Link href={dataUrl} className={`${styles.container} prim-shadow`}>
                <div className={styles.imagebox}>
                    
                    <Image src={thumbImage} alt="" width={0} height={0} sizes="100vw" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', top: '0', left: '0'}} />
                </div>
                <div className={styles.textbox}>
                    <div className={`${styles.head}`}>
                        <h3 className={`${styles.title} t-rw rw-1`}>{props.title}</h3>
                    </div>
                    <div className={`${styles.body}`}>
                        <p className={`${styles.description} t-rw rw-3`}>{props.description}</p>
                    </div>
                    <p className={`${styles.datetime}`}>
                        <Image src="/dev/ico_time_gry.svg" alt="" width={14} height={14} />
                        <span>{date}</span>
                    </p>

                </div>
            </Link>
        </>
    )
}

export default PostCard;