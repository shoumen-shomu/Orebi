import Ads from "../layouts/Ads"
import BannerTwo from "../layouts/BannerTwo"
import Intro from "../layouts/Intro"
import NewArrival from "../layouts/NewArrival"
import OurBestsellers from "../layouts/OurBestsellers"
import SpecialOffers from "../layouts/SpecialOffers"
import Contact from "./Contacts"


const Home = () => {
  return (
    <div>
      <Intro/>
      <Ads/>
      <NewArrival/>
      <OurBestsellers/>
      <BannerTwo/>
      <SpecialOffers/>
    </div>
  )
}

export default Home