const API_ADRESSE = "localhost";
const API_PORT = "7187";
const API_PROTOCOL = "https";
const TARGET = `${API_PROTOCOL}://${API_ADRESSE}:${API_PORT}/api`;

//GET
const executeQuery = async (url) => {
    const result = await fetch(`${TARGET}/${url}`);
    return result.json();
}

//POST 

//PUT

//DELETE

module.exports = {
    executeQuery
}