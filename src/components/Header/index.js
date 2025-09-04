"use client"

import { useState } from "react"
import styles from "./header.module.css"
import BarcaLogo from "@assets/fc-barcelona-logo.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <img src={BarcaLogo} alt="FC Barcelona" />
          <span>FC Barcelona</span>
        </div>

        {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          {/* <div className={styles.closeButton} onClick={closeMenu}>
            <span></span>
            <span></span>
          </div> */}

          <div className={styles.menuLinks}>
            <a href="#accueil" className={styles.navLink} onClick={closeMenu}>
              <span className={styles.linkIcon}>Accueil</span>
              
            </a>
            <a href="#actualites" className={styles.navLink} onClick={closeMenu}>
              <span className={styles.linkIcon}>Actualités</span>
              
            </a>
            <a href="#mercato" className={styles.navLink} onClick={closeMenu}>
              <span className={styles.linkIcon}>Mercato</span>
              
            </a>
            <a href="#matchs" className={styles.navLink} onClick={closeMenu}>
              <span className={styles.linkIcon}>Matchs</span>
              
            </a>
            <a href="#club" className={styles.navLink} onClick={closeMenu}>
              <span className={styles.linkIcon}>Club</span>
              
            </a>
          </div>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
