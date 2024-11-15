import data from '../../data'
import '../styles/hoteles.css';

const {hoteles} = data;

const Hoteles = () => {
  return (
    <div className='hoteles'>
      <h2 className='hoteles-title'>Sugerencias de Hospedaje</h2>

      <div className='div-hoteles'>

        {hoteles.map((hotel)=>(
          <div className='hotel-card sombra'>
            <p className='hotel-card_title'>{hotel.nombre}</p>
            <div className='hotel-card_section'>
              <p>{hotel.direccion}</p>
              <p>{hotel.direccion_colonia}</p>
              <p>{hotel.telefono}</p>
            </div>
            <div className='hotel-card-buton centrar'>
              <button>
                <a href={`${hotel.ubicacion}`}>Ver Ubicación</a>
              </button>
            </div>
          </div>
        ))}

        {/* <div className='hotel-card sombra'>
            <p className='hotel-card_title'>Rinconada Hotel Boutique</p>
            <div className='hotel-card_section'>
              <p> Gral. Baltazar R. Leyva Manzilla 19</p>
              <p>centro, Iguala de la independencia, Gro</p>
              <p>7333332158</p>
            </div>
            <div className='hotel-card-buton centrar'>
              <button>
                <a href="https://maps.app.goo.gl/GK7ARLS9ESHJT2pa8">Ver Ubicación</a>
              </button>
            </div>
        </div>

        <div className='hotel-card sombra'>
          <p className='hotel-card_title'>Hotel Real 1900</p>
          <div className='hotel-card_section'>
            <p>Miguel Hidalgo 6, col. Centro </p>
            <p>Iguala de la independencia, Gro</p>
            <p>733 110 1106</p>
          </div>
          <div className='hotel-card-buton centrar'>
            <button>
              <a href="https://maps.app.goo.gl/bcRQiHRzWotJcCNe9">Ver Ubicación</a>
            </button>
          </div>
        </div>

        <div className='hotel-card sombra'>
          <p className='hotel-card_title'>Gran Plaza Hotel Centro Historico</p>
          <div className='hotel-card_section'>
            <p>Miguel Hidalgo 7, col. Centro </p>
            <p>Iguala de la independencia, Gro</p>
            <p>733 332 6990</p>
          </div>
          <div className='hotel-card-buton centrar'>
            <button>
              <a href="https://maps.app.goo.gl/KpSXNAmm8gdbRCeB6">Ver Ubicación</a>
            </button>
          </div>
        </div> */}

        


      </div>
    </div>
  )
}

export default Hoteles