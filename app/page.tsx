import styles from "./page.module.css"
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {

  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT
  });

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
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/career">さらに見る</ButtonLink>
        </div>
      </section>
    </>
  );
}