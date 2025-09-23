import styles from "../ClubInfo/clubinfo.module.css"

const InfoComponent = () => {
  const newsItems = [
    { time: "09:00", title: "Balde, incertain pour le début de la ligu...", isImportant: false },
    { time: "07:54", title: "Accord conclu : le Barça a déjà son nou...", isImportant: false },
    { time: "03/09", title: "Marc Casadó face à son plus grand test", isImportant: false },
    { time: "03/09", title: "Coup dur : le Barça annonce la blessur...", isImportant: true },
    { time: "03/09", title: "Barça : Les quatre recrues inattendues ...", isImportant: false },
    { time: "03/09", title: "Barça : le bilan d'un mercato animé, ma...", isImportant: false },
    { time: "02/09", title: "Dernière minute : deux matchs du Barç...", isImportant: false },
    { time: "02/09", title: "Barça : le mystère du numéro de maillo...", isImportant: false },
    { time: "02/09", title: "Mercato : un transfert gratuit finalisé d...", isImportant: true },
    { time: "02/09", title: "Bonne nouvelle : le Barça valide une de...", isImportant: true },
    { time: "02/09", title: "Mercato : un départ bouclé dans les de...", isImportant: false },
    { time: "01/09", title: "Inscription de Roony Bardghji : le Barça...", isImportant: false },
    { time: "01/09", title: "Fin du feuilleton : le verdict tombe pour ...", isImportant: false },
    { time: "01/09", title: "Rencontre décisive pour un retour tant ...", isImportant: false },
  ]

  return (
    <div className={styles.newsSection}>
      <div className={styles.newsHeader}>
        <span className={styles.infoIcon}>ℹ️</span>
        <h3>FC Barcelone Infos</h3>
      </div>

      <div className={styles.newsList}>
        {newsItems.map((item, index) => (
          <a key={index} href="#" className={styles.newsItem}>
            <span className={styles.newsTime}>{item.time}</span>
            <span className={`${styles.newsTitle} ${item.isImportant ? styles.importantNews : ""}`}>
              {item.title}
            </span>
          </a>
        ))}
      </div>

      <div className={styles.newsNavigation}>
        <button className={styles.navButton}>▲</button>
        <button className={styles.navButton}>▼</button>
        <a href="#" className={styles.allNewsLink}>
          • Tout le fil info
        </a>
      </div>
    </div>
  )
}

export default InfoComponent
