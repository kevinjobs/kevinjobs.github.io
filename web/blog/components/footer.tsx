import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </div>
  )
}