const Day = require("./day");

class Planning {
    constructor(nom,niveau,duree){
        this.nom = nom;
        this.niveau = niveau;
        this.duree = duree;
        this.temps = [];
    }

    addDay(day){
        if(day instanceof Day){
            this.temps.push(day);
        }
    }
}

module.exports = Planning;