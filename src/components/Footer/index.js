import styles from "./footer.module.css"
//import BarcaLogo from "@assets/fc-barcelona-logo.png"
import BarcaLogo from "@assets/app.png"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <img src={BarcaLogo} alt="FC Barcelona" />
              <div>
                <h3>FC Barcelona</h3>
                <p>Més que un club</p>
              </div>
            </div>
            <p className={styles.footerDescription}>
              Le FC Barcelone, fondé en 1899, est l'un des clubs de football les plus prestigieux au monde, représentant
              les valeurs catalanes et l'excellence sportive.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#accueil">Accueil</a>
              </li>
              <li>
                <a href="#actualites">Actualités</a>
              </li>
              <li>
                <a href="#mercato">Mercato</a>
              </li>
              <li>
                <a href="#matchs">Matchs</a>
              </li>
              <li>
                <a href="#club">Club</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Suivez-nous</h4>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                <div className={styles.socialIcon}>📘</div>
              </a>
              <a href="#" aria-label="Twitter">
                <div className={styles.socialIcon}>🐦</div>
              </a>
              <a href="#" aria-label="Instagram">
                <div className={styles.socialIcon}>📷</div>
              </a>
              <a href="#" aria-label="YouTube">
                <div className={styles.socialIcon}>📺</div>
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <div className={styles.contactInfo}>
              <p>📍 Camp Nou, Barcelona, Espagne</p>
              <p>📞 +34 902 189 900</p>
              <p>✉️ info@fcbarcelona.com</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>&copy; 2024 FC Barcelona. Tous droits réservés.</p>
            <div className={styles.footerLinks}>
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
