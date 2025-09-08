import DashboardLayout from "@components/DashboardLayout"
import styles from "../page.module.css"

const GererClassementUEFA = () => {
  return (
    <DashboardLayout>
      <div className={styles.page}>
        <h2 className={styles.pageTitle}>Gérer Classement UEFA</h2>
        <p className={styles.pageDescription}>Interface pour gérer le classement de l'UEFA Champions League.</p>

        <div className={styles.content}>
          <div className={styles.placeholder}>
            <h3>Section en développement</h3>
            <p>Cette page permettra de gérer le classement UEFA.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default GererClassementUEFA
