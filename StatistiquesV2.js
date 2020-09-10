function statistiques(){
    //Initialisation variables

    let saisie, nbreSaisie, plusPetit, plusGrand, somme, moyenne, result

    plusPetit = 0;
    plusGrand = 0;
    nbreSaisie = 0;
    somme = 0;
    moyenne = 0;

    //Algorithme à répéter jusqu'à ce que l'on tape 0

    do{

        saisie = saisirEntier()//parseInt(prompt("Tapez un nombre"));

        if (!isNaN(saisie)){

            if (saisie != 0){

                console.log("Vous avez saisie le nombre : " + saisie);

                nbreSaisie = calculNbreSaisie(nbreSaisie);                
                somme = calculSomme(somme, saisie);
                moyenne = calculMoyenne(somme, nbreSaisie);

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

    while (saisie != 0)

    afficher2(result, nbreSaisie, plusPetit, plusGrand, somme, moyenne);


    //Fonctions
    function saisirEntier()
    {
        var saisie = 0;
        var entierValide = false;

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

    function calculNbreSaisie()
    {
        nbreSaisie ++;
    }

    function calculSomme(somme, saisie)
    {
        somme += saisie;
        return somme;
    }

    function calculMoyenne(somme, nbreSaisie)
    {
        moyenne = 0;
        moyenne = somme / nbreSaisie;
        return moyenne;
    }

    function initPlusPetit(plusPetit, saisie)
    {
        plusPetit = saisie;
        return plusPetit;
    }

    function calculPlusPetit(plusPetit, saisie)
    {
        plusPetit = saisie;
        return plusPetit;
    }

    function calculPlusGrand(plusGrand, saisie)
    {
        plusGrand = saisie;
        return plusGrand;
    }

    

    function afficher2(result, nbreSaisie, plusPetit, plusGrand, somme, moyenne){

        result = (nbreSaisie + ' nombres saisies\n' + 
        '- Compris entre ' + plusPetit + ' et ' + plusGrand + '\n' +
        '- Pour une somme de ' + somme + '\n' +  
        '- Et une moyenne de '+ moyenne);


        console.log(result);

        alert(result);

    }

    function afficher(objet)
    {
        console.log(objet);
    }
        



}