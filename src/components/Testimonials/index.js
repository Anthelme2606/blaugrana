"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import styles from "./testimonials.module.css"
import FlagCountry from "@components/FlagCountry"
const testimonials = [
  {
    name: "Aminata Diallo",
    country: "Sénégal",
    program: "Master en Commerce International",
    university: "Université Paris-Dauphine",
    rating: 5,
    countryCode:"SN",

    text: "Grâce à FranceStudy+, j'ai pu réaliser mon rêve d'étudier en France. L'équipe m'a accompagnée de A à Z, depuis le choix de ma formation jusqu'à mon installation à Paris. Je recommande vivement leurs services !",
    image: "https://placehold.co/500x500",
  },
  {
    name: "Omar Benali",
    country: "Maroc",
    program: "École d'Ingénieur",
    university: "CentraleSupélec",
    rating: 5,
    countryCode:"MA",
    text: "L'accompagnement de FranceStudy+ a été exceptionnel. Ils ont su me guider dans mes choix et m'ont aidé à constituer un dossier solide. Aujourd'hui, je suis étudiant ingénieur grâce à eux !",
    image: "https://placehold.co/500x500",
  },
  {
    name: "Grace Mukamana",
    country: "Rwanda",
    program: "Master en Santé Publique",
    university: "Sorbonne Université",
    rating: 5,
    countryCode:"RW",
    text: "FranceStudy+ m'a non seulement aidée avec les démarches administratives, mais aussi avec l'intégration sociale. Je me sens vraiment soutenue dans mon parcours académique en France.",
    image: "https://placehold.co/500x500",
  },
]

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials} id="temoignages">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Ce que disent nos étudiants
          </h2>
          <p className={styles.subtitle}>
            Découvrez les témoignages de ceux qui ont réussi leur projet d'études en France avec notre accompagnement
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.quoteIcon}>
                <Quote size={24} />
              </div>

              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={styles.star} fill="currentColor" />
                ))}
              </div>

              <p className={styles.testimonialText}>"{testimonial.text}"</p>

              <div className={styles.studentInfo}>
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className={styles.studentImage}
                />
                <div className={styles.flagCountry}>
                  <FlagCountry countryCode={testimonial.countryCode}/>
                  </div>
                <div className={styles.studentDetails}>
                  <h4 className={styles.studentName}>{testimonial.name}</h4>
                  <p className={styles.studentCountry}>{testimonial.country}</p>
                  <p className={styles.studentProgram}>{testimonial.program}</p>
                  <p className={styles.studentUniversity}>{testimonial.university}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
