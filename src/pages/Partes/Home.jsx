import Infromation from "../Home/Infromation"
import Catergory from "../Home/Catergory"
import Tools from "../Home/Tools"
import Testimonia from "../Home/Testimonia"
import Hero from "./Hero"
import Plants from "../Home/Plants";

const Home = () => {
  return (
    <>
      <section className="home">
          <Hero/>
        <div className="container m-auto">
          <Infromation/>
          <Catergory/>
          <Plants/>
          <Tools/>
          <Testimonia/>
        </div>
      </section>
    </>
  )
}

export default Home