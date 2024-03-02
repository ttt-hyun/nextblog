import styles from './postCard.module.css'
import Image from 'next/image';
import Link from 'next/link';

const PostCard = (props) => {
    const data = props.total;
    const dataUrl = data._id.replace(/\.mdx$/, '');
    console.log(dataUrl)    
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
                        <span>{props.datetime}</span>
                    </p>

                </div>
            </Link>
        </>
    )
}

export default PostCard;