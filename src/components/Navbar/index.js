"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import styles from "./navbar.module.css"
import BarcaLogo from "@assets/app.png"

const Header = () => {
  const [currentDate, setCurrentDate] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateDate = () => {
      const now = new Date()
      const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
      const months = [
        "janvier",
        "fevrier",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "aout",
        "septembre",
        "octobre",
        "novembre",
        "decembre",
      ]

      const dayName = days[now.getDay()]
      const day = String(now.getDate()).padStart(2, "0")
      const month = months[now.getMonth()]
      const year = String(now.getFullYear())

      setCurrentDate(`${dayName} ${day} ${month} ${year}`)
    }

    updateDate()
    const interval = setInterval(updateDate, 3600000) // update chaque heure
    return () => clearInterval(interval)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.mobileHeader}>
          <div className={styles.mobileNavLogo}>
            <img src={BarcaLogo || "/placeholder.svg"} alt="FC Barcelona" />
          </div>

          <div className={styles.mobileDateSection}>
            <span className={styles.mobileDateValue}>{currentDate}</span>
          </div>

          <button className={styles.mobileMenuButton} onClick={toggleMobileMenu} aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop version - hidden on mobile */}
        <div className={styles.desktopHeader}>
          {/* Top Section */}
          <div className={styles.topSection}>
            <div className={styles.dateSection}>
              <span className={styles.dateValue}>{currentDate}</span>
            </div>

            <div className={styles.topLinks}>
              <a href="#" className={styles.topLink}>
                Embleme
              </a>
              <span className={styles.separator}>|</span>
              <a href="#" className={styles.topLink}>
                Hymne
              </a>
              <span className={styles.separator}>|</span>
              <a href="#" className={styles.topLink}>
                Le Slogan
              </a>
              <span className={styles.separator}>|</span>
              <a href="#" className={styles.topLink}>
                A Propos
              </a>
            </div>

            <div className={styles.searchSection}>
              <input type="text" placeholder="Rechercher..." className={styles.searchInput} />
            </div>
          </div>

          {/* Bottom Section */}
          <div className={styles.bottomSection}>
            <div className={styles.navLogo}>
              <img src={BarcaLogo || "/placeholder.svg"} alt="FC Barcelona" />
              <span>FC Barcelona</span>
            </div>

            <nav className={styles.mainNav}>
              <a href="#" className={styles.navLink}>
                Accueil
              </a>
              <span className={styles.separatorb}>|</span>
              <a href="#" className={styles.navLink}>
                Actualites
              </a>
              <span className={styles.separatorb}>|</span>
              <a href="#" className={styles.navLink}>
                La LIGA
              </a>
              <span className={styles.separatorb}>|</span>
              <a href="#" className={styles.navLink}>
                Champions league
              </a>
              <span className={styles.separatorb}>|</span>
              <a href="#" className={styles.navLink}>
                La Presse
              </a>
              <span className={styles.separatorb}>|</span>
              <a href="#" className={styles.navLink}>
                Mercato
              </a>
              <span className={styles.separatorb}>|</span>
              <a href="#" className={styles.navLink}>
                Le Club
              </a>
              <span className={styles.separatorb}>|</span>
              <a href="#" className={styles.navLink}>
                Selection nationale
              </a>
            </nav>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={toggleMobileMenu}>
          <div className={styles.mobileSidebar} onClick={(e) => e.stopPropagation()}>
            <div className={styles.sidebarHeader}>
              <h3>FC Barcelona</h3>
              <button className={styles.closeButton} onClick={toggleMobileMenu} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            {/* First section - Main navigation */}
            <div className={styles.sidebarSection}>
              <h4 className={styles.sectionTitle}>Navigation</h4>
              <nav className={styles.sidebarNav}>
                <a href="#" className={styles.sidebarLink}>
                  Accueil
                </a>
                <a href="#" className={styles.sidebarLink}>
                  Actualites
                </a>
                <a href="#" className={styles.sidebarLink}>
                  La LIGA
                </a>
                <a href="#" className={styles.sidebarLink}>
                  Champions league
                </a>
                <a href="#" className={styles.sidebarLink}>
                  La Presse
                </a>
                <a href="#" className={styles.sidebarLink}>
                  Mercato
                </a>
                <a href="#" className={styles.sidebarLink}>
                  Le Club
                </a>
                <a href="#" className={styles.sidebarLink}>
                  Selection nationale
                </a>
              </nav>
            </div>

            {/* Second section - Club info */}
            <div className={styles.sidebarSection}>
              <h4 className={styles.sectionTitle}>Club</h4>
              <nav className={styles.sidebarNav}>
                <a href="#" className={styles.sidebarLink}>
                  Embleme
                </a>
                <a href="#" className={styles.sidebarLink}>
                  Hymne
                </a>
                <a href="#" className={styles.sidebarLink}>
                  Le Slogan
                </a>
                <a href="#" className={styles.sidebarLink}>
                  A Propos
                </a>
              </nav>
            </div>

            {/* Search section in sidebar */}
            <div className={styles.sidebarSearchSection}>
              <input type="text" placeholder="Rechercher..." className={styles.sidebarSearchInput} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
