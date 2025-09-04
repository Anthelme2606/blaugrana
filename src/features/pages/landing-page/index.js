import Navbar from "@components/Header"
import ActuComponent from "@components/ActuComponent"
import MercatoComponent from "@components/MercatoComponent"
import MatchHistory from "@components/MatchHistory"
import ClubInfo from "@components/ClubInfo"
import Footer from "@components/Footer"
import "./landing-page.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <div className="hero-section">
          <h1>FC Barcelona</h1>
          <p>Més que un club</p>
        </div>
        <div className="content-grid">
          <ActuComponent />
          <MercatoComponent />
          <MatchHistory />
          <ClubInfo />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
