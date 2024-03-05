const url = `https://gateway.marvel.com:443/v1/public/characters?limit=50&ts=1&apikey=2667a8c4783ab91fa3362199013c1a96&hash=cd43e7a7353002b011b0d80581a1b748`

export const obtenerPersonajes = async() => {

    try {
        const response = await fetch(url);
        const datos = await response.json();
        const personajes = datos.data.results;
        let personajesData = [];
        personajes.forEach(element => {
            personajesData.push({ nombre: element.name, imagen: element.thumbnail.path, descripcion: element.description })
        });
        return personajesData;
    } catch (error) {
        console.log("hubo un error", error)
    }

}