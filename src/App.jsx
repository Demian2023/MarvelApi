import { useState, useEffect } from 'react'
import { obtenerPersonajes } from "./fetch"
import "./index.css"
import "./cargando.css"

function App() {
  const [personajes, setPersonajes] = useState([]);
  console.log(personajes)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const personajes = await obtenerPersonajes();
        setPersonajes(personajes);
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h1>Nombres de Personajes</h1>
      <ul>
        <div className="contenedor">
          {personajes.length == 0 ? ( <div className="loader"></div> ) :
          (personajes.map((personaje, index) => (
          <div className="contenedorPersonajes" key={index}>
            <li> <h2>{personaje.nombre}</h2> </li>
            <img src={`${personaje.imagen}.jpg`} alt="" />
            <h3>{personaje.descripcion}</h3>
            <div className="blur"></div>
          </div>)
          ))}
        </div>
      </ul>
    </>
  )
}

export default App
