import styles from "./espaceadsense.module.css"

const EspaceAdsense = () => {
  const adsenseData = [
    {
      id: 1,
      nom: "Publicité Premium",
      description: "Espaces publicitaires de haute visibilité sur notre site",
      image: "/placeholder-kg55c.png",
      type: "Banner 728x90",
    },
    {
      id: 2,
      nom: "Sponsoring Matchs",
      description: "Partenariats exclusifs pour les retransmissions de matchs",
      image: "/placeholder-uwg6r.png",
      type: "Video Pre-roll",
    },
    {
      id: 3,
      nom: "Publicité Mobile",
      description: "Formats optimisés pour l'expérience mobile",
      image: "/placeholder-9242v.png",
      type: "Native Ads",
    },
  ]

  return (
    <div className={styles.academiesContainer}>
      {/* <h2 className={styles.title}>Espace Adsense</h2>
      <div className={styles.academiesGrid}>
        {adsenseData.map((adsense) => (
          <div key={adsense.id} className={styles.academieCard}>
            <img src={adsense.image || "/placeholder.svg"} alt={adsense.nom} className={styles.academieImage} />
            <div className={styles.academieContent}>
              <h3 className={styles.academieName}>{adsense.nom}</h3>
              <p className={styles.academieDescription}>{adsense.description}</p>
              <div className={styles.academieStats}>
                <span className={styles.joueurs}>{adsense.type}</span>
              </div>
              <button className={styles.voirPlusBtn}>En savoir plus</button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default EspaceAdsense
