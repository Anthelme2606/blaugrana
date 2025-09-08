"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "./sidebar.module.css"
import BarcaLogo from "@assets/fc-barcelona-logo.png"

// import des icônes Lucide dispo dans ta version
import { 
  Home, 
  Newspaper, 
  Trophy, 
  Wallet, 
  Settings, 
  MonitorSmartphone, 
  LineChart, 
  Briefcase, 
  ChevronDown 
} from "lucide-react"

const Sidebar = () => {
  const [isAdsenseExpanded, setIsAdsenseExpanded] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: <Home size={18} /> },
    { path: "/actualites", label: "Gérer les actualités", icon: <Newspaper size={18} /> },
    { path: "/classement-laliga", label: "Gérer classement LaLiga", icon: <Trophy size={18} /> },
    { path: "/classement-uefa", label: "Gérer classement UEFA", icon: <Trophy size={18} /> }, // ✅ remplacé par Trophy
    { path: "/barca-mercato", label: "Gérer Barca mercato", icon: <Wallet size={18} /> },
  ]

  const adsenseItems = [
    { path: "/config-adsense", label: "Configuration générale", icon: <Settings size={18} /> },
    { path: "/config-adsense/banniere", label: "Bannières publicitaires", icon: <MonitorSmartphone size={18} /> },
    { path: "/config-adsense/revenus", label: "Suivi des revenus", icon: <LineChart size={18} /> },
  ]

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={BarcaLogo} alt="FC Barcelona" className={styles.logoImage} />
        <h2 className={styles.logoText}>Barça Admin</h2>
      </div>

      <nav className={styles.navigation}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.path} className={styles.menuItem}>
              <Link
                to={item.path}
                className={`${styles.menuLink} ${location.pathname === item.path ? styles.active : ""}`}
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                <span className={styles.menuLabel}>{item.label}</span>
              </Link>
            </li>
          ))}

          <li className={styles.menuItem}>
            <button
              className={`${styles.menuLink} ${styles.expandableMenu}`}
              onClick={() => setIsAdsenseExpanded(!isAdsenseExpanded)}
            >
              <span className={styles.menuIcon}><Briefcase size={18} /></span>
              <span className={styles.menuLabel}>Configuration Adsense</span>
              <span className={`${styles.expandIcon} ${isAdsenseExpanded ? styles.expanded : ""}`}>
                <ChevronDown size={16} />
              </span>
            </button>

            {isAdsenseExpanded && (
              <ul className={styles.submenu}>
                {adsenseItems.map((item) => (
                  <li key={item.path} className={styles.submenuItem}>
                    <Link
                      to={item.path}
                      className={`${styles.submenuLink} ${location.pathname === item.path ? styles.active : ""}`}
                    >
                      <span className={styles.menuIcon}>{item.icon}</span>
                      <span className={styles.menuLabel}>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
