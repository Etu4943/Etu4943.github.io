<!Doctype html>
<html>
    <head>
    </head>
    <body>
        <h1>Cette page fonctionne !<h1>
         <?php
            $bdd = new PDO('mysql:host=localhost;dbname=appointments;charset=utf8', 'root', 'root');
            $prenom = $_POST['prenom'];
            $nom = $_POST['nom'];
            $date = $_POST['date'];
            $explication = $_POST['explication'];

            //$SQL = "INSERT INTO `rendez_vous`(`nom`, `prénom`, `date`, `explanation`) VALUES ([$nom],[$prenom],[$date],[$explication])";

            $req = $bdd->prepare('INSERT INTO rendez_vous (nom, prénom, date_bdd, explication) VALUES (:nom, :prenom, :date_bdd, :explication)');

$req -> execute(array(
    'nom' => $prenom,
    'prenom' => $nom,
    'date_bdd' => $date,
    'explication' => $explication,
));
        ?> 
    </body>
</html>