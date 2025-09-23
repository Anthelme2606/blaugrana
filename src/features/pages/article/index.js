import styles from "./article.module.css"
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import EspaceAdsense from "@components/EspaceAdsense";
import InfoComponent from "../../../components/Info";
import LigaComponent from "../../../components/Liga";
import UefaComponent from "../../../components/Uefa";
import NewsArticle from "../../../components/News";
import LigaMatch from "../../../components/LigaMatch";
import UefaMatch from "../../../components/UefaMatch";
const Article =()=>{
  return (
    <div className={styles.global}>
    <Navbar/>
    <div className={styles.main}>
    <div className={styles.App}>
     
  <div className={styles.col1}>
    <EspaceAdsense/>
    <NewsArticle/>
    <div className={styles.history}>
      <div className={styles.history1}>
       <LigaMatch/>
      </div>
      <div className={styles.history2}>
        <UefaMatch/>
      </div>
    </div>
    </div>
  <div className={styles.col2}>
    <InfoComponent/>
    <EspaceAdsense/>
    <LigaComponent/>
    <UefaComponent/>
  </div>


    </div>

    <EspaceAdsense/>
    </div>
    <Footer/>
    </div>
  )
}
export default Article;