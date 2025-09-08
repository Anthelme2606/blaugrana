import DashboardLayout from "@components/DashboardLayout"
import styles from "../page.module.css"

const GererClassementLaLiga = () => {
  return (
    <DashboardLayout>
      <div className={styles.page}>
        <h2 className={styles.pageTitle}>Gérer Classement LaLiga</h2>
        <p className={styles.pageDescription}>Interface pour gérer le classement de la Liga espagnole.</p>

        <div className={styles.content}>
          <div className={styles.placeholder}>
            <h3>Section en développement</h3>
            <p>Cette page permettra de gérer le classement LaLiga.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default GererClassementLaLiga
