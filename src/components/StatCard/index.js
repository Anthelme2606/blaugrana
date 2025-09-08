import styles from "./statCard.module.css"

const StatCard = ({ title, value, icon, color = "primary" }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.value}>{value}</div>
    </div>
  )
}

export default StatCard
