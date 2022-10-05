class Pack{
    constructor(id,title,prix,services){
        this.id = id;
        this.title = title;
        this.prix = prix;
        this.services = services;
        this.cours = []
    }

    addCours(c){
        this.cours.push(c);
    };
}
module.exports = Pack;