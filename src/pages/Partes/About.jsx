import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import img from "../../assets/pexels-pixabay-269255.jpg"
import { useContext } from "react" 
import DataContext from "../../context/usecontext"
function About() {

  // varibles section 
  const {TeamMember} = useContext(DataContext)
  // fonction section 
  const teams = TeamMember.map((team) => (
    <article key={team.id} className="p-4  md:p-0 fl flex-col  gap-4 hover:bg-black hover:text-white  ">
    <img className=" md:translate-y-0 -translate-y-[3rem] h-[380px] object-cover " src={team.img} />
    <h5 className="text-xl text-balck capitalize font-extrabold ">{team.name} </h5>
    <p className=" text-gray-500 capitalize  text-[0.9rem]  ">{team.job}</p>
    <div className="article-contact fl gap-4 ">
      <FaFacebook size={25}/>
      <FaLinkedin size={25}/>
      <FaTwitter size={25}/>
      <FaInstagram size={25}/>
    </div>
  </article>
  ))

  return (
    <section className="about py-24 px-8 ">
        <div className="conatiner m-auto ">
            <div className="about-head grid grid-cols-1 gap-8 md:grid-cols-3  ">
              <h1 className="text-2xl  md:text-4xl font-bold   capitalize py-8">We Are Here To Make Your Website Look More Elegant</h1>
              <article className="text-left fl flex-col">
                <h3 className="text-pr text-lg uppercase font-bold w-full">our product </h3>
                <p className="mt-4 text-three text-[0.9rem] w-full">Plants range in size from diminutive duckweeds only a few millimetres in length to the giant sequoias of California that reach 90 metres </p>
              </article>
              <article className="text-left fl flex-col ">
                <h3 className="text-pr text-lg uppercase font-bold w-full">our product </h3>
                <p className=" mt-4 text-three text-[0.9rem] w-full">Plants range in size from diminutive duckweeds only a few millimetres in length to the giant sequoias of California that reach 90 metres </p>
              </article>
            </div>
            <div className="img-container py-16 ">
              <img src={img} className="max-h-[80vh] w-full object-cover  " />
            </div>

            <div className="team-container text-center fl flex-col  justify-center">
                <head className="fl flex-col justify-center gap-8 md:w-1/3">
                <h3 className="text-pr text-lg uppercase font-bold w-full">our team </h3>
                <h2 className="text-4xl font-bold capitalize">Meet The Minds Shaping An Industry</h2>
                </head>
                <div className="team-peoples py-16 grid grid-cols-1 gap-16 md:gap-12 md:grid-cols-4 sm:grid-cols-2">
                  {teams}
                </div>

            </div>
        </div>
      </section>
  )
}

export default About