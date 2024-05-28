import { useGetPlantsQuery } from "../../reudex/slice"
const PlanteList  = () => {

    const { data : plants , isLoading } = useGetPlantsQuery()

    return (
        <>
            {isLoading ? <p>is loading </p> : 
                plants.map((plant)=> (
                    <article key ={plant.id}>
                        <div className="img-container  transform w-full h-[30rem] md:h-[25rem] lg:h-[17rem]">
                            <img  className=" absolute top-0 left-0 w-full h-full  object-cover " src={plant.img}/>
                            <button className=" cart absolute hidden   left-[50%] w-[90%] -translate-x-[50%]  hover:bg-black   bottom-5 py-2 rounded-full  z-20 bg-pr text-white capitalize text-xl" > add to cart </button>
                        </div>
                        <div className="plant-text flex justify-between items-center py-8">
                            <div className="left">
                                <h3 className="text-3xl capitalize font-bold ">{plant.name}</h3>
                                <h4>{plant.category}</h4>
                            </div>
                            <div className="right">
                                <p className="font-bold text-2xl ">{`${plant.price}$`}</p>
                            </div>
                        </div>
                    </article>
                ))
            }
        </>
    )
}

export default PlanteList
