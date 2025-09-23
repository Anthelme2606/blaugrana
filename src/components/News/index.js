import styles from "./news.module.css"
import Actu from "@assets/actu-feature.png";
const NewsArticle = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      {/* Main Content */}
      <main className={styles.mainContent}>

        <article className={styles.article}>
          <div className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>ACCORD CONCLU : LE BARÇA A DÉJÀ SON NOUVEAU...</h1>
            <div className={styles.articleMeta}>
              <span>Publié le: ../../../ - Heure</span>
              <span>Par Auteur</span>
            </div>
          </div>

          <div className={styles.articleImageContainer}>
            <img
              src={Actu}
              alt="Accord Barça - Deux hommes avec maillots de football"
              className={styles.articleImage}
            />
            <div className={styles.featuredBadge}>À LA UNE</div>
          </div>

          <div className={styles.articleContent}>
            <p>
              Le Lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
              calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
              mise en page est achevée.
            </p>
            <p>
              Le Lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
              calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
              mise en page est achevée.
            </p>
            <p>
              Le Lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
              calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
              mise en page est achevée.
            </p>
            <p>
              Le Lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
              calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
              mise en page est achevée.
            </p>
            <p>
              Le Lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
              calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
              mise en page est achevée.
            </p>
          </div>

          
        </article>
      </main>
    </div>
  )
}

export default NewsArticle
