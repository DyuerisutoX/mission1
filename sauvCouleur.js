this.repeindre = function (choixCouleur)
            {
                if (typeof choixCouleur == "string")
                {
                    choixCouleur = choixCouleur.toLowerCase();
                    if (choixCouleur == "bleu" || choixCouleur == "blanc" || choixCouleur == "rouge" || choixCouleur == "gris")
                    {
                        if (choixCouleur == couleur)
                        {
                            tableauDeBord = `Voiture est déjà de couleur ${couleur.toLowerCase()}, merci pour le rafraîchissement` 
                        }
    
                        else
                        {
                            couleur = choixCouleur;
                            tableauDeBord = `Votre voiture a été repeinte en ${couleur.toLowerCase()}`;
                        }
                    }
    
                    else
                    {
                        tableauDeBord = "Couleur inexistante";
                    }                
                }
                
                else
                {
                    afficher("Erreur dans votre saisie de peinture");
                }

                
            }