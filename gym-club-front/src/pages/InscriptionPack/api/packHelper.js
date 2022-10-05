const service = require('../../../services/restAPI');
const Pack = require('../models/pack');
const getPacks = async () =>{
    const packs = [];
    const data = await service.executeQuery('abonnements');
    console.log(`data: \n ${data[0].services[0].cours[0]}`);
    data.forEach(p =>{
        let pack = new Pack(p.id,p.designation,p.montant,p.services);
        p.services.forEach(s=>{
            s.cours.forEach(c =>{
                pack.addCours(c)
            })
        })
        packs.push(pack);
    })
    return packs;
}

module.exports = {
    getPacks
}