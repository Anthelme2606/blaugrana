import styles from "../../Gestions/page.module.css"
import DashboardLayout from "@components/DashboardLayout"
const ConfigAdsense = () => {
  return (
    <DashboardLayout>
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Configuration Adsense</h2>
      <p className={styles.pageDescription}>Interface pour configurer les publicités Adsense sur le site.</p>

      <div className={styles.content}>
        <div className={styles.placeholder}>
          <h3>Section en développement</h3>
          <p>Cette page permettra de configurer Adsense.</p>
        </div>
      </div>
    </div>
    </DashboardLayout>
  )
}

export default ConfigAdsense
