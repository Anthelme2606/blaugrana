import styles from "../ClubInfo/clubinfo.module.css"
import LIGA from "@assets/laliga-rb.png"

const LigaComponent = () => {
  const classemenLigatData = [
    { position: 4, club: "Villarreal CF", points: 7, matches: 3, diff: 7 },
    { position: 5, club: "Barcelone", points: 7, matches: 3, diff: 4, isBarcelone: true },
    { position: 6, club: "Espanyol", points: 7, matches: 3, diff: 2 },
    { position: 7, club: "Getafe", points: 6, matches: 3, diff: 0 },
    { position: 8, club: "Elche", points: 5, matches: 3, diff: 2 },
  ]

  return (
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
  )
}

export default LigaComponent
