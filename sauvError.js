if (arguments.length != 6)

        {
            throw new Error ("Erreur dans les paramètres.");
        }

        else if (typeof pCouleur != "string")
        {
            throw new Error ("Erreur, dans la donnée \"couleur\", vous avez saisies des chiffres dedans.");
        }

        else if (!Number.isInteger(pPoids))
        {
            throw new Error ("Erreur, dans la donnée \"poids\", il doit être un nombre.");
        }

        else if (!Number.isInteger(pPuissance))
        {
            throw new Error ("Erreur, dans la donnée \"puissance\", il doit être un nombre.");
        }

        else if (typeof pCapReservoir != "number")
        {
            throw new Error ("Erreur, dans la donnée \"capacité du réservoir\", il doit être un nombre.");
        }

        else if (!Number.isInteger(pPuissance))
        {
            throw new Error ("Erreur, dans la donnée \"nombre de places\", il doit être un nombre.");
        }