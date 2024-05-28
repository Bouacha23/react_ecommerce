import img from "../../assets/hero.jpeg"
import { FaPlayCircle } from 'react-icons/fa';
import Plants from "../Home/Plants";

function Hero() {
    return (
        <section className="hero py-4 relative grid grid-cols-1 md:grid-cols-2  ">
            <div className=" p-8 md:pl-16 fl  w-full  h-full ">
                <img className=" object-cover absolute top-0 left-0 md:w-[60%] w-full h-full -z-10 " src={img}  />
                <div className="  absolute top-0 left-0 md:w-[60%] w-full h-full -z-9  bg-black/20"  > </div>
                <div className="hero-text z-20  ">
                    <div className="top py-12 flex flex-col gap-[20px]  text-white">
                        <h3 className="text-lg font-bold  " >Plant shop </h3>
                        <h1 className="text-5xl md:text-8xl font-light ">
                            <p>create </p>
                            <p>your orban jungele</p>
                        </h1>
                        <p className="text-gray-300">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p>
                    </div>
                    <div className="btns fl  ">
                        <button className=" py-[12px] px-12 bg-green-600 text-white hover:bg-white  hover:text-green-500 rounded-full capitalize ">shop now </button>
                        <button className="fl ">
                            <FaPlayCircle  className="text-white  " size={35}/>
                            <p className="text-white  font-bold " >wacth our vidio </p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hero-offer">

            </div>
        </section>
    )
}

export default Hero