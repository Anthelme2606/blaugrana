"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, BookOpen, MapPin } from "lucide-react"
import styles from "./hero.module.css"
import HeroImage from "@assets/hero.png"
import ApplicationStepsCarousel from "../ApplicationStepCaroussel"

export default function HeroSection() {
  return (
    <section className={styles.hero} id="accueil">
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>
              Réalisez votre rêve d'étudier en <span className={styles.highlight}>France</span>
            </h1>
            <p className={styles.subtitle}>
              FranceStudy+ vous accompagne à chaque étape de votre projet d'études en France. De l'orientation à
              l'intégration, nous sommes là pour vous guider vers la réussite.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <Users className={styles.statIcon} />
                <div>
                  <div className={styles.statNumber}>
                    <span className={styles.percentage}>500+</span>
                    <span className={styles.statLabel}>Étudiants accompagnés</span>
                  </div>
                </div>
              </div>
              <div className={styles.stat}>
                <BookOpen className={styles.statIcon} />
                <div>
                  <div className={styles.statNumber}>
                    <span className={styles.percentage}>95%</span>
                    <span className={styles.statLabel}>Taux de réussite</span>
                  </div>
                </div>
              </div>
              <div className={styles.stat}>
                <MapPin className={styles.statIcon} />
                <div>
                  <div className={styles.statNumber}>
                    <span className={styles.percentage}>50+</span>
                    <span className={styles.statLabel}>Villes partenaires</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <motion.button className={styles.primaryButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Commencer mon projet
                <ArrowRight size={20} />
              </motion.button>
              <motion.button className={styles.secondaryButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Découvrir nos services
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className={styles.imageContent}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={HeroImage || "/placeholder.svg"}
              alt="Étudiants internationaux heureux en France"
              className={styles.heroImage}
            />
            <ApplicationStepsCarousel /> 
          </motion.div>
        </div>
      </div>
    </section>
  )
}
