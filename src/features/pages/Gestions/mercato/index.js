import DashboardLayout from "@components/DashboardLayout"
import styles from "../page.module.css"

const GererBarcaMercato = () => {
  return (
    <DashboardLayout>
      <div className={styles.page}>
        <h2 className={styles.pageTitle}>Gérer Barca Mercato</h2>
        <p className={styles.pageDescription}>Interface pour gérer les transferts et le mercato du FC Barcelona.</p>

        <div className={styles.content}>
          <div className={styles.placeholder}>
            <h3>Section en développement</h3>
            <p>Cette page permettra de gérer le mercato du Barça.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default GererBarcaMercato
