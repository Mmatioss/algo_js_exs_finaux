"use strict";
let caractéristique=["blond(e)","sportif","intelo","manager","policier","geek","nain"]; // création tableau des caractéristiques
let nom=["Lewis","Sebastian","Lando","Fernando","Max","Esteban","Pierre","Charle"]; // création tableau des noms
let nbPerso=5; // instanci le nombre de personnage
let listeMort="RIP "; // instanci la liste de mort
let persos=Array(); // instanci le tableau des personnages vivants

class personnage{ //instancit la classe
    constructor(name,vie,carac,probM,probD,probDEtM){ // choisit les différentes stats
        this.name=name;
        this.vie=vie;
        this.carac=carac;
        this.probM=probM;
        this.probD=probD;
        this.probDEtM=probDEtM;
    }
    quelleAttaque(){ // définit l'action
        let atta=Math.floor(Math.random() * 10); //définit la prob de l'action en cour
        switch(this.probM<this.probDetM){ // si prob mort inf  a prob dégat et mort retourn true sinon false (permet le fonctionement de la probabilité)
            case true: // si true
                if(atta<=this.probM){ //si prob action inf ou égale a prob mort
                    console;log(this.name+"est mort"); //dire "truc" est mort
                    listeMort=listeMort+this.name+" "; // ajouter "truc" a la liste de mort
                    persos=persos.filter((perso)=> perso.name!==this.name); //retirer "truc" de la liste des persos vivants
                }else if(atta<=this.probDEtM){ // sinon si prob action inf ou égale a prob dégat et mort
                    console.log(this.name+" a infliger 15 dmg et est mort"); //dire 15 dégat et "truc mort"
                    Jason.vie-=15; //retirer 15 pv de Jason
                    listeMort=listeMort+this.name+" "; // ajouter "truc" a la liste de mort
                    persos=persos.filter((perso)=> perso.name!==this.name);//retirer "truc" de la liste des persos vivants
                }else{ //sinon
                    console.log(this.name+" a infliger 10 dmg"); // dire a infliger 10dégat
                    Jason.vie-=10; //retirer 10 pv de Jason
                }
                break;
            case false: // si false
                if(atta<=this.probDEtM){ //si prob action inf ou égale a prob dégat et mort
                    console.log(this.name+" a infliger 15 dmg et est mort"); //dire 15 dégat et "truc mort"
                    Jason.vie-=15; //retirer 15 pv de Jason
                    listeMort=listeMort+this.name+" "; // ajouter "truc" a la liste de mort
                    persos=persos.filter((perso)=> perso.name!==this.name); //retirer "truc" de la liste des persos vivants
                }else if(atta<=this.probM){ //sinon si prob action inf ou égale a prob mort
                    console.log(this.name+" est mort"); //dire "truc" est mort
                    listeMort=listeMort+this.name+" "; // ajouter "truc" a la liste de mort
                    persos=persos.filter((perso)=> perso.name!==this.name); //retirer "truc" de la liste des persos vivants
                }else{ //sinon
                    console.log(this.name+" a infliger 10 dmg"); // dire a infliger 10dégat
                    Jason.vie-=10;  //retirer 10 pv de Jason
                }
                break;
            
        }
    }
}

let Jason=new personnage("Jason",100,"Tueur",null,null,null); // instancit jason en objet avec une classe
for(let i=0;i<nbPerso;i++){ // faire une boucle de la longueur du nombre de perso voulu
    let choitNomIndex=Math.floor(Math.random() * nom.length); // instancit l'index du choit du nom
    let choitCaracIndex=Math.floor(Math.random() * caractéristique.length); // instancit l'index du choit du caractère
    persos.push(new personnage(nom[choitNomIndex],true,caractéristique[choitCaracIndex],Math.floor(Math.random() * 5),10,Math.floor(Math.random() * 5))); // instancit l'objet avec une classe et des stats aléatoire (prob dégat dépent de l'aléatoire des deux autre dans le code)
    nom.splice(choitNomIndex,1); //retir le nom utiliser de la liste de nom pour éviter les duplicata
    caractéristique.splice(choitCaracIndex,1); //retir la caractéristique utiliser de la liste des caractéristique pour éviter les duplicata
}

while(Jason.vie!=0 && persos.length!=0){ // du moment que Jason n'est pas mort et que tout les persos ne sont pas morts
    persos[Math.floor(Math.random() * persos.length)].quelleAttaque(); // faire l'action sur un personnage vivant aléatoire
}
if(Jason.vie!=0){ // si jason n'est pas mort
    console.log("Jason a gagner et "+listeMort); // dire Jason a gagner et mettre la liste de mort
}else{// sinon cela veut forcément dire que Jason est mort
    console.log("les survivants on gagner mais "+listeMort); // dire que Jason est mort et quelle personnage son mort
}
