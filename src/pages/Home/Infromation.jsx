import { FaTruck, FaLock, FaCalendarAlt, FaHeadset } from 'react-icons/fa';

function Infromation() {
    return (
        <div className="information py-24 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 px-2 gap-12 md:gap-8">
            <article className='inf-article fl flex-col md:flex-row '>
                <FaTruck className='inf-icon' size={40}  />
                <div className="article-text text-center md:text-left">
                        <h3 className=' font-medium capitalize '>free shipping </h3>
                        <p className='text-three text-[0.8rem]'>Capped at $39 per order</p>
                </div>
            </article>
            <article className='inf-article fl flex-col md:flex-row '>
                <FaCalendarAlt className='inf-icon' size={40}  />
                <div className="article-text text-center md:text-left">
                        <h3 className=' font-medium capitalize '> 14-Day Returns</h3>
                        <p className='text-three text-[0.8rem]'>Shop with confidence</p>
                </div>
            </article>
            <article className='inf-article fl flex-col md:flex-row '>
                <FaLock className='inf-icon' size={40}  />
                <div className="article-text text-center md:text-left">
                        <h3 className=' font-medium capitalize '>Securety Payments </h3>
                        <p className='text-three text-[0.8rem]'>Up to 12 months installments</p>
                </div>
            </article>
            <article className='inf-article fl flex-col md:flex-row '>
                <FaHeadset className='inf-icon' size={40}  />
                <div className="article-text text-center md:text-left">
                        <h3 className=' font-medium capitalize '>f24/7 Dedicated Support </h3>
                        <p className='text-three text-[0.8rem]'>Delivered to your door</p>
                </div>
            </article>
        </div>
    )
}

export default Infromation