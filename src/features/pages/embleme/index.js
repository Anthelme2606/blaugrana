import { Shield, Star, Flag, Circle, Play } from "lucide-react"
import styles from "./embleme.module.css"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
export default function Embleme() {
  return (
    <>
    <div className={styles.global}>
        <Navbar/>
    <div className={styles.container}>
      <div className={styles.hero}>
        <Shield className={styles.heroIcon} size={60} strokeWidth={1.5} />
        <h1 className={styles.title}>L'Emblème du Barça</h1>
        <p className={styles.subtitle}>Un symbole d'histoire, de fierté et d'identité catalane</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Histoire de l'Emblème</h2>
            <div className={styles.divider}></div>
          </div>
          <p className={styles.text}>
            L'emblème du FC Barcelone est bien plus qu'un simple logo. Créé en 1910, il a évolué au fil des décennies
            tout en conservant ses éléments fondamentaux. Chaque composant de l'écusson raconte une partie de l'histoire
            du club et de la Catalogne, faisant de cet emblème l'un des plus reconnaissables et respectés du monde du
            football.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Vidéos sur l'Emblème</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.videoGrid}>
            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <Play className={styles.playIcon} size={48} />
                <img src="/fc-barcelona-crest-emblem-history-evolution.jpg" alt="Évolution de l'emblème" />
              </div>
              <div className={styles.videoInfo}>
                <h3>Évolution de l'Emblème</h3>
                <p>Découvrez comment l'écusson du Barça a évolué depuis 1899 jusqu'à aujourd'hui</p>
              </div>
            </div>

            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <Play className={styles.playIcon} size={48} />
                <img src="/fc-barcelona-emblem-symbols-meaning.jpg" alt="Signification des symboles" />
              </div>
              <div className={styles.videoInfo}>
                <h3>Signification des Symboles</h3>
                <p>Chaque élément de l'emblème a une histoire et une signification profonde</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Les Éléments de l'Emblème</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.elementsGrid}>
            <div className={styles.elementCard}>
              <div className={styles.elementIcon}>
                <Shield size={32} />
              </div>
              <h3>La Croix de Saint-Georges</h3>
              <p>
                La croix rouge sur fond blanc dans le quartier supérieur gauche représente Saint-Georges, le saint
                patron de la Catalogne. C'est un symbole fort de l'identité catalane du club.
              </p>
            </div>

            <div className={styles.elementCard}>
              <div className={styles.elementIcon}>
                <Flag size={32} />
              </div>
              <h3>Le Drapeau Catalan</h3>
              <p>
                Les quatre bandes rouges sur fond or (la Senyera) dans le quartier supérieur droit représentent le
                drapeau de la Catalogne, affirmant les racines catalanes du club.
              </p>
            </div>

            <div className={styles.elementCard}>
              <div className={styles.elementIcon}>
                <Circle size={32} />
              </div>
              <h3>Le Ballon</h3>
              <p>
                Le ballon de football au centre de l'écusson rappelle l'essence même du club : le football. Il symbolise
                la passion et l'excellence sportive du Barça.
              </p>
            </div>

            <div className={styles.elementCard}>
              <div className={styles.elementIcon}>
                <Star size={32} />
              </div>
              <h3>Les Couleurs Blaugrana</h3>
              <p>
                Les bandes bleues et grenats en bas de l'écusson sont les couleurs emblématiques du club, portées
                fièrement par les joueurs et les supporters depuis 1899.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Évolution Chronologique</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1910</div>
              <div className={styles.timelineContent}>
                <h4>Premier Emblème Officiel</h4>
                <p>Création du premier écusson officiel avec les éléments fondamentaux</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1949</div>
              <div className={styles.timelineContent}>
                <h4>Modification Majeure</h4>
                <p>Ajustement des proportions et modernisation du design</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2002</div>
              <div className={styles.timelineContent}>
                <h4>Version Moderne</h4>
                <p>Simplification et adaptation pour l'ère numérique</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2018</div>
              <div className={styles.timelineContent}>
                <h4>Emblème Actuel</h4>
                <p>Retour aux racines avec un design épuré et intemporel</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.motto}>
          <Shield size={32} />
          <p>"Un emblème qui représente plus qu'un club, une nation sans frontières"</p>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}
