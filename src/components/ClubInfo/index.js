import styles from "./clubinfo.module.css"
import CampNou from "@assets/camp-nou.png"
const ClubInfo = () => {
  const stats = [
    { label: "Fondé en", value: "1899" },
    { label: "Titres Liga", value: "27" },
    { label: "Champions League", value: "5" },
    { label: "Coupes du Roi", value: "31" },
  ]

  const achievements = [
    {
      year: "2023",
      title: "Champion d'Espagne",
      description: "27ème titre de Liga",
    },
    {
      year: "2021",
      title: "Coupe du Roi",
      description: "Victoire contre Athletic Bilbao",
    },
    {
      year: "2015",
      title: "Triplé historique",
      description: "Liga, Champions League, Coupe du Roi",
    },
  ]

  return (
    <section className={styles.clubSection} id="club">
      <div className={styles.sectionHeader}>
        <h2>Club Info</h2>
        <div className={styles.headerLine}></div>
      </div>

      <div className={styles.clubContent}>
        <div className={styles.clubDescription}>
          <h3>Més que un club</h3>
          <p>
            Le FC Barcelone est bien plus qu'un club de football. Fondé en 1899, le Barça représente les valeurs
            catalanes et l'excellence sportive. Avec ses couleurs blaugrana et sa philosophie de jeu unique, le club
            continue d'inspirer des millions de fans à travers le monde.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.achievements}>
          <h4>Derniers succès</h4>
          <div className={styles.achievementsList}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementItem}>
                <div className={styles.achievementYear}>{achievement.year}</div>
                <div className={styles.achievementContent}>
                  <h5>{achievement.title}</h5>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stadium}>
          <h4>Camp Nou</h4>
          <div className={styles.stadiumInfo}>
            <img src={CampNou} alt="Camp Nou" className={styles.stadiumImage} />
            <div className={styles.stadiumDetails}>
              <p>
                <strong>Capacité:</strong> 99,354 places
              </p>
              <p>
                <strong>Inauguré:</strong> 24 septembre 1957
              </p>
              <p>
                <strong>Surnom:</strong> "Le temple du football"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClubInfo
