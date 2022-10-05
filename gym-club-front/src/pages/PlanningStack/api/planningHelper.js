const service = require('../../../services/restAPI');
const Day = require('../models/day');
const Planning = require('../models/planning');

const getCours = async () =>{
    let plannings = [];
    let data = await service.executeQuery('Cours/GetCours');
    data.forEach(d =>{
        let p = new Planning(d.nom,d.niveau,d.duree);
        d.emploiTemps.forEach(temps =>{
            let day = new Day(temps.jour,temps.heureDebut,temps.heureFin);
            p.addDay(day);
        })
        plannings.push(p);
    })
    return plannings;
}

module.exports = {
    getCours
}