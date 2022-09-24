<!Doctype html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <script src="rdv.js"></script>
        <style>
            /* body{
                height: 100%;
                background-color: red;
            } */
        </style>

        <?php
            try{
                $bdd = new PDO('mysql:host=localhost;dbname=appointments;charset=utf8', 'root', 'root');

                $bdd->exec("SET NAMES utf8");

                $sql = "SELECT date_bdd FROM rendez_vous";

                $requete = $bdd->query($sql);
                $dates_deja_prises = $requete->fetch();
                var_dump($dates_deja_prises[0]);

            }catch(PDOException $e){
                die($e->getMessage());
            }
        ?>

        <script>
          
        </script>
        
        <link rel="stylesheet" href="../../CSS/style.css">
        <link rel="stylesheet" href="../../CSS/rdv.css">
    </head>
    <body>
        <header>
            <div class="logo_link"><a href="main.html">Clement Potier</a></div>
            <nav>
                <ul>
                    <li><a href="newPage.html" class="nav_list" onclick="">Qui suis-je ?</a></li>
                    <li><a href="#article_2" class="nav_list">Cours de code</a></li>
                    <li><a href="#article_3" class="nav_list">Powerpoint</a></li>
                    <li><a href="rdv.html" class="nav_list">Prise de rendez-vous</a></li>
                </ul>
            </nav>
        </header>

        <div class="content_wrapper">
            <div class="prise_rdv">
                    <h3>Pour le moment, c'est par ici que ça se passe !</h3>
                <form action="send.php" method="POST" class="form_rdv">
                    <input type="text" placeholder="Prénom" name="prenom" required>
                    <input type="text" placeholder="Nom" name="nom" required>
                    <input type="email" placeholder="Adresse mail" name="email" required>
                    <span class="num_phone">
                        <select name="indicatif_international" id="indicatif_international">
                            <option value="+32" selected>+32</option>
                            <option value="+33">+33</option>
                        </select>
                        <input type="tel" name="num_tel" required ></span>
                    <select name="domain" id="domain" required>
                        <option value="" selected>Choisir un domaine...</option>
                        <option value="assistance">Assistance Informatique</option>
                        <option value="code_lesson">Lesson de code</option>
                        <option value="powerpoint">Aide powerpoint</option>
                        <option value="pc_building">Montage PC</option>
                        <option value="other">Autre</option>
                    </select>
                    <span class="date_hour">
                        <input type="date" id="inpute_date" onchange="verifJour()" name="date_day">
                        <select name="hour" id="hour" required>
                        </select>
                    </span>
                    
                    <div class="submit_reset">
                        <input type="reset">
                        <input type="submit">
                    </div>
                    
                </form>
            </div>
            <div class="gear">
                <span class="gear_logo" ></span>
            <h3>Cette page est en construction !</h3>
            </div>
        </div>

        <footer>
            <div id="langues">
                <p>Langues :</p>
                <ul>
                    <li><a href="../fr/main.html"><img src="../../IMG/french_flag.png" height="18px" width="22px"></a></li>
                    <li><a href="../en/main.html"><img src="../../IMG/union_jack.png" height="18px" width="22px"></a></li>
                </ul>
            </div>
            <div id="copyright">
            </div>
            <div id="troisieme_element">
            </div>
            
        </footer>
    </body>
</html>