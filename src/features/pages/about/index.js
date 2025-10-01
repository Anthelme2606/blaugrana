import { Newspaper, Trophy, RefreshCw, Heart } from "lucide-react"
import styles from "./about.module.css"
import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
export default function About() {
  return (
    <>
    <div className={styles.global}>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>À Propos de Barça Info</h1>
        <p className={styles.subtitle}>Votre source d'information dédiée au FC Barcelone</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Notre Mission</h2>
            <div className={styles.divider}></div>
          </div>
          <p className={styles.text}>
            Barça Info est une plateforme passionnée créée par et pour les supporters du FC Barcelone. Notre mission est
            de vous tenir informés en temps réel de toutes les actualités, résultats et mouvements du mercato concernant
            le club le plus titré d'Espagne.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ce Que Nous Offrons</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Newspaper size={40} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Actualités</h3>
              <p className={styles.featureText}>
                Les dernières nouvelles du club, des joueurs et de l'équipe technique
              </p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Trophy size={40} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Scores en Direct</h3>
              <p className={styles.featureText}>Suivez tous les matchs en temps réel avec statistiques détaillées</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <RefreshCw size={40} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Mercato</h3>
              <p className={styles.featureText}>Toutes les rumeurs et confirmations des transferts du Barça</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Pourquoi Barça Info ?</h2>
            <div className={styles.divider}></div>
          </div>
          <p className={styles.text}>
            En tant que culés, nous comprenons la passion qui anime chaque supporter. C'est pourquoi nous avons créé
            cette plateforme : pour rassembler la communauté blaugrana et partager notre amour pour le club. Que vous
            soyez à Barcelone ou à l'autre bout du monde, Barça Info vous rapproche de votre équipe.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Més Que Un Club</h2>
            <div className={styles.divider}></div>
          </div>
          <p className={styles.text}>
            Le FC Barcelone n'est pas qu'un simple club de football, c'est une philosophie, une identité, une famille.
            Barça Info incarne ces valeurs en créant un espace où chaque supporter peut s'informer, échanger et célébrer
            les succès du club.
          </p>
          <div className={styles.motto}>
            <p className={styles.mottoText}>"Plus qu'un club"</p>
          </div>
        </section>
      </div>

      {/* <footer className={styles.footer}>
        <p className={styles.footerText}>
          Fait avec <Heart size={16} fill="currentColor" className={styles.heartIcon} /> par des culés pour des culés
        </p>
        <p className={styles.footerSubtext}>Barça Info - Votre passion, notre engagement</p>
      </footer> */}
    </div>
    <Footer/>
    </div>
    </>
  )
}
