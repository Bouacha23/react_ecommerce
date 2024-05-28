import backgound from "../../assets/contact.jpeg"

function Notification() {
    return (
        <section className="notfication relative min-h-[400px] md:min-h-[550px] p-4 fl justify-center ">
                <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-50"></div>
            <div className="container m-auto">
                <img  className=" absolute top-0 left-0 w-full h-full -z-10 " src={backgound} alt="notication-img" />
                <div className="notfication-text relative  p-4  md:px-12 fl flex-col ">
                    <h1 className="text-3xl text-center  md:text-6xl text-white font-medium capitalize">be the first to hear </h1>
                    <p className=" my-4 font-bold text-sec text-center  text-xl">Sign up for the latest trends and offers and save 10% off your next Hortology order.</p>
                    <form className="   fl flex-col md:flex-row md:bg-white md:p-[5px]  md:rounded-2xl " action="">
                        <input className="  outline-none w-full px-12 py-4 rounded-lg text-sec  " type="text" placeholder="Enter you email hire ?" />
                        <button className=" transition duration-700 w-full px-12 py-4 rounded-lg bg-pr md:w-[250px] text-white text-lg capitalize hover:bg-black  " > submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Notification