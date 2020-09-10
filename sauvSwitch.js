switch(true)
        {
            case arguments.length != 6 :
            throw new Error ("Erreur dans les paramètres.");
            break;

            case typeof pCouleur != "string" :
            throw new Error ("Erreur, dans la donnée \"couleur\", vous avez saisies des chiffres dedans.");
            break;

            case !Number.isInteger(pPoids) :
            throw new Error ("Erreur, dans la donnée \"poids\", il doit être un nombre entier.");
            break;

            case !Number.isInteger(pPuissance) :
            throw new Error ("Erreur, dans la donnée \"puissance\", il doit être un nombre entier.");
            break;

            case typeof pCapReservoir != "number" :
            throw new Error ("Erreur, dans la donnée \"capacité du réservoir\", il doit être un nombre.");
            break;

            case !Number.isInteger(pNbPlaces) :
            throw new Error ("Erreur, dans la donnée \"nombre de places\", il doit être un nombre entier.");
            break;
        }