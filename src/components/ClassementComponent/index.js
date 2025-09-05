import styles from "./classementcomponent.module.css"

const ClassementComponent = () => {
  const classementData = [
    { position: 1, equipe: "Real Madrid", points: 78, matchs: 30 },
    { position: 2, equipe: "FC Barcelona", points: 75, matchs: 30 },
    { position: 3, equipe: "Atlético Madrid", points: 68, matchs: 30 },
    { position: 4, equipe: "Real Sociedad", points: 62, matchs: 30 },
    { position: 5, equipe: "Villarreal", points: 58, matchs: 30 },
    { position: 6, equipe: "Real Betis", points: 55, matchs: 30 },
  ]

  return (
    <div className={styles.classementContainer}>
      <h2 className={styles.title}>Classement Liga 2024-25</h2>
      <div className={styles.classementTable}>
        <div className={styles.tableHeader}>
          <span>Pos</span>
          <span>Équipe</span>
          <span>Pts</span>
          <span>MJ</span>
        </div>
        {classementData.map((equipe) => (
          <div
            key={equipe.position}
            className={`${styles.tableRow} ${equipe.equipe === "FC Barcelona" ? styles.highlighted : ""}`}
          >
            <span className={styles.position}>{equipe.position}</span>
            <span className={styles.equipe}>{equipe.equipe}</span>
            <span className={styles.points}>{equipe.points}</span>
            <span className={styles.matchs}>{equipe.matchs}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClassementComponent
