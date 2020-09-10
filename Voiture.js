function Voiture(pImmatriculation, pCouleur, pPoids, pPuissance, pCapReservoir, pNbPlaces)      //Les 6 propriétés de notre classe Voiture
{
    if (arguments.length !== 6)
    {//Si on a pas saisie les 6 paramètres demander
        throw new Error ("Erreur dans votre nombre de paramètres saisies.");
    }

    else if (typeof pCouleur !== "string")
    {//Si la couleur n'est pas une chaine de caractère
        throw new Error ("Erreur, dans la donnée \"couleur\", vous avez saisies des chiffres dedans.");
    }

    else if (!Number.isInteger(pPoids))
    {//Si le poids n'est pas un nombre
        throw new Error ("Erreur, dans la donnée \"poids\", il doit être un nombre.");
    }

    else if (!Number.isInteger(pPuissance))
    {//Si la puissance n'est pas un nombre
        throw new Error ("Erreur, dans la donnée \"puissance\", il doit être un nombre.");
    }

    else if (typeof pCapReservoir != "number")
    {//Si le réservoir n'est pas un nombre
        throw new Error ("Erreur, dans la donnée \"capacité du réservoir\", il doit être un nombre.");
    }

    else if (!Number.isInteger(pNbPlaces))
    {//Si le nbre de place n'est pas un nombre
        throw new Error ("Erreur, dans la donnée \"nombre de places\", il doit être un nombre.");
    }        

    const immatriculation = pImmatriculation;
    var couleur = pCouleur.toLowerCase();
    const poids = parseInt(pPoids);
    const puissance = parseInt(pPuissance);
    const capReservoir = parseFloat(pCapReservoir);
    const nbPlaces = parseInt(pNbPlaces);
    var essenceActuel = 5;
    var assurance = false;
    var tableauDeBord = "Bienvenue, votre véhicule est prêt";
    
    //this.get_____ permettent de récuperer et de lire les propriétés de nos instances voiture
    this.getImmatriculation = function()
    {
        return immatriculation;
    }

    this.getCouleur = function()
    {
        return couleur;
    }

    this.getPoids = function()
    {
        return poids;
    }

    this.getPuissance = function()
    {
        return puissance;
    }

    this.getCapReservoir = function()
    {
        return capReservoir;
    }

    this.getNbPlaces = function()
    {
        return nbPlaces;
    }

    this.getEssenceActuel = function ()
    {
        return essenceActuel;
    }

    this.getAssurance = function ()
    {
        return assurance;
    }

    this.getTableauDeBord = function ()
    {
        return tableauDeBord;
    }

    /**
     * M: Permet de modifier l'assurance de la voiture
     * O: Ne renvoie rien
     * I: Prend en paramètre: verfiAssurance
     */
    this.setAssurance = function (verifAssurance)
    {//teste si on a saisie un vrai/faux
        if (typeof verifAssurance === "boolean")
        {
            if (verifAssurance === assurance)
            {
                if (verifAssurance)
                {
                    tableauDeBord = "Votre véhicule a déja une assurance";
                }

                else
                {
                    tableauDeBord = "Votre véhicule est déjà sans assurance";
                }
            }

            else
            {
                if (verifAssurance)
                {
                    assurance = verifAssurance;
                    tableauDeBord = "Votre véhicule est maintenant assuré";
                }

                else
                {
                    assurance = verifAssurance;
                    tableauDeBord = "Votre véhicule n'est maintenant plus assuré";
                }
            }
        }

        else
        {
            afficher ("Votre assurance doit être vrai ou faux, et rien d'autre");
        }
    }

    /**
     * M: Permet de changer la couleur de la voiture
     * O: Ne renvoie rien 
     * I: Prend en paramètre: pCouleur
     */
    this.repeindre = function (pCouleur)
    {
        //teste si on a saisie un "string"
        if (typeof pCouleur === "string")
        {
            pCouleur = pCouleur.toLowerCase();
            if (pCouleur === couleur)
            {
                tableauDeBord = `Votre voiture est déjà de couleur ${couleur}, merci pour le rafraîchissement`;
            }

            else
            {
                couleur = pCouleur;
                tableauDeBord = `Votre voiture a été repeinte en ${couleur}`;
            }
                         
        }
        
        else
        {
            afficher("Erreur dans votre saisie de peinture");
        }

    }

    /**
     * M: Permet d'ajouter une quantité d'essence dans la voiture
     * O: Ne renvoie rien
     * I: Prend en paramètre ajoutEssence
     */
    this.mettreEssence = function (ajoutEssence)
    {
        if (typeof ajoutEssence === "number")
        {//teste si on a bien saisie une valeur numérique
            
            if (ajoutEssence + essenceActuel <= capReservoir)

            {
                essenceActuel = ajoutEssence + essenceActuel;
                tableauDeBord = `Vous avez rajouté ${ajoutEssence} L d'essence. Le véhicule contient maintenant ${essenceActuel} L d'essence`;
            }

            else
            {
                let surplusEssence = (essenceActuel + ajoutEssence) - capReservoir;

                tableauDeBord = `Vous avez rajouté ${ajoutEssence} L d'essence. Capacité de réservoir dépassé, le véhicule ne peut contenir que ${capReservoir}L. ` + 
                                `Vous avez mis ${surplusEssence} L en trop`;
            }
        }

        else
        {
            afficher("Erreur dans votre saisie d'essence à ajouter, il doit être un nombre");
        }
        
    }

    /**
     * M: Permet de vérifier si le trajet de la voiture est possible ou non
     * O: Ne renvoie rien
     * I: Prend en paramètres la distance et la vitesse
     */
    this.seDeplacer = function (distance, vitesse)
    {//teste si on a bien saisies des valeur numériques

        if (typeof distance === "number" && typeof vitesse === "number")
        {
            let consoCarburant = calculconsom(distance, vitesse);
            if (consoCarburant <= essenceActuel)
            {
                tableauDeBord = `Vous roulez à ${vitesse} km/h sur une distance de ${distance} km.\n` +
                                `Vous allez consommé ${consoCarburant} L de carburant et vous avez actuellement ${essenceActuel} L d'essence.\n `+
                                `Il vous restera ${essenceActuel - consoCarburant} L d'essence.` + 
                                "Le trajet est possible";
            }

            else
            {
                tableauDeBord = `Vous roulez à ${vitesse} km/h sur une distance de ${distance} km.\n` +
                                `Vous allez consommé ${consoCarburant} L de carburant et vous avez actuellement ${essenceActuel} L d'essence.\n` +
                                "Le trajet est impossible, vous allez tombez en panne d'essence";
            }

        }

        else
        {
            afficher("Erreur dans la saisie de la distance ou de la vitesse, ils doivent être des nombres");
        }
        
    }

    /**
     * M: Permet de calculer la consommation de carburant de la voiture
     * O: Renvoie consoCarburant
     * I: Prend en paramètres la distance et la vitesse
     */
    var calculconsom = function (distance, vitesse)
    {
        let consoCarburant = 0;
        switch (vitesse)
        {
            case vitesse < 50 :
            consoCarburant = (distance*10)/100;
            break;

            case vitesse >= 50 && vitesse < 90 :
            consoCarburant = (distance*5)/100;
            break;

            case vitesse >= 90 && vitesse < 130 :
            consoCarburant = (distance*8)/100;
            break;

            default :
            consoCarburant = (distance*12)/100;

        }

        return consoCarburant;

    }

    /**
     * M: Permet de rapeller l'immatriculation, la puissance et la couleur de la voiture
     * O: Renvoie: immatriculation, puissance et couleur
     * I: Ne prend aucun paramètre
     */
    this.toString = function()
    {
        return `Immatriculation: ${immatriculation}\n` +
                `Puissance: ${puissance} ch.\n` +
                `Couleur: ${couleur}`;
    }
    
    
}