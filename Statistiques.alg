<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER nbreSaisie"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#saisie" algoitem="saisie EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nbreSaisie" algoitem="nbreSaisie EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#plusPetit" algoitem="plusPetit EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#plusGrand" algoitem="plusGrand EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#somme" algoitem="somme EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#moyenne" algoitem="moyenne EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#saisie#1#pasliste" algoitem="saisie PREND_LA_VALEUR 1"/>
        <item code="15#saisie != 0" algoitem="TANT_QUE (saisie != 0) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="2#saisie#pasliste" algoitem="LIRE saisie"/>
            <item code="6#saisie != 0" algoitem="SI (saisie != 0) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#nbreSaisie#nbreSaisie + 1#pasliste" algoitem="nbreSaisie PREND_LA_VALEUR nbreSaisie + 1"/>
                <item code="5#somme#somme + saisie#pasliste" algoitem="somme PREND_LA_VALEUR somme + saisie"/>
                <item code="5#moyenne#somme / nbreSaisie#pasliste" algoitem="moyenne PREND_LA_VALEUR somme / nbreSaisie"/>
                <item code="6#plusPetit == 0" algoitem="SI (plusPetit == 0) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#plusPetit#saisie#pasliste" algoitem="plusPetit PREND_LA_VALEUR saisie"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="6#saisie &lt; plusPetit" algoitem="SI (saisie &lt; plusPetit) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#plusPetit#saisie#pasliste" algoitem="plusPetit PREND_LA_VALEUR saisie"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="6#saisie > plusGrand" algoitem="SI (saisie > plusGrand) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#plusGrand#saisie#pasliste" algoitem="plusGrand PREND_LA_VALEUR saisie"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="3#nbreSaisie#1#pasliste" algoitem="AFFICHER nbreSaisie"/>
        <item code="3#plusPetit#1#pasliste" algoitem="AFFICHER plusPetit"/>
        <item code="3#plusGrand#1#pasliste" algoitem="AFFICHER plusGrand"/>
        <item code="3#somme#1#pasliste" algoitem="AFFICHER somme"/>
        <item code="3#moyenne#1#pasliste" algoitem="AFFICHER moyenne"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
