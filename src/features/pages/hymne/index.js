import { Music, Play, Users, Calendar } from "lucide-react"
import styles from "./hymne.module.css"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
export default function Hymne() {
  return (
     <>
        <div className={styles.global}>
            <Navbar/>
    <div className={styles.container}>
      <div className={styles.hero}>
        <Music className={styles.heroIcon} size={60} strokeWidth={1.5} />
        <h1 className={styles.title}>L'Hymne du Barça</h1>
        <p className={styles.subtitle}>El Cant del Barça - L'âme musicale du club</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Histoire de l'Hymne</h2>
            <div className={styles.divider}></div>
          </div>
          <p className={styles.text}>
            "El Cant del Barça" (Le Chant du Barça) est l'hymne officiel du FC Barcelone depuis 1974. Composé par Jaume
            Picas avec des paroles de Josep Maria Espinàs et Jaume Picas, cet hymne est devenu un symbole indissociable
            de l'identité du club. Il est chanté avant chaque match au Camp Nou et lors des grandes célébrations du
            club.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <Calendar size={24} />
              <div>
                <h4>Année de création</h4>
                <p>1974</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <Users size={24} />
              <div>
                <h4>Compositeurs</h4>
                <p>Jaume Picas & Josep Maria Espinàs</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Vidéos de l'Hymne</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.videoGrid}>
            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <Play className={styles.playIcon} size={48} />
                <img src="/camp-nou-stadium-crowd-singing-anthem.jpg" alt="Hymne au Camp Nou" />
              </div>
              <div className={styles.videoInfo}>
                <h3>L'Hymne au Camp Nou</h3>
                <p>Écoutez les 99 000 supporters chanter l'hymne avant un match historique</p>
              </div>
            </div>

            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <Play className={styles.playIcon} size={48} />
                <img src="/fc-barcelona-players-celebrating-with-trophy.jpg" alt="Célébration avec l'hymne" />
              </div>
              <div className={styles.videoInfo}>
                <h3>Célébrations Légendaires</h3>
                <p>Les moments les plus émouvants où l'hymne a résonné lors des victoires</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Paroles de l'Hymne</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.lyrics}>
            <div className={styles.lyricsBlock}>
              <h4>Catalan</h4>
              <p>
                Tot el camp
                <br />
                és un clam
                <br />
                som la gent blaugrana
                <br />
                Tant se val d'on venim
                <br />
                si del sud o del nord
                <br />
                ara estem d'acord, estem d'acord,
                <br />
                una bandera ens agermana.
                <br />
                Blaugrana al vent
                <br />
                un crit valent
                <br />
                tenim un nom
                <br />
                el sap tothom:
                <br />
                Barça, Barça, Baaarça!
              </p>
            </div>

            <div className={styles.lyricsBlock}>
              <h4>Français</h4>
              <p>
                Tout le stade
                <br />
                est une clameur
                <br />
                nous sommes les gens blaugrana
                <br />
                Peu importe d'où nous venons
                <br />
                du sud ou du nord
                <br />
                maintenant nous sommes d'accord, nous sommes d'accord,
                <br />
                un drapeau nous unit.
                <br />
                Blaugrana au vent
                <br />
                un cri courageux
                <br />
                nous avons un nom
                <br />
                tout le monde le connaît :<br />
                Barça, Barça, Baaarça!
              </p>
            </div>
          </div>
        </section>

        <section className={styles.motto}>
          <Music size={32} />
          <p>"Un hymne qui unit tous les culés du monde entier"</p>
        </section>
      </div>
    </div>
     <Footer/>
    </div>
    </>
  )
}
