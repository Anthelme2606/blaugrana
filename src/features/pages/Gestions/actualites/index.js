import DashboardLayout from "@components/DashboardLayout"
import styles from "../page.module.css"

const GererActualites = () => {
  return (
    <DashboardLayout>
      <div className={styles.page}>
        <h2 className={styles.pageTitle}>Gérer les Actualités</h2>
        <p className={styles.pageDescription}>Interface pour gérer toutes les actualités du FC Barcelona.</p>

        <div className={styles.content}>
          <div className={styles.placeholder}>
            <h3>Section en développement</h3>
            <p>Cette page permettra de gérer les actualités du club.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default GererActualites
