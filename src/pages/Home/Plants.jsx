import  PlanteList from "../Shop/plantes"
import { Link } from "react-router-dom"

const Plants = () =>{
    return (
        <>  
            <div className="head flex items-center justify-between py-12">
                <h1 className="text-5xl font-bold ">Top Trending Products</h1>
                <button className="btn-pr py-2 font-bold text-xl  rounded-full "><Link to="/Shop">shop plants</Link></button>
            </div>
            <div className="plant-container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                <PlanteList/>
            </div>
        </>
    )
}

export default Plants