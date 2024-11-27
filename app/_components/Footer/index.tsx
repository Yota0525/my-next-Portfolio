import styles from "./index.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <a href="/career">キャリア</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/member">人物</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/contact">お問い合わせ</a>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>©︎ MUSIC. All Change World 2024</p>
        </footer>
    );
}