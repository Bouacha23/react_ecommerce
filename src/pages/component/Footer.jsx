import logo from "../../../public/elogo.png"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
function Footer() {
  return (
      <section className="footer min-h-[00px] bg-black text-white   ">
        <div className="container m-auto  p-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:p-0 lg:py-12 ">
          <div className="footer-head fl flex-col text-center md:col-span-2  ">
              <div className="logo fl gap-4"> 
                  <img  className="w-[40px] h-[40px] rounded-sm border-white border-[1px] "src={logo} alt="logo" />
                  <h1 className="text-2xl font-bold text-sec font-light ">word <span className="text-white font-bold">Plant</span></h1>
              </div>
              <p className="text-sec text-lg">While the lovely valley teems with vapour around me, and the meridian sun</p>
          </div>


            <article className="  fl flex-col    ">
              <h3 className="text-2xl font-bold  ">visit link </h3>
              <Link className="text-sec">privacy</Link>
              <Link className="text-sec">terms conditions </Link>
            </article>
            <article className=" text-center fl flex-col">
              <h3 className="text-2xl font-bold  ">company </h3>
              <Link to="/" className="text-sec">Home</Link>
              <Link to="/About" className="text-sec">About us </Link>
              <Link to="/Contact" className="text-sec">Contact us </Link>
            </article>
            <article className=" text-center fl flex-col">
              <h3 className="text-2xl font-bold  ">Contact </h3>
              <p className="text-sec">+213 0675764416</p>
              <p className="text-sec">bouachanajme@gmail.com</p>
            </article>
            <article className=" text-center fl flex-col">
              <h3 className="text-2xl font-bold  ">Address </h3>
              <p className="text-sec">Algeria , Annaba</p>
              <p className="text-sec">Oued a dhabe souk elille </p>
            </article>
          <div className="footer-end pt-12 border-t-[1px] border-t-gray-300 text-center  fl flex-col gap-4 md:col-span-6 md:col-span-3">
            <p>© 2024 word plan Shop - creating white front-end devloper . All rights reserved.</p>
            <div className="media fl gap-8 ">
              <FaFacebook size={20}/>
              <FaInstagram size={20}/>
              <FaTwitter size={20}/>
              <FaLinkedin size={20}/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Footer