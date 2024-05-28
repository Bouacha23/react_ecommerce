import {  FaBars ,FaTimes , FaSignInAlt, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../../public/elogo.png"
import { useState } from 'react';
function Navbar() {
    const [menu ,setMenu] = useState(false)
    // function section 
    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <section className="Navbar z-10  top-0  z-[200] left-0 fl w-full  h-[70px] text-white py-8 px-8 absolute  sm:px-4">
                        <ul className= {menu?" menu absolute w-full left-0 top-0 fl flex-col items-cent justify-center gap-8   text-black font-bold  text-2xl bg-white  " : "hidden" }>
                            <FaTimes size={35} className=  'text-gray-300 cursor-pointer border-2 rounded-full border-gray-300 px-2' onClick={handleMenu} />
                            <Link onClick={handleMenu} className="hover:bg-gray-300 w-full p-4 text-center"to="/"><li>Home</li></Link>
                            <Link onClick={handleMenu} className="hover:bg-gray-300 w-full p-4 text-center"to="About"><li>About</li></Link>
                            <Link onClick={handleMenu} className="hover:bg-gray-300 w-full p-4 text-center"to="Contact"><li>Contact</li></Link>
                            <Link onClick={handleMenu} className="hover:bg-gray-300 w-full p-4 text-center"to="Shop"><li>Shop</li></Link>
                        </ul>
                <div className="container m-auto fl justify-between ">
                    <div className="navbar-logo fl gap-4">
                        <img className='w-[40px] h-[40px] ' src={logo} alt="logo" />
                        <FaBars  className="cursor-pointer pl-4 border-l-[1px] border-l-white lg:hidden" onClick={handleMenu} size={40}/>
                        <ul className='nav hidden gap-8 pl-4 border-l-[1px] border-l-white  lg:flex lg:itmes-center'>
                            <Link className=" hover:text-green-600"to="/"><li>Home</li></Link>
                            <Link className=" hover:text-green-600"to="About"><li>About</li></Link>
                            <Link className=" hover:text-green-600"to="Contact"><li>Contact</li></Link>
                            <Link className=" hover:text-green-600" to="Shop"><li>Shop</li></Link>
                        </ul>
                    </div>
                    <div className="list-container">
                        <ul className='list fl justify-between gap-4 '>
                                <li >
                                    <FaSignInAlt className='  sm:text-green-600' size={20}/>
                                    <h3>Log-in</h3>
                                </li>
                                <li>
                                    <FaSearch className='  sm:text-green-600' size={20}/>
                                    <h3>Search</h3>
                                </li>
                                <li className="relative">
                                    <div className="notifaction absolute top-0 h-w z-30  w-[10px] h-[10px] rounded-full -right-[10px] bg-black fl justify-center  animate-ping text-white text-[10px] ">1</div>
                                    <FaShoppingBag className='  sm:text-green-600' size={20}/>
                                    <h3>Basket</h3>
                                </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Navbar