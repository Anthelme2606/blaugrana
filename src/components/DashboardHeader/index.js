import styles from "./dashboardHeader.module.css"
import AdminLogo from "@assets/avatar.png";
import {Search} from "lucide-react"
const DashboardHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.pageInfo}>
          <h1 className={styles.pageTitle}>Dashboard FC Barcelona</h1>
          <p className={styles.pageSubtitle}>Gestion complète du club</p>
        </div>

        <div className={styles.headerActions}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Rechercher..." className={styles.searchInput} />
            <button className={styles.searchButton}><Search size={18}/></button>
          </div>

          <div className={styles.userProfile}>
            <img src={AdminLogo} alt="Profile" className={styles.profileImage} />
            <span className={styles.userName}>Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
