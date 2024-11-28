import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>記事が見つかりませんでした</dt>
                <dd className={styles.text}>
                    お探しのページは存在しません
                    <br />
                    URLをご確認ください
                </dd>
            </dl>
        </div>
    );
}
        