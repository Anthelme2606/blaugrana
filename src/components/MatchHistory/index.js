"use client"

import { useState } from "react"
import styles from "./matchhistory.module.css"
import BarcaLogo from "@assets/fc-barcelona-logo.png"
import LevanteLogo from "@assets/levante-logo.jpg"
import ValenciaLogo from "@assets/valencia-cf-logo.jpg"
import RealLogo from "@assets/real-madrid-crest.png"
import BayernLogo from "@assets/bayern-munich-logo.png"
"use client"



const MatchHistory = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

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
      homeTeamLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U0cC34nioDqheI9BlpaFxpyPDDM5KE.png",
      awayTeamLogo: BarcaLogo,
      score: "1-1",
      forme: [true, true, true, true, false],
    },
    // {
    //   id: 2,
    //   competition: "Liga - Journée 2",
    //   homeTeam: "LEVANTE",
    //   awayTeam: "BARCELONE",
    //   homeTeamLogo: LevanteLogo,
    //   awayTeamLogo: BarcaLogo,
    //   score: "2-3",
    //   forme: [true, true, true, true, false],
    // },
  ]

   const uefaMatches = [
    {
      id: 1,
      competition: "Liga - Journée 3",
      homeTeam: "R. VALLADOLID",
      awayTeam: "BARCELONE",
      homeTeamLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U0cC34nioDqheI9BlpaFxpyPDDM5KE.png",
      awayTeamLogo: BarcaLogo,
      score: "1-1",
      forme: [true, true, true, true, false],
    },
    // {
    //   id: 2,
    //   competition: "Liga - Journée 2",
    //   homeTeam: "LEVANTE",
    //   awayTeam: "BARCELONE",
    //   homeTeamLogo: LevanteLogo,
    //   awayTeamLogo: BarcaLogo,
    //   score: "2-3",
    //   forme: [true, true, true, true, false],
    // },
  ]

  return (
    <section className={styles.matchSection} id="matchs">
      <div className={styles.matchList}>
        <div className={styles.adsenseContainer}>

        </div>
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
                <img src={match.homeTeamLogo || "/placeholder.svg"} alt={match.homeTeam} />
                <span>{match.homeTeam}</span>
              </div>
              <div className={styles.versus}>vs</div>
              <div className={styles.team}>
                <img src={match.awayTeamLogo || "/placeholder.svg"} alt={match.awayTeam} />
                <span>{match.awayTeam}</span>
              </div>
            </div>
            <div className={styles.matchDetails}>
              <div className={styles.date}>
                <span className={styles.clockIcon}>🕐{match.date}</span>
              
              </div>
              <div className={styles.locationIcon}>📍</div>
            </div>
          
          </div>
        ))}

        <div className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🏆 Passés : Liga - Journée 3</span>

        </div>

        {pastMatches.map((match) => (
          <div key={match.id} className={styles.matchCard}>
            {match.id === 2 && (
              <div className={styles.competitionHeader}>
                <span className={styles.sectionIcon}>🏆 Liga - Journée 2</span>
               
              </div>
            )}
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
            {match.id === 2 && (
              <div className={styles.forme}>
                <span>😊 Forme :</span>
                <div className={styles.formeIndicators}>
                  {match.forme.map((result, index) => (
                    <div key={index} className={`${styles.formePoint} ${result ? styles.win : styles.loss}`}></div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
         <div className={styles.sectionTitle2}>
          <span className={styles.sectionIcon}>🏆 Calendrier UEFA</span>
        </div>
          {uefaMatches.map((match) => (
          <div key={match.id} className={styles.matchCard}>
            <div className={styles.matchInfo}>
              <div className={styles.team}>
                <img src={match.homeTeamLogo || "/placeholder.svg"} alt={match.homeTeam} />
                <span>{match.homeTeam}</span>
              </div>
              <div className={styles.versus}>vs</div>
              <div className={styles.team}>
                <img src={match.awayTeamLogo || "/placeholder.svg"} alt={match.awayTeam} />
                <span>{match.awayTeam}</span>
              </div>
            </div>
            <div className={styles.matchDetails}>
              <div className={styles.date}>
                <span className={styles.clockIcon}>🕐{match.date}</span>
              
              </div>
              <div className={styles.locationIcon}>📍</div>
            </div>
            {/* <div className={styles.betButton}>
              <span className={styles.pmuLogo}>PMU</span>
              Pariez sur le match
              <span className={styles.pmuLogo}>PMU</span>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default MatchHistory

