this.setAssurance = function (verifAssurance)
            {
                if (verifAssurance == assurance)
                {
                    tableauDeBord = 
                    (verifAssurance == true) ? "Votre véhicule a déja une assurance" : 
                    ((verifAssurance == false) ? "Votre véhicule est déjà sans assurance" : "L'assurance doit être vrai ou faux");
                    
                }

                else
                {
                    assurance = (verifAssurance = true) ? true : false;
                    tableauDeBord = (verifAssurance == true) ? "Votre véhicule est maintenant assuré" : 
                    ((verifAssurance == false) ? "Votre véhicule n'est maintenant plus assuré" : "L'assurance doit être vrai ou faux");
                    
                }
            }