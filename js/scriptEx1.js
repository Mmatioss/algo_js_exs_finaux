"use strict";


let personnage=["John",10]; // initialisation du personnage et de ses hp
let liste=["Annissa-Wejdene","Pardon_Moi-Louane","Hey_Bro-Eloïz","Mamma_Mia-Mentissa","Vivre-Gregoire"]; //initialisation liste de musique
let trajet=[0,30]; //initialisation des donnée du trajet [nb changement taxi,nb feux rouge restant]
while(personnage[1]>0 && trajet[1]>0){ //boucle tent que hp personage pas égale a 0 ou plus de feu rouge
    if(liste[Math.floor(Math.random() * liste.length)]=="Annissa-Wejdene"){ //regarde si le nombre entiée aléatoire donne la mauvaise musique 
        personnage[1]=personnage[1]-1; //dégat santé
        trajet[0]++ //+1 changement de taxi
        trajet[1]-- //-1 feux rouge restant
    }else{ //si une musique ok
        trajet[1]-- //-1 trajet restant
    }
}
switch(personnage[1]){ //on regarde la vie du personnage
    case 0: // si elle est a 0
        console.log(personnage[0]+" a exploser lors de son trajet au feu rouge numéro"+trajet[0]);
        break;
    default: // si elle est pas a 0 et qu'on est sortie de la boucle alors il a réussit a rentrer chez lui
        console.log(personnage[0]+" est arriver chez lui après "+trajet[0]+" changement de taxi");
}
