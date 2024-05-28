import { FaFacebook , FaInstagram , FaLinkedin  ,FaPhoneSquare } from "react-icons/fa"
import { MdEmail } from 'react-icons/md';

function Offer() {
    return (
        <>
            <section className="offer bg-black text-white">
                <div className="contaienr m-auto">
                    <div className="follow">
                        <h1>Follow Us</h1>
                        <div className="media">
                            <FaFacebook />
                            <FaInstagram/>
                            <FaLinkedin/>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact-phone">
                        <FaPhoneSquare />
                        <p>0675764416</p>
                        </div>
                        <div className="contact-email">
                        <MdEmail/>
                        <p>bouachanajme@gamil.com</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offer