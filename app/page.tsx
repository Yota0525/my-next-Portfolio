import styles from "./page.module.css"
import Image from "next/image";

import ButtonLink from "@/app/_components/ButtonLink";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "京都市少年合唱団を修了しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2021/03/14",
      createdAt: "2021/03/14",
    },
    {
      id: "2",
      title: "合唱団Youthに入団しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2021/04/06",
      createdAt: "2021/04/06",
    },
    {
      id: "3",
      title: "京都洛西ローターアクトクラブに入会しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/07/15",
      createdAt: "2024/07/15",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>ITの力で生活を豊かにする</h1>
          <p className={styles.description}>私は京都TECHでITについて学んでいる専門一回生です。</p>
        </div>
        <Image 
          className={styles.bgimg}
          src="/Blue_Black.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>Career</h2>
        <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/Concert_Hole.jpg"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={styles.content}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.tag}>{article.category.name}</span>
                    <span className={styles.date}>
                      <Image
                        src="/Clock_Illust.png"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">一覧</ButtonLink>
        </div>
      </section>
    </>
  );
}