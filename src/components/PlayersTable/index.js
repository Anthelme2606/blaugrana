"use client"

import { useState } from "react"
import styles from "./playersTable.module.css"

const PlayersTable = () => {
  const [filter, setFilter] = useState("tous")

  const players = [
    { id: 1, nom: "Ter Stegen", poste: "Gardien", age: 31, statut: "actif", buts: 0, passes: 245 },
    { id: 2, nom: "Pedri", poste: "Milieu", age: 21, statut: "actif", buts: 8, passes: 156 },
    { id: 3, nom: "Gavi", poste: "Milieu", age: 19, statut: "actif", buts: 5, passes: 134 },
    { id: 4, nom: "Lewandowski", poste: "Attaquant", age: 35, statut: "actif", buts: 22, passes: 67 },
    { id: 5, nom: "Raphinha", poste: "Ailier", age: 27, statut: "actif", buts: 12, passes: 89 },
    { id: 6, nom: "Ansu Fati", poste: "Attaquant", age: 21, statut: "pret", buts: 3, passes: 23 },
  ]

  const filteredPlayers = players.filter((player) => {
    if (filter === "tous") return true
    return player.statut === filter
  })

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <h3 className={styles.tableTitle}>Liste des Joueurs</h3>
        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${filter === "tous" ? styles.active : ""}`}
            onClick={() => setFilter("tous")}
          >
            Tous les joueurs
          </button>
          <button
            className={`${styles.filterBtn} ${filter === "actif" ? styles.active : ""}`}
            onClick={() => setFilter("actif")}
          >
            Joueurs actifs
          </button>
          <button
            className={`${styles.filterBtn} ${filter === "pret" ? styles.active : ""}`}
            onClick={() => setFilter("pret")}
          >
            Joueurs en prêt
          </button>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Poste</th>
              <th>Âge</th>
              <th>Statut</th>
              <th>Buts</th>
              <th>Passes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <tr key={player.id}>
                <td className={styles.playerName}>{player.nom}</td>
                <td>{player.poste}</td>
                <td>{player.age}</td>
                <td>
                  <span className={`${styles.status} ${styles[player.statut]}`}>
                    {player.statut === "actif" ? "Actif" : "En prêt"}
                  </span>
                </td>
                <td className={styles.stat}>{player.buts}</td>
                <td className={styles.stat}>{player.passes}</td>
                <td>
                  <button className={styles.actionBtn}>Modifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PlayersTable
