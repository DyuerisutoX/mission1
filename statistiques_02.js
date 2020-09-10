// programme principal :

function statistiques02()
{
	let entier = 0;
	let nbSaisies = 0;
	let plusPetit = 0;
	let plusGrand = 0;
	let somme = 0;
	let moyenne = 0;
	let resultat = "";

	do
	{
		entier = saisirEntier();
		
		if (entier !== 0)	// teste si on n'a pas saisi 0 (pas de calculs à faire sur 0)
		{
			nbSaisies = calculerNbSaisies(nbSaisies);
			somme = calculerSomme(somme, entier);
			plusPetit = calculerPlusPetit(plusPetit, entier);
			plusGrand = calculerPlusGrand(plusGrand, entier);
		}

		if (entier === 0 && nbSaisies < 2)	// affiche un message d'erreur si on saisit 0 alors que le nombre de saisies est insuffisant (inférieur à 2)
		{
			afficherConsole("Erreur : veuillez saisir au moins deux nombres entiers (autre que 0) !");
		}
	} while (entier !== 0 || nbSaisies < 2) // teste si on n'a pas saisi 0 ou si le nombre de saisies est insuffisant (on ne peut sortir qu'avec un 0 tant que le nombre de saisies est supérieur ou égale à 2)

	moyenne = calculerMoyenne(somme, nbSaisies);

	resultat = creerResultat(nbSaisies, plusPetit, plusGrand, somme, moyenne);

	afficherConsole(resultat);
	
	afficherFenetreModale(resultat);
}

/*
M : saisir et vérifier que la saisie est bien un entier
O : NUM entier
I : vide
*/
function saisirEntier()
{
	let entier = 0;
	let entierValide = false;

	do
	{
		entier = Number(prompt("Statistiques :\n\nEntrer un nombre entier (0 pour arrêter) :"));

		entierValide = entier === parseInt(entier, 10);
		
		if (entierValide)
		{
			entier = parseInt(entier, 10);
		}
		else
		{
			afficherConsole("Erreur : votre saisie n'est pas un nombre entier !");
		}
	} while (!entierValide)

	if (entier !== 0)
	{
		afficherConsole(`Vous venez d'entrer le nombre : ${entier}`);
	}

	return entier;
}

/*
M : ajuster le nombre de saisies effectuées à chaque nouvelle saisie valide
O : NUM nbSaisies
I : NUM nbSaisies
*/
function calculerNbSaisies(nbSaisies)
{
	nbSaisies++;

	return nbSaisies;
}

/*
M : calculer la somme de tous les entiers saisis à chaque nouvelle saisie valide
O : NUM somme
I : NUM somme, NUM entier
*/
function calculerSomme(somme, entier)
{
	somme += entier;

	return somme;
}

/*
M : calculer l'entier le plus petit à chaque nouvelle saisie valide
O : NUM plusPetit
I : NUM plusPetit, NUM entier
*/
function calculerPlusPetit(plusPetit, entier)
{
	if (entier < plusPetit || plusPetit === 0)
	{
		plusPetit = entier;
	}

	return plusPetit;
}

/*
M : calculer l'entier le plus grand à chaque nouvelle saisie valide
O : NUM plusGrand
I : NUM plusGrand, NUM entier
*/
function calculerPlusGrand(plusGrand, entier)
{
	if (entier > plusGrand || plusGrand === 0)
	{
		plusGrand = entier;
	}

	return plusGrand;
}

/*
M : calculer la moyenne des données saisies
O : NUM moyenne
I : NUM somme, NUM nbSaisies
*/
function calculerMoyenne(somme, nbSaisies)
{
	let moyenne = 0;

	moyenne = somme / nbSaisies;

	return moyenne;
}

/*
M : créer la structure du résultat à afficher à partir des données calculées
O : CAR resultat
I : NUM nbSaisies, NUM  plusPetit, NUM plusGrand, NUM somme, NUM moyenne
*/
function creerResultat(nbSaisies, plusPetit, plusGrand, somme, moyenne)
{
	let resultat = "";

	resultat = `${nbSaisies} nombres saisis \nCompris entre ${plusPetit} et ${plusGrand} \nPour une somme de ${somme} \nEt une moyenne de ${moyenne}`;

	return resultat;
}

/*
M : afficher l'objet dans la console
O : vide
I : OBJ objet
*/
function afficherConsole(objet)
{
	console.log(objet);
}

/*
M : afficher l'objet dans une fenêtre modale
O : vide
I : OBJ objet
*/
function afficherFenetreModale(objet)
{
	alert(objet);
}