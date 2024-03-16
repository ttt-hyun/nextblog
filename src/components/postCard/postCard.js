import { format } from 'date-fns';
import styles from './postCard.module.css'
import Image from 'next/image';
import Link from 'next/link';

const PostCard = (props) => {
    const data = props.total;
    console.log(data._id);
    const dataUrl = data._id.replace(/\.mdx$/, '');
    // const dataUrlToView = dataUrl.replace("post/", "post/view?id=");
    const d = new Date(data.date);
    const date = format(new Date(d.getFullYear(), d.getMonth(), d.getDate()), 'yyyy.MM.dd');
    return (
        <>
            <Link href={dataUrl} className={`${styles.container} prim-shadow`}>
                <div className={styles.imagebox}></div>
                <div className={styles.textbox}>
                    <div className={`${styles.head}`}>
                        <h3 className={`${styles.title}`}>{props.title}</h3>
                    </div>
                    <div className={`${styles.body}`}>
                        <p className={`${styles.description} t-rw rw-3`}>{props.description}</p>
                    </div>
                    <p className={`${styles.datetime}`}>
                        <Image src="/ico_time_gry.svg" alt="" width={14} height={14} />
                        <span>{date}</span>
                    </p>

                </div>
            </Link>
        </>
    )
}

export default PostCard;