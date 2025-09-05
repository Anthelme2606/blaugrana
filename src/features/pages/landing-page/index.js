import Navbar from "@components/Header"
import ActuComponent from "@components/ActuComponent"
import MercatoComponent from "@components/MercatoComponent"
import MatchHistory from "@components/MatchHistory"
import ClubInfo from "@components/ClubInfo"
import Footer from "@components/Footer"
import ClassementComponent from "@components/ClassementComponent";
import EspaceAdsense from "@components/EspaceAdsense";
import "./landing-page.css";

function LandingPage() {
  return (
    <>
     <Navbar />
<div className="App">
     
      <main className="main-content">
        <div className="main-title-section">
          {/* <h1>FC Barcelona - Més que un club</h1> */}
        </div>

        <div className="three-column-layout">
         
          <div className="center-column">
            <div className="espace-defense">
             
              <MatchHistory />
            </div>
          </div>
           <div className="left-column">
            <ActuComponent />
          </div>
          <div className="right-column">
            <ClubInfo />
          </div>
        </div>

        <EspaceAdsense />
      </main>
      
    </div>
    <Footer />
    </>
  )
}

export default LandingPage
