const service = require('../../../services/restAPI');

const getCours = async () =>{
    let cours = [];
    const data = await service.executeQuery('ServicesGetService');
    data.forEach(c =>{
        cours.push({name:c.nom,cours:c.cours});
    });
    return cours;
}

module.exports = {
    getCours
}