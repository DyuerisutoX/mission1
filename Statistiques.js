function statistiques(){
    //Initialisation letiables

    let saisie, nbreSaisie, plusPetit, plusGrand, somme, moyenne, result

    plusPetit = 0;
    plusGrand = 0;
    nbreSaisie = 0;
    somme = 0;
    moyenne = 0;

    //Algorithme à répéter jusqu'à ce que l'on tape 0

    do{

        saisie = saisirEntier()

        if (!isNaN(saisie)){

            if (saisie != 0){

                console.log("Vous avez saisie le nombre : " + saisie);

                nbreSaisie = calculNbreSaisie();                
                somme = calculSomme(somme, saisie);
                moyenne = calculMoyenne(nbreSaisie, somme);

                if (plusPetit == 0){
                    plusPetit = initPlusPetit(plusPetit, saisie);
                }

                if (saisie < plusPetit){
                    plusPetit = calculPlusPetit(plusPetit, saisie);
                }

                if (saisie > plusGrand){
                    plusGrand = calculPlusGrand(plusGrand, saisie);
                }
    
            }

        }

        else{

            alert("Erreur, veuillez saisir un entier")

        }

    }

    while (saisie !== 0)

    if(saisie === 0 && nbreSaisie === 0)
        {
            afficher("Au revoir");
            alert("Au revoir");
        }
        
    else
    {
        afficherFinal(result, nbreSaisie, plusPetit, plusGrand, somme, moyenne);
    }


    //Fonctions
    /**
     * M: Permet de saisir des valeurs numériques
     * O: Renvoie saisie qui est de type NUM
     * I: Ne prend aucun paramètre
     */
    function saisirEntier()
    {
        let saisie = 0;
        let entierValide = false;

        do
        {
            saisie = Number(prompt("Veuillez tapez un nombre: \n\n Tapez 0 pour quitter"))
            entierValide = saisie === parseInt(saisie, 10);

            if (entierValide)
            {
                saisie = parseInt(saisie, 10);
            }
            else
            {
                afficher("Erreur : votre saisie n'est pas un nombre entier !");
            }   
        }

        while (!entierValide)
        return saisie;        
    }

    /**
     * M: Permet de compter le nombre de saisies
     * O: Renvoie nbreSaisie qui est de type NUM
     * I: Ne prend aucun paramètre
     */
    function calculNbreSaisie()
    {
        nbreSaisie++;
        return nbreSaisie;
    }

    /**
     * M: Permet de calculer la somme de toutes les saisies
     * O: Renvoie somme qui est de type NUM
     * I: Prend en paramètres somme et saisie qui sont de type NUM
     */
    function calculSomme(somme, saisie)
    {
        somme = somme + saisie;
        return somme;
    }

    /**
     * M: Permet de calculer la moyenne de toutes les saisies
     * O: Renvoie moyenne qui est de type NUM
     * I: Prend en paramètres somme et nbreSaisie qui sont de type NUM
     */
    function calculMoyenne(nbreSaisie, somme)
    {
        moyenne = somme / nbreSaisie;
        return moyenne;
    }

    /**
     * M: Permet d'initialiser le plus petit nombre dès la première saisie
     * O: Renvoie plusPetit qui est de type NUM
     * I: Prend en paramètres plusPetit et saisie qui sont de type NUM
     */
    function initPlusPetit(plusPetit, saisie)
    {
        plusPetit = saisie;
        return plusPetit;
    }

    /**
     * M: Permet d'enregistrer le plus petit nombre que l'utilisateur a saisie
     * O: Renvoie plusPetit qui est de type NUM
     * I: Prend en paramètres plusPetit et saisie qui sont de type NUM
     */
    function calculPlusPetit(plusPetit, saisie)
    {
        plusPetit = saisie;
        return plusPetit;
    }

    /**
     * M: Permet d'enregistrer le plus grand nombre que l'utilisateur a saisie
     * O: Renvoie plusGrand qui est de type NUM
     * I: Prend en paramètres plusGrand et saisie qui sont de type NUM
     */
    function calculPlusGrand(plusGrand, saisie)
    {
        plusGrand = saisie;
        return plusGrand;
    }

    /**
     * M: Affiche les résultats des opérations efféctues
     * O: Ne renvoie rien
     * I: Prend en paramètres result qui de type CAR, ainsi que nbreSaisie, plusPetit, plusGrand, somme, moyenne
     */
    function afficherFinal(result, nbreSaisie, plusPetit, plusGrand, somme, moyenne){

        result = (nbreSaisie + ' nombres saisies\n' + 
        '- Compris entre ' + plusPetit + ' et ' + plusGrand + '\n' +
        '- Pour une somme de ' + somme + '\n' +  
        '- Et une moyenne de '+ moyenne);


        afficher(result);

        alert(result);

    }

    //Remplace le console.log
    function afficher(objet)
    {
        console.log(objet);
    }
        

}