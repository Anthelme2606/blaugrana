"use client"

import styles from "../MatchHistory/matchhistory.module.css"
import BarcaLogo from "@assets/fc-barcelona-logo.png"
import ValenciaLogo from "@assets/valencia-cf-logo.jpg"

const LigaMatch = () => {
  const upcomingMatches = [
    {
      id: 1,
      competition: "Liga - Journée 4",
      homeTeam: "BARCELONE",
      awayTeam: "VALENCE CF",
      homeTeamLogo: BarcaLogo,
      awayTeamLogo: ValenciaLogo,
      date: "Le 14/09/2025 à 21h00",
      venue: "Camp Nou",
    },
  ]

  const pastMatches = [
    {
      id: 1,
      competition: "Liga - Journée 3",
      homeTeam: "R. VALLADOLID",
      awayTeam: "BARCELONE",
      homeTeamLogo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U0cC34nioDqheI9BlpaFxpyPDDM5KE.png",
      awayTeamLogo: BarcaLogo,
      score: "1-1",
      forme: [true, true, true, true, false],
    },
  ]

  return (
    <>
      <div className={styles.sectionTitle1}>
        <span className={styles.sectionIcon}>🏆 Calendrier LA LIGA</span>
      </div>

      <div className={styles.sectionTitle}>
        <span className={styles.sectionIcon}>À venir - Journée 4</span>
      </div>

      {upcomingMatches.map((match) => (
        <div key={match.id} className={styles.matchCard}>
          <div className={styles.matchInfo}>
            <div className={styles.team}>
              <img src={match.homeTeamLogo} alt={match.homeTeam} />
              <span>{match.homeTeam}</span>
            </div>
            <div className={styles.versus}>vs</div>
            <div className={styles.team}>
              <img src={match.awayTeamLogo} alt={match.awayTeam} />
              <span>{match.awayTeam}</span>
            </div>
          </div>
          <div className={styles.matchDetails}>
            <div className={styles.date}>🕐 {match.date}</div>
            <div className={styles.locationIcon}>📍 {match.venue}</div>
          </div>
          <div className={styles.betButton}>
            <span className={styles.pmuLogo}>PMU</span>
            Pariez sur le match
            <span className={styles.pmuLogo}>PMU</span>
          </div>
        </div>
      ))}

      <div className={styles.sectionTitle}>
        <span className={styles.sectionIcon}>🏆 Passés : Liga - Journée 3</span>
      </div>

      {pastMatches.map((match) => (
        <div key={match.id} className={styles.matchCard}>
          <div className={styles.matchInfo}>
            <div className={styles.team}>
              <img src={match.homeTeamLogo} alt={match.homeTeam} />
              <span>{match.homeTeam}</span>
            </div>
            <div className={styles.score}>{match.score}</div>
            <div className={styles.team}>
              <img src={match.awayTeamLogo} alt={match.awayTeam} />
              <span>{match.awayTeam}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default LigaMatch
