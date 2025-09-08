import Sidebar from "@components/Sidebar"
import DashboardHeader from "@components/DashboardHeader"
import styles from "./dashboardLayout.module.css"

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <DashboardHeader />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
