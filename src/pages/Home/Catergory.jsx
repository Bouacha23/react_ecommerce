import img from "../../assets/pexels-pixabay-269255.jpg"

function Catergory() {
    return (
        <div className="catergory grid grid-cols-1 gap-12 md:gap-4 md:grid-cols-3 px-4 sm:px-2 py-12">
            <article className="caterogry-article p-8 relative h-[25rem] md:h-[25rem] fl justify-center ">
                <img className=" absolute top-0 left-0 w-full h-full" src={img} alt="" />
                <div className=" md:p-2  transition-all duration-1000 category-text bg-black/45  w-[90%] h-[90%] md:h-[80%] z-10 fl  justify-center flex-col   ">
                        <h2 className="text-4xl md:font-bold md:text-4xl md:p-2  text-white font-meduime ">Air purifying   </h2>
                        <h2 className="text-4xl md:font-bold md:text-4xl text-white font-meduime">plants   </h2>
                </div>
            </article>
            <article className="caterogry-article p-8 relative h-[25rem] md:h-[25rem] fl justify-center ">
                <img className=" absolute top-0 left-0 w-full h-full" src={img} alt="" />
                <div className=" md:p-2  transition-all duration-1000 category-text bg-black/45  w-[90%] h-[90%] md:h-[80%] z-10 fl  justify-center flex-col   ">
                        <h2 className="text-4xl md:font-bold md:text-4xl text-white font-meduime ">Air purifying   </h2>
                        <h2 className="text-4xl md:font-bold md:text-4xl text-white font-meduime">plants   </h2>
                </div>
            </article>
            <article className="caterogry-article p-8 relative h-[25rem] md:h-[25rem] fl justify-center ">
                <img className=" absolute top-0 left-0 w-full h-full" src={img} alt="" />
                <div className=" md:p-2 transition-all duration-1000 category-text bg-black/45  w-[90%] h-[90%] md:h-[80%] z-10 fl  justify-center flex-col   ">
                        <h2 className="text-4xl md:font-bold md:text-4xl md:p-2  text-white font-meduime ">Air purifying   </h2>
                        <h2 className="text-4xl md:font-bold md:text-4xl md:p-2  text-white font-meduime">plants   </h2>
                </div>
            </article>
        </div>
    )
}

export default Catergory