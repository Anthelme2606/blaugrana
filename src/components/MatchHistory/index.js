"use client"

import { useState } from "react"
import styles from "./matchhistory.module.css"
import BarcaLogo from "@assets/fc-barcelona-logo.png"
import LevanteLogo from "@assets/levante-logo.jpg"
import ValenciaLogo from "@assets/valencia-cf-logo.jpg"
import RealLogo from "@assets/real-madrid-crest.png"
import BayernLogo from "@assets/bayern-munich-logo.png"
const MatchHistory = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingMatches = [
    {
      id: 1,
      competition: "Liga - Journée 4",
      homeTeam: "FC Barcelona",
      awayTeam: "Valencia CF",
      homeTeamLogo: BarcaLogo,
      awayTeamLogo: ValenciaLogo,
      date: "Le 14/09/2025 à 21h00",
      venue: "Camp Nou",
    },
    {
      id: 2,
      competition: "Champions League",
      homeTeam: "Bayern Munich",
      awayTeam: "FC Barcelona",
      homeTeamLogo: BayernLogo,
      awayTeamLogo: BarcaLogo,
      date: "Le 18/09/2025 à 20h00",
      venue: "Allianz Arena",
    },
  ]

  const pastMatches = [
    {
      id: 1,
      competition: "Liga - Journée 2",
      homeTeam: "Levante",
      awayTeam: "FC Barcelona",
      homeTeamLogo: LevanteLogo,
      awayTeamLogo: BarcaLogo,
      score: "2-3",
      forme: [true, true, true, true, false], // true = victoire, false = défaite
    },
    {
      id: 2,
      competition: "Liga - Journée 1",
      homeTeam: "FC Barcelona",
      awayTeam: "Real Madrid",
      homeTeamLogo: BarcaLogo,
      awayTeamLogo: RealLogo,
      score: "3-1",
      forme: [true, true, false, true, true],
    },
  ]

  return (
    <section className={styles.matchSection} id="matchs">
      <div className={styles.sectionHeader}>
        <h2>Matchs</h2>
        <div className={styles.headerLine}></div>
      </div>

      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${activeTab === "upcoming" ? styles.active : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          À venir
        </button>
        <button
          className={`${styles.tab} ${activeTab === "past" ? styles.active : ""}`}
          onClick={() => setActiveTab("past")}
        >
          Passés
        </button>
      </div>

      <div className={styles.matchList}>
        {activeTab === "upcoming"
          ? upcomingMatches.map((match) => (
              <div key={match.id} className={styles.matchCard}>
                <div className={styles.competitionBadge}>{match.competition}</div>
                <div className={styles.matchInfo}>
                  <div className={styles.team}>
                    <img src={match.homeTeamLogo || "/placeholder.svg"} alt={match.homeTeam} />
                    <span>{match.homeTeam}</span>
                  </div>
                  <div className={styles.versus}>VS</div>
                  <div className={styles.team}>
                    <img src={match.awayTeamLogo || "/placeholder.svg"} alt={match.awayTeam} />
                    <span>{match.awayTeam}</span>
                  </div>
                </div>
                <div className={styles.matchDetails}>
                  <div className={styles.date}>{match.date}</div>
                  <div className={styles.venue}>📍 {match.venue}</div>
                </div>
              </div>
            ))
          : pastMatches.map((match) => (
              <div key={match.id} className={styles.matchCard}>
                <div className={styles.competitionBadge}>{match.competition}</div>
                <div className={styles.matchInfo}>
                  <div className={styles.team}>
                    <img src={match.homeTeamLogo || "/placeholder.svg"} alt={match.homeTeam} />
                    <span>{match.homeTeam}</span>
                  </div>
                  <div className={styles.score}>{match.score}</div>
                  <div className={styles.team}>
                    <img src={match.awayTeamLogo || "/placeholder.svg"} alt={match.awayTeam} />
                    <span>{match.awayTeam}</span>
                  </div>
                </div>
                <div className={styles.forme}>
                  <span>Forme :</span>
                  <div className={styles.formeIndicators}>
                    {match.forme.map((result, index) => (
                      <div key={index} className={`${styles.formePoint} ${result ? styles.win : styles.loss}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  )
}

export default MatchHistory
