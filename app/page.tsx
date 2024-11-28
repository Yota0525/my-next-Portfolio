import styles from "./page.module.css"
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "京都市少年合唱団を修了しました",
      category: {
        name: "合唱団",
      },
      publishedAt: "2021/03/14",
      createdAt: "2021/03/14",
    },
    {
      id: "2",
      title: "合唱団Youthに入団しました",
      category: {
        name: "Youth",
      },
      publishedAt: "2021/04/06",
      createdAt: "2021/04/06",
    },
    {
      id: "3",
      title: "京都洛西ローターアクトクラブに入会しました",
      category: {
        name: "RAC",
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
          alt="青背景"
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>Career</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/career">さらに見る</ButtonLink>
        </div>
      </section>
    </>
  );
}