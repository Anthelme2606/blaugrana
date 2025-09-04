import styles from "./actucomponent.module.css"
import Placehold from "@assets/placeholder.png";
import Actu1 from "@assets/actu-1.png"
import Actu2 from "@assets/actu-2.png"
import Actu3 from "@assets/actu-3.png"
const ActuComponent = () => {
  const actualites = [
    {
      id: 1,
      titre: "Victoire éclatante contre le Real Madrid",
      resume: "Le Barça s'impose 3-1 dans le Clasico avec un triplé de Lewandowski",
      date: "15 Mars 2024",
      image: Actu1,
    },
    {
      id: 2,
      titre: "Nouveau contrat pour Pedri",
      resume: "Le milieu de terrain prolonge jusqu'en 2028",
      date: "12 Mars 2024",
      image: Actu2,
    },
    {
      id: 3,
      titre: "Préparation de la finale de Champions League",
      resume: "L'équipe s'entraîne intensivement avant la grande finale",
      date: "10 Mars 2024",
      image: Actu3,
    },
  ]

  return (
    <section className={styles.actuSection} id="actualites">
      <div className={styles.sectionHeader}>
        <h2>Actualités</h2>
        <div className={styles.headerLine}></div>
      </div>

      <div className={styles.actuGrid}>
        {actualites.map((actu) => (
          <article key={actu.id} className={styles.actuCard}>
            <div className={styles.actuImage}>
              <img src={actu.image || "/placeholder.svg"} alt={actu.titre} />
            </div>
            <div className={styles.actuContent}>
              <span className={styles.actuDate}>{actu.date}</span>
              <h3>{actu.titre}</h3>
              <p>{actu.resume}</p>
              <button className={styles.readMore}>Lire la suite</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ActuComponent
