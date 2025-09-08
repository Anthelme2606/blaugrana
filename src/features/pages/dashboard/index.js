import DashboardLayout from "@components/DashboardLayout"
import StatCard from "@components/StatCard"
import PlayersTable from "@components/PlayersTable"
import styles from "./dashboard.module.css"

// ✅ Import des icônes Lucide
import { Users, Trophy, Activity, Goal } from "lucide-react"

const Dashboard = () => {
  const stats = [
    { title: "Joueurs actifs", value: "25", icon: <Users size={20} />, color: "primary" },
    { title: "Matchs joués", value: "15", icon: <Activity size={20} />, color: "secondary" },
    { title: "Victoires", value: "12", icon: <Trophy size={20} />, color: "accent" },
    { title: "Buts marqués", value: "45", icon: <Goal size={20} />, color: "chart-1" },
  ]

  return (
    <DashboardLayout>
      <div className={styles.dashboard}>
        <div className={styles.welcomeSection}>
          <h2 className={styles.welcomeTitle}>Bienvenue sur le Dashboard FC Barcelona</h2>
          <p className={styles.welcomeText}>
            Gérez efficacement toutes les données du club depuis cette interface centralisée.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className={styles.tablesSection}>
          <PlayersTable />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
