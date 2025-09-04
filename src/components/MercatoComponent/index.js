import styles from "./mercatocomponent.module.css"
import Placehold from "@assets/placeholder.png"
const MercatoComponent = () => {
  const transferts = [
    {
      id: 1,
      joueur: "Kylian Mbappé",
      type: "Arrivée",
      club: "PSG",
      montant: "180M€",
      statut: "Rumeur",
      image: Placehold,
    },
    {
      id: 2,
      joueur: "Frenkie de Jong",
      type: "Départ",
      club: "Manchester United",
      montant: "85M€",
      statut: "Négociation",
      image: Placehold,
    },
    {
      id: 3,
      joueur: "Joao Felix",
      type: "Arrivée",
      club: "Atletico Madrid",
      montant: "Prêt",
      statut: "Confirmé",
      image: Placehold,
    },
  ]

  const getStatutColor = (statut) => {
    switch (statut) {
      case "Confirmé":
        return "#10B981"
      case "Négociation":
        return "#F59E0B"
      case "Rumeur":
        return "#6B7280"
      default:
        return "#6B7280"
    }
  }

  const getTypeColor = (type) => {
    return type === "Arrivée" ? "#A50034" : "#004D98"
  }

  return (
    <section className={styles.mercatoSection} id="mercato">
      <div className={styles.sectionHeader}>
        <h2>Mercato</h2>
        <div className={styles.headerLine}></div>
      </div>

      <div className={styles.mercatoList}>
        {transferts.map((transfert) => (
          <div key={transfert.id} className={styles.mercatoCard}>
            <div className={styles.playerInfo}>
              <img src={transfert.image || "/placeholder.svg"} alt={transfert.joueur} className={styles.playerImage} />
              <div className={styles.playerDetails}>
                <h4>{transfert.joueur}</h4>
                <span className={styles.clubName}>{transfert.club}</span>
              </div>
            </div>

            <div className={styles.transferInfo}>
              <span className={styles.transferType} style={{ backgroundColor: getTypeColor(transfert.type) }}>
                {transfert.type}
              </span>
              <span className={styles.montant}>{transfert.montant}</span>
              <span className={styles.statut} style={{ color: getStatutColor(transfert.statut) }}>
                {transfert.statut}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.voirPlus}>Voir tous les transferts</button>
    </section>
  )
}

export default MercatoComponent
