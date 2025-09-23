import styles from "../ClubInfo/clubinfo.module.css"
import UEFA from "@assets/league.png"

const UefaComponent = () => {
  const classementUefaData = [
    { position: 1, club: "FC Barcelona", points: 10, matches: 4, diff: +8, isBarcelone: true },
    { position: 2, club: "Newcastle United", points: 9, matches: 4, diff: +5 },
    { position: 3, club: "Arsenal", points: 8, matches: 4, diff: +4 },
    { position: 4, club: " Paris Saint-Germain", points: 7, matches: 4, diff: +2 },
    { position: 5, club: "Bayer Leverkusen", points: 6, matches: 4, diff: 0 },
    { position: 6, club: "Atalanta", points: 5, matches: 4, diff: -1 },
    { position: 7, club: "Benfica", points: 4, matches: 4, diff: -2 },
    { position: 8, club: "Tottenham Hotspur", points: 3, matches: 4, diff: -6 }
  ]

  return (
    <div className={styles.classementSectionUefa}>
      <div className={styles.headerbetween}>
        <div className={styles.headerImage2}>
          <img src={UEFA} alt="laliga" />
        </div>
        <div className={styles.headerText}>
          <span>Classement UEFA</span>
        </div>
      </div>

      <div className={styles.classementHeaderUefa}>
        <div className={styles.classementMenu}>
          <span className={styles.classementIconUefa}>☰</span>
        </div>
        <div>
          <h3>UEFA</h3>
        </div>
      </div>

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
  )
}

export default UefaComponent
