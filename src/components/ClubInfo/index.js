import styles from "./clubinfo.module.css"
import LIGA from "@assets/laliga-rb.png"
import UEFA from "@assets/league.png";
const ClubInfo = () => {
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

  const classemenLigatData = [
    { position: 4, club: "Villarreal CF", points: 7, matches: 3, diff: 7 },
    { position: 5, club: "Barcelone", points: 7, matches: 3, diff: 4, isBarcelone: true },
    { position: 6, club: "Espanyol", points: 7, matches: 3, diff: 2 },
    { position: 7, club: "Getafe", points: 6, matches: 3, diff: 0 },
    { position: 8, club: "Elche", points: 5, matches: 3, diff: 2 },
  ]
  const classementUefaData = [
    { position: 1, club: "FC Barcelona", points: 10, matches: 4, diff: +8, isBarcelone: true },
    { position: 2, club: "Newcastle United", points: 9, matches: 4, diff: +5 },
    { position: 3, club: "Arsenal", points: 8, matches: 4, diff: +4 },
    { position: 4, club: " Paris Saint-Germain", points: 7, matches: 4, diff: +2 },
    { position: 5, club: "Bayer Leverkusen", points: 6, matches: 4, diff: 0 },
    { position: 6, club: "Atalanta", points: 5, matches: 4, diff: -1 },
    { position: 7, club: "Benfica", points: 4, matches: 4, diff: -2 },
    { position: 8, club: "Tottenham Hotspur", points: 3, matches: 4, diff: -6 }
  ];


  return (
    <section className={styles.clubSection} id="club">
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

      <div className={styles.classementSection}>
        <div className={styles.classementHeader}>
          <div className={styles.headerbetween}>
            <div className={styles.headerImage}>
              <img src={LIGA} alt="laliga" />
            </div>
            <div className={styles.headerText}>
              <span>Classement LA LIGA</span>
            </div>
          </div>

          {/* <div className={styles.classementMenu}>
        <span className={styles.classementIcon}>☰</span>
          <h3>Classement</h3>
          </div>
          <div>
            <h3>LALIGA</h3>
          </div> */}

        </div>
        {/* <div className={styles.classementHeader}>
          <div className={styles.classementMenu}>
            <span className={styles.classementIcon}>☰</span>
         
          </div>
          <div>
            <h3>LALIGA</h3>
          </div>

        </div> */}

        <div className={styles.classementTableLiga}>
          <div className={styles.tableHeader}>
            <span className={styles.positionCol}>#</span>
            <span className={styles.clubCol}>Club</span>
            <span className={styles.pointsCol}>Pts</span>
            <span className={styles.matchesCol}>J</span>
            <span className={styles.diffCol}>Diff</span>
          </div>

          {classemenLigatData.map((team, index) => (
            <div key={index} className={`${styles.tableRow} ${team.isBarcelone ? styles.barceloneRow : ""}`}>
              <span className={styles.positionCol}>{team.position}</span>
              <span className={styles.clubCol}>{team.club}</span>
              <span className={styles.pointsCol}>{team.points}</span>
              <span className={styles.matchesCol}>{team.matches}</span>
              <span className={styles.diffCol}>{team.diff}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.classementSectionUefa}>
        <div className={styles.headerbetween}>
          <div className={styles.headerImage2}>
            <img src={UEFA} alt="laliga" />
          </div>
          <div className={styles.headerText}>
            <span>Classement UEFA</span>
          </div>
        </div>
        {/* <div className={styles.classementHeaderUefa}>
          <div className={styles.classementMenu}>
            <span className={styles.classementIconUefa}>☰</span>
           
          </div>
          <div>
            <h3>UEFA</h3>
          </div>

        </div> */}

        <div className={styles.classementTableUefa}>
          <div className={styles.tableHeaderUefa}>
            <span className={styles.positionCol}>#</span>
            <span className={styles.clubCol}>Club</span>
            <span className={styles.pointsCol}>Pts</span>
            <span className={styles.matchesCol}>J</span>
            <span className={styles.diffCol}>Diff</span>
          </div>

          {classementUefaData.map((team, index) => (
            <div key={index} className={`${styles.tableRowUefa} ${team.isBarcelone ? styles.barceloneRowUefa : ""}`}>
              <span className={styles.positionCol}>{team.position}</span>
              <span className={styles.clubCol}>{team.club}</span>
              <span className={styles.pointsCol}>{team.points}</span>
              <span className={styles.matchesCol}>{team.matches}</span>
              <span className={styles.diffCol}>{team.diff}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClubInfo
