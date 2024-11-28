import { profile } from "console";
import { url } from "inspector";
import Image from "next/image";
import styles from "./page.module.css";

const data = {
    contents: [
        {
            id: "1",
            image: {
                url: "/KCJCC_Picture.jpg",
                width: 360,
                height: 240,
            },
            name: "京都市少年合唱団",
            profile: "京都市少年合唱団は、京都市内の小学4年生〜中学3年生で活動している合唱団です。合唱団の活動は、一年に2回の定期演奏会や地域のイベントへの出演などがあります。",
        },
        {
            id: "2",
            image: {
                url: "/Youth_Picture.jpg",
                width: 360,
                height: 240,
            },
            name: "合唱団Youth",
            profile: "合唱団Youthは、京都市少年合唱団のOB・OGで活動している合唱団です。合唱団の活動は、地域のイベントへの出演や東北への演奏旅行などがあります。",
        },
        {
            id: "3",
            image: {
                url: "/Rotary_Picture.jpeg",
                width: 360,
                height: 240,
            },
            name: "京都洛西ローターアクトクラブ",
            profile: "京都洛西ローターアクトクラブは、今年度で16年目のクラブです。地元高校生の進路相談会やカンボジアでの小学校訪問支援、 嵐山での竹林の整備など京都ならではの活動も行っております。",
        }
    ],
};

export default function Page() {
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