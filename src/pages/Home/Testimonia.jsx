import { useContext } from "react"
import DataProv  from "../../context/usecontext"
import { FaComment } from 'react-icons/fa';



function Testimonia() {
    const {comment} = useContext(DataProv)
    
    const  comments= comment.map( (test) => (
        <article className=" p-8 border-[1px] border-gray-500 hover:text-white  rounded-sm hover:bg-black  shadow-sm border-2" key={test.id}>
            <div className="fl justify-between mb-8 " >
                <img className="w[70px] h-[70px] rounded-full" src={test.img}  />
                <div className="text">
                    <h3 className="font-bold text-[0.9rem] capitalize">{test.name}</h3>
                    <p className="text-gray-500 text-[0.8rem] ">{`${test.time} year with us `}</p>
                </div>
                <FaComment className="text-pr"   size={35}/>
            </div>
            <p className="text-gray-500  text-[0.7rem ]">{test.job}</p>
        </article>
    ))
    return (
        <section className=" py-12  px-4 grid md:grid-cols-3 gap-4 grid-cols-1 ">
            <div className="head md:col-span-3  pb-8">
                <p className="text-pr text-xl font-bold">Testimonial</p>
                <h1 className="text-5xl font-extrabold">What The People Thinks About Us</h1>
            </div>
            {comments}
        </section>
    )
}

export default Testimonia