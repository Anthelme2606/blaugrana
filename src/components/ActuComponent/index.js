import styles from "./actucomponent.module.css"
import Placehold from "@assets/placeholder.png";
import Actu1 from "@assets/actu-1.png"
import Actu2 from "@assets/actu-2.png"
import Actu3 from "@assets/actu-3.png"
import Actu4 from "@assets/actu-4.png"
import ActuFeature from "@assets/actu-feature.png";
import {Link} from 'react-router-dom';
const ActuComponent = () => {
  const actualites = [
    {
      id: 1,
      categorie: "À LA UNE",
      titre: "ACCORD CONCLU : LE BARÇA A DÉJÀ SON NOUVEAU...",
      resume:
        "Le FC Barcelone a reçu un nouveau coup dur à l'approche de la trêve internationale, venant assombrir l'horizon de l'entraîneur allemand. Touché au...",
      heure: "09:00",
      image: Actu4,
      featured: true, // Added featured flag for main article
    },
    {
      id: 2,
      categorie: "CLUB",
      titre: "Balde, incertain pour le début de la ligue des...",
      resume:
        "Le FC Barcelone a reçu un nouveau coup dur à l'approche de la trêve internationale, venant assombrir l'horizon de l'entraîneur allemand.Touché au...",
      heure: "09:00",
      image: Actu2,
    },
    {
      id: 3,
      categorie: "CLUB",
      titre: "Marc Casadó face à son plus grand test",
      resume:
        "Malgré les doutes et les indiscrétions d'un probable départ qui ont entouré son été, la saison 2025/26 s'annonce comme un tournant majeur pour Marc...",
      heure: "03/09",
      image: Actu3,
    },
    {
      id: 4,
      categorie: "CLUB",
      titre: "Coup dur : le Barça annonce la blessure d'un...",
      resume:
        "Alors que nous sommes à la trêve internationale, le FC Barcelone poursuit ses séances d'entraînement avec les joueurs non appelés en...",
      heure: "03/09",
      image: Actu1,
    },
  ]

  const featuredArticle = actualites.find((actu) => actu.featured)
  const regularArticles = actualites.filter((actu) => !actu.featured)

  return (
    <section className={styles.actuSection}>
      {featuredArticle && (
        <article className={styles.featuredArticle}>
          <Link className={styles.link} to="/article">
          <div className={styles.featuredImage}>
            <img src={ActuFeature || "/placeholder.svg"} alt={featuredArticle.titre} />
            <div className={styles.featuredOverlay}>
              <span className={styles.featuredCategorie}>{featuredArticle.categorie}</span>
              <h2 className={styles.featuredTitre}>{featuredArticle.titre}</h2>
            </div>
          </div>
          </Link>
        </article>
      )}

      <div className={styles.actuList}>
        {regularArticles.map((actu) => (
          <article key={actu.id} className={styles.actuCard}>
            <div className={styles.actuImage}>
              <img src={actu.image || "/placeholder.svg"} alt={actu.titre} />
              <span className={styles.categorie}>{actu.categorie}</span>
            </div>
            <div className={styles.actuContent}>
              <h3>{actu.titre}</h3>
              <p>{actu.resume}</p>
              <div className={styles.actuMeta}>
                <span className={styles.actuHeure}>🕐 {actu.heure}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ActuComponent

