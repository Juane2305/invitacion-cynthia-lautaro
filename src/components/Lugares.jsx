import rings from '../assets/rings.svg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Places = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='w-full pt-10 flex flex-col items-center gap-y-16'>
      <section className='flex flex-col gap-y-20 md:gap-y-0 md:flex-row justify-center gap-x-36'>
        <div className=' flex flex-col justify-center items-center gap-y-3' data-aos= 'fade-right'>
          <img src={rings} alt="" className='size-40'/>
          <h2 className='text-center font-semibold text-2xl tracking-wider'>CIVIL</h2>
          <p className='font-extralight text-xl text-center px-5 text-gray-700'>El civil se realizará en  <strong>Pucara de Buena Vista</strong> a las <strong>18:00 hs</strong></p>
          <div className="flex justify-center items-center mt-5">
            <a
              href="https://maps.app.goo.gl/uoGRsNEXsjc8svBw7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" text-white bg-[#a8ad9a] hover:bg-transparent hover:text-green-900 text-xl border-2 border-[#a8ad9a] cursor-pointer py-4 px-6">
                Cómo llegar
              </button>
            </a>
          </div>
        </div>
       
      </section>
        
    </div>
  )
}

export default Places