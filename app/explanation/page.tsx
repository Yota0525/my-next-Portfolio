import { profile } from "console";
import { url } from "inspector";
import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

export default async function Page() {
    const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>記事が登録されていません</p>
            ) : (
                <ul>
                    {data.contents.map((explanation) => (
                        <li key={explanation.id} className={styles.list}>
                            <Image
                                src={explanation.image.url}
                                alt="No Image"
                                width={explanation.image.width}
                                height={explanation.image.height}
                                className={styles.image}
                            />
                            <dl>
                                <dt className={styles.name}>{explanation.name}</dt>
                                <dd className={styles.profile}>{explanation.profile}</dd> 
                            </dl>
                        </li>
                    ))}
                </ul>    
            )}
        </div>
    );
}