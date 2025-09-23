"use client"

import styles from "../MatchHistory/matchhistory.module.css"
import BarcaLogo from "@assets/fc-barcelona-logo.png"

const UefaMatch = () => {
  const uefaMatches = [
    {
      id: 1,
      competition: "UEFA - Matchday 1",
      homeTeam: "R. VALLADOLID",
      awayTeam: "BARCELONE",
      homeTeamLogo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U0cC34nioDqheI9BlpaFxpyPDDM5KE.png",
      awayTeamLogo: BarcaLogo,
      date: "Le 21/09/2025 à 20h00",
      venue: "Santiago Bernabeu",
    },
  ]

  return (
    <>
      <div className={styles.sectionTitle2}>
        <span className={styles.sectionIcon}>🏆 Calendrier UEFA</span>
      </div>

      {uefaMatches.map((match) => (
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
    </>
  )
}

export default UefaMatch
