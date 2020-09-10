this.setAssurance = function (verifAssurance)
            {
                if (verifAssurance == assurance)
                {
                    if (verifAssurance == true)
                    {
                        tableauDeBord = "Votre véhicule a déja une assurance";
                    }

                    else if (verifAssurance === false)
                    {
                        tableauDeBord = "Votre véhicule est déjà sans assurance";
                    }

                    else
                    {
                        tableauDeBord = "L'assurance doit être vrai ou faux";
                    }
                }

                else
                {
                    if (verifAssurance == true)
                    {
                        assurance = verifAssurance;
                        tableauDeBord = "Votre véhicule est maintenant assuré";
                        
                    }

                    else if (verifAssurance == false)
                    {
                        assurance = verifAssurance;
                        tableauDeBord = "Votre véhicule n'est maintenant plus assuré";
                    }

                    else
                    {
                        tableauDeBord = "L'assurance doit être vrai ou faux";
                    }
                }
            }