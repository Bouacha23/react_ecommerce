import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Offer from '../component/offer';
function Contact() {
  return (
    <>
    <section className="contact p-8 relative md:px-24 md:py-32">
      <p className=' md:block hidden absolute font-light top-1/2 left-0  rotate-90  '>send request </p>
      <div className="coontainer m-auto grid md:grid-cols-2 gap-2">
          <div className="contact-head flex flex-col gap-8">
            <h1 className=' text-2xl  md:text-5xl font-bold  capitalize '>Got A project <p>or A </p> partnership in mind ? </h1>

            <div className="contact-article-container grid grid-cols-2 py-8 px-4">
              <article className='flex flex-col gap-4'>
                <FaPhone className='icon ' size={50}/>
                <h3 className='font-bold text-xl capitalize'>Phone : </h3>
                <div className="text">
                  <p className="contact-p">0675764416 </p>
                  <p className="contact-p">bouachanajme@gmail.com </p>
                </div>
              </article>

              <article className='flex flex-col gap-4'>
                <FaEnvelope className='icon' size={50}/>
                <h3 className='font-bold text-lg capitalize'>gmail :</h3>
                <div className="text">
                  <p className="contact-p">0675764416 </p>
                  <p className="contact-p">bouachanajme@gmail.com </p>
                </div>
              </article>
            </div>
          </div>

          <div className="contact-form-container py-12">
            <form className="contact-form grid grid-cols-2 gap-4 " action="">
                  <input type="text" placeholder="Enter your name" />
                  <input type="text" placeholder="your phone number" />
                  <input className='col-span-2' type="text" placeholder="your E-mail" />
                  <input className='col-span-2' type="text" placeholder="TEll About your project " />
                  <button className='btn-pr   p-4 rounded-full'>send a message </button>
            </form>
          </div>
        
      </div>
    </section>
    </>
  )
}

export default Contact