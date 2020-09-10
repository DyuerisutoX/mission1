function creerVoiture()
{
    let citroen;
    afficher("Test de controle des paramètres");
    afficher(" ");

    //On teste les saisies
    afficher("5 paramètres ont été saisies");
    try
    {//Erreur dans le nombre de paramètres saisies
        citroen = new Voiture ("FM682E", "Bleu", 100, 95, 50);
    }
    catch (e)
    {
        afficher(e.message);
    }
    afficher(" ");

    afficher("La couleur n'est pas un texte");
    try
    {//Erreur dans la saisie de couleur
        citroen = new Voiture ("FM682E", 0x100, 100, 95, 50, 5);
    }
    catch (e)
    {
        afficher(e.message);
    }
    afficher(" ");

    afficher("Le poids n'est pas un nombre");
    try
    {//Erreur dans la saisie de poids
        citroen = new Voiture ("FM682E", "Bleu", "cent", 95, 50, 5);
    }
    catch (e)
    {
        afficher(e.message);
    }
    afficher(" ");

    afficher("La puissance n'est pas un nombre");
    try
    {//Erreur dans la saisie de puissance
        citroen = new Voiture ("FM682E", "Bleu", 100, "quatre-vingt quinze", 50, 5);
    }
    catch (e)
    {
        afficher(e.message);
    }
    afficher(" ");

    afficher("La capacité du réservoir n'est pas un nombre");
    try
    {//Erreur dans la saisie de réservoir
        citroen = new Voiture ("FM682E", "Bleu", 100, 95, "cinquante", 5);
    }
    catch (e)
    {
        afficher(e.message);
    }
    afficher(" ");

    afficher("Le nombre de place n'est pas un nombre");
    try
    {//Erreur dans la saisie du nbre de places
        voiture = new Voiture ("FM682E", "Bleu", 100, 95, 50, "cinq");
    }
    catch (e)
    {
        afficher(e.message);
    }
    afficher("-----------------------------------------------------------------------------------------------------------------------------------");

    citroen = new Voiture ("FM682E", "Bleu", 100, 95, 50, 5);
    //Test création de voiture
    if (citroen)
    {
        
        afficher(citroen.getTableauDeBord());
        afficher(" ");

        afficher("Immatriculation: " + citroen.getImmatriculation());
        afficher("Couleur: " + citroen.getCouleur());
        afficher("Poids: " + citroen.getPoids());
        afficher("Puissance: " + citroen.getPuissance());
        afficher("Capacité réservoir: " + citroen.getCapReservoir());
        afficher("Nombre de places: " + citroen.getNbPlaces());
        afficher("Essence actuel: " + citroen.getEssenceActuel());
        afficher("Assurance: " + citroen.getAssurance());

        afficher("-----------------------------------------------------------------------------------------------------------------------------------");

        afficher("Test de l'assurance");
        afficher(" ");
                
        afficher("L'utilisateur a saisi \"toto\"");
        citroen.setAssurance("toto");    //Erreur si assurance n'est pas vrai ou faux
        afficher(" ");


        afficher("L'utilisateur a saisi \"false\" en string");
        citroen.setAssurance("false");
        afficher(" ");

        afficher("L'utilisateur a saisi \"false\"");
        citroen.setAssurance(false);
        afficher(citroen.getTableauDeBord());
        afficher(" ");

        afficher("L'utilisateur a saisi \"true\"");
        citroen.setAssurance(true);
        afficher(citroen.getTableauDeBord());

        afficher("-----------------------------------------------------------------------------------------------------------------------------------");

        afficher("Test de repeindre");
        afficher(" ");

        citroen.repeindre(10);     //Erreur si repeindre n'est pas une chaine de caractères
        afficher(" ");

        afficher("L'utilisateur a saisi \"bleu\"");
        citroen.repeindre("bleu")
        afficher(citroen.getTableauDeBord());
        afficher(" ");

        afficher("L'utilisateur a saisi \"rouge\"");
        citroen.repeindre("Rouge")
        afficher(citroen.getTableauDeBord());

        afficher("-----------------------------------------------------------------------------------------------------------------------------------");

        afficher("Test de mettreEssence");
        afficher(" ");

        afficher("L'utilisateur a saisi \"tata\"");
        citroen.mettreEssence("tata");     //Erreur si mettreEssence n'est pas un entier
        afficher(" ");

        afficher("L'utilisateur a saisi une trop grosse quantité d'essence");
        citroen.mettreEssence(55);
        afficher(citroen.getTableauDeBord());
        afficher(" ");

        afficher("L'utilisateur a saisi une quantité d'essence suffisante");
        citroen.mettreEssence(40);
        afficher(citroen.getTableauDeBord());
        afficher(" ");

        afficher("-----------------------------------------------------------------------------------------------------------------------------------");

        afficher("Test seDeplacer");

        afficher("L'utilisateur a saisi \"toto\" et \"tata\"");
        citroen.seDeplacer("toto", "tata");         //Erreur si seDeplacer ne sont pas des entiers
        afficher(" ");

        afficher("Cas où le trajet est trop long pour que la voiture puisse rouler");
        citroen.seDeplacer(500,60);
        afficher(citroen.getTableauDeBord());
        afficher(" ");

        afficher("Cas où le trajet est suffisant pour que la voiture puisse rouler");
        citroen.seDeplacer(125,90);
        afficher(citroen.getTableauDeBord());

        afficher("-----------------------------------------------------------------------------------------------------------------------------------");

        afficher("Test de toString");
        afficher(citroen.toString());

    }
    
}

