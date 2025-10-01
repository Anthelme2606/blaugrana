import { Heart, Users, Globe, Trophy, Play } from "lucide-react"
import styles from "./slogan.module.css"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
export default function Slogan() {
  return (
     <>
        <div className={styles.global}>
            <Navbar/>
    <div className={styles.container}>
      <div className={styles.hero}>
        <Heart className={styles.heroIcon} size={60} strokeWidth={1.5} />
        <h1 className={styles.title}>Més Que Un Club</h1>
        <p className={styles.subtitle}>Plus qu'un club - Une philosophie, une identité, une famille</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Origine du Slogan</h2>
            <div className={styles.divider}></div>
          </div>
          <p className={styles.text}>
            "Més que un club" (Plus qu'un club) est bien plus qu'un simple slogan marketing. Prononcé pour la première
            fois par le président Narcís de Carreras en 1968, cette phrase est devenue l'essence même de l'identité du
            FC Barcelone. Elle exprime le fait que le club représente les valeurs catalanes, la démocratie, la liberté
            et la culture, particulièrement durant les années sombres de la dictature franquiste où le Camp Nou était
            l'un des rares lieux où la langue et la culture catalanes pouvaient s'exprimer librement.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Vidéos sur le Slogan</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.videoGrid}>
            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <Play className={styles.playIcon} size={48} />
                <img src="/fc-barcelona-fans-celebrating-m-s-que-un-club.jpg" alt="Més que un club en action" />
              </div>
              <div className={styles.videoInfo}>
                <h3>L'Esprit Més Que Un Club</h3>
                <p>Découvrez ce que signifie vraiment être plus qu'un club à travers les témoignages</p>
              </div>
            </div>

            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <Play className={styles.playIcon} size={48} />
                <img src="/fc-barcelona-social-projects-community.jpg" alt="Actions sociales du Barça" />
              </div>
              <div className={styles.videoInfo}>
                <h3>Actions Sociales et Valeurs</h3>
                <p>Comment le Barça incarne ses valeurs à travers des projets sociaux et humanitaires</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ce Que Représente le Slogan</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Heart size={32} />
              </div>
              <h3>Identité Catalane</h3>
              <p>
                Le Barça est un symbole de la Catalogne et de sa culture. Le club a toujours défendu l'identité
                catalane, même dans les moments les plus difficiles de l'histoire.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Users size={32} />
              </div>
              <h3>Engagement Social</h3>
              <p>
                Le club s'engage activement dans des causes sociales et humanitaires à travers la Fondation FC
                Barcelone, aidant des millions d'enfants dans le monde.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Globe size={32} />
              </div>
              <h3>Universalité</h3>
              <p>
                Le Barça transcende les frontières et unit des millions de supporters à travers le monde, créant une
                communauté globale basée sur des valeurs communes.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Trophy size={32} />
              </div>
              <h3>Excellence Sportive</h3>
              <p>
                Au-delà des valeurs, le Barça incarne l'excellence sur le terrain avec un style de jeu unique et
                spectaculaire qui a marqué l'histoire du football.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Les Piliers du Més Que Un Club</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>01</div>
              <h4>Démocratie et Participation</h4>
              <p>
                Le FC Barcelone appartient à ses socis (membres), qui élisent démocratiquement le président. Cette
                structure unique fait du club une véritable institution démocratique.
              </p>
            </div>

            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>02</div>
              <h4>Catalanisme</h4>
              <p>
                Le club est un ambassadeur de la culture catalane dans le monde, promouvant la langue, les traditions et
                l'identité de la Catalogne.
              </p>
            </div>

            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>03</div>
              <h4>Intégration et Diversité</h4>
              <p>
                Le Barça accueille des joueurs et supporters de toutes origines, créant un modèle d'intégration et de
                respect de la diversité.
              </p>
            </div>

            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>04</div>
              <h4>Responsabilité Sociale</h4>
              <p>
                À travers sa fondation, le club utilise le sport comme outil d'éducation et d'intégration sociale,
                touchant des millions d'enfants vulnérables.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.quote}>
          <div className={styles.quoteIcon}>
            <Heart size={48} />
          </div>
          <blockquote className={styles.quoteText}>
            "Le Barça est plus qu'un club parce qu'il représente les valeurs de la Catalogne, la démocratie, la liberté
            d'expression et le respect. C'est un symbole d'identité pour des millions de personnes à travers le monde."
          </blockquote>
          <p className={styles.quoteAuthor}>— Joan Laporta, Président du FC Barcelone</p>
        </section>

        <section className={styles.motto}>
          <Heart size={32} />
          <p>"Més que un club, une famille mondiale unie par des valeurs communes"</p>
        </section>
      </div>
    </div>
      <Footer/>
    </div>
    </>
  )
}
