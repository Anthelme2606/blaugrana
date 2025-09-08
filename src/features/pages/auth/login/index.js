"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styles from "./login.module.css"

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate()

  const fakeUser = {
    email: "cataluna@gmail.com",
    username: "cataluna2025",
    password: "Cataluna@2025",
    role: "Admin",
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Vérification des identifiants
    if (
      (formData.username === fakeUser.username || formData.username === fakeUser.email) &&
      formData.password === fakeUser.password
    ) {
      toast.success("Connexion réussie 🎉", { position: "top-right" })
      
      // Redirection après un petit délai pour laisser afficher le toast
      setTimeout(() => {
        navigate("/dashboard")
      }, 1500)
    } else {
      toast.error("Identifiants incorrects ❌", { position: "top-right" })
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="28" fill="var(--color-bordeaux)" stroke="var(--border)" strokeWidth="2" />
              <path
                d="M20 30L26 36L40 22"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className={styles.logoText}>Barca - Actu</h1>
          <p className={styles.subtitle}>Connectez-vous à votre tableau de bord</p>
        </div>

        {/* Form Section */}
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              Nom d'utilisateur ou Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={styles.input}
              placeholder="Entrez votre nom d'utilisateur ou email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          <button type="submit" className={styles.loginButton}>
            Se connecter
          </button>

          <div className={styles.forgotPassword}>
            <a href="#" className={styles.forgotLink}>
              Mot de passe oublié ?
            </a>
          </div>
        </form>
      </div>

      {/* Toast container pour afficher les messages */}
      <ToastContainer />
    </div>
  )
}

export default Login
