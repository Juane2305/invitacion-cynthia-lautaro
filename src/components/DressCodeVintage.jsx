import dress from '../assets/dress-code.svg'


const DressCodeVintage = ({dress_code}) => {
    return (
      <div className="bg-[#FAF3E0] p-6 text-center rounded-md max-w-md mx-auto">
        <h2 className="font-vintageText text-4xl mb-5">Código de Vestimenta</h2>
        <div className="flex items-center gap-4 justify-center">
          <img src={dress} alt="Traje" className="w-44 h-44 " />
        </div>
        <p className="mb-4 text-2xl">Estilo {dress_code}</p>
      </div>
    );
  };

  export default DressCodeVintage;