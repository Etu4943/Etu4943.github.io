<!Doctype html>
<html>
    <head>
    </head>
    <body>
        <h1>Cette page fonctionne !<h1>
        <?php
            try{
                $bdd = new PDO('mysql:host=localhost;dbname=appointments;charset=utf8', 'root', 'root');

                $bdd->exec("SET NAMES utf8");

                echo "On est connecté à la base de donnée";
            }catch(PDOException $e){
                die($e->getMessage());
            }

            $prenom = $_POST['prenom'];
            $nom = $_POST['nom'];
            $email = $_POST['email'];
            $prefix = $_POST['indicatif_international'];
            $num = $_POST['num_tel'];

            $numTel = $prefix . $num;

            $domain = $_POST['domain'];
            $date = $_POST['date_day'];
            $hour = $_POST['hour'];

            $date_rdv = $date . $hour;
            


            $sql = "INSERT INTO rendez_vous (nom, prenom, email, numTel, domaine, date_bdd, explanation) VALUES ('$nom','$prenom', '$email', '$numTel','$domain','$date_rdv', 'ceci est une explication')";

            $requete = $bdd->query($sql);

        ?>
    </body>
</html>