import img from "../../assets/pexels-vlada-karpovich-4451739.jpg"
import img1 from "../../assets/pexels-valeria-ushakova-3094220.jpg"
function Tools() {
    return (
        <section className="Tolls grid gap-4 md:grid-cols-2 ">
            <article className="caterogry-article toll-article p-8 relative h-[15rem] md:h-[25rem] fl md:justify-start justify-center ">
                <img className=" absolute top-0 left-0 w-full h-full object-cover" src={img } alt="" />
                <div className=" md:p-2  transition-all duration-1000 category-text bg-black/45 w-[90%]  md:w-[60%] h-[90%] md:h-[80%] z-10 fl justify-center md:block  ">
                        <h2 className=" capitalize text-4xl md:font-bold md:text-6xl text-white font-meduime  ">tools accessories plants  </h2>
                </div>
            </article>
            <article className="caterogry-article toll-article p-8 relative h-[15rem] md:h-[25rem] fl md:justify-start  justify-center ">
                <img className=" absolute top-0 left-0 w-full h-full https://www.youtube.com/watch?v=NGdHiprd_QYobject-cover" src={img1 } alt="" />
                <div className=" md:p-2  transition-all duration-1000 category-text bg-black/70  w-[90%] md:w-[50%] h-[90%] md:h-[80%] z-10 fl justify-center   ">
                        <h2 className=" capitalize text-4xl md:font-bold md:text-6xl text-white font-meduime   "> pet friendly plants   </h2>
                </div>
            </article>
        </section>
    )
}

export default Tools