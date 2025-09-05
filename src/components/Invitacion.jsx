import Lugares from "./Lugares";
import Asistencia from "../components/Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import hojasVerdes2 from "../assets/hojasVerdes2.svg";
import hojasVerdesIzq from "../assets/hojasVerdesIzq.svg";
import DressCodeVintage from "./DressCodeVintage";
import DatosBancarios from "./DatosBancarios";

const Invitacion = () => {


  const colorPrincipal =  "#faf3e0"

  return (
    <div className="w-full font-vintageText relative overflow-hidden bg-[#faf3e0]">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"></div>
      <div className="fixed top-4 right-4 z-50">
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-full text-center bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1740755815/Disen%CC%83o_Elegante_gem3ut_xq0rzs.webp')] bg-cover bg-no-repeat bg-center md:bg-fixed border-b-2 border-[#800020] relative">
      <h2 className="text-3xl md:text-5xl text-lime-900 z-10 italic mb-4">¡Nos casamos!</h2>
      <h1 className="text-5xl md:text-8xl  text-gold z-10 italic">
          Cynthia & Lautaro
        </h1>
        <p className="mt-8 text-2xl text-lime-900">27 . 09 . 2025</p>
      </div>

      <div className="relative z-10">
        <section id="lugares" className="py-10 border-b-2 border-[#800020]">
          <Lugares/>
        </section>
        <section className="relative my-10 border-b-2 border-[#800020]">
            <img
              src={hojasVerdesIzq}
              alt="Decoración"
              className="absolute left-[-80px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
            />
            <DressCodeVintage dress_code="Formal"/>
            <img
              src={hojasVerdes2}
              alt="Decoración"
              className="absolute right-[-80px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
            />
          </section>
          <section className="my-10 border-b-2 border-[#800020]">
            <DatosBancarios
              texto="Nuestro regalo es tu presencia, pero si nos querés ayudar con nuestra luna de miel, te dejamos nuestros datos bancarios"
              cbu="0000003100043029160632"
              alias="CynyLau27.09"
              banco="Mercado Pago"
              nombre="Lautaro Emanuel Azurmendi"           
              claseContenedor="bg-[#faf3e0] py-10 text-center text-black"
              claseBoton="border-principal-dark text-white bg-principal-dark hover:bg-transparent hover:text-green-900 text-xl"
              textSize="text-xl"
              background={{backgroundColor: colorPrincipal}}
              styleBotonModal={{ backgroundColor: '#a8ad9a',  borderColor: '#A3B18A'}}
              claseBotonModal={{backgroundColor: "#800020", borderColor: "#800020"}}
              styleBorderModal={{ borderColor: colorPrincipal }}
              claseModal="bg-black/20"
              borderModal="border-[#800020]"
              textColor="text-[#800020]"
            />
          </section>
          <section className="">
            <Asistencia
              linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSf2eAmPhINTPZF319zzavNKL9PKSTi7mhLeHu5Wr8F_SjyGdw/viewform?usp=dialog"
              clase="py-10 bg-[#faf3e0]"
              claseButton="border-[#a8ad9a] text-white bg-[#a8ad9a] hover:bg-transparent hover:text-green-900 text-xl border-2 border-[#a8ad9a] cursor-pointer"
            />
          </section>
        <TextoFinal textClass="text-xl italic" textoFinal="¡Gracias por venir!"/>
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
