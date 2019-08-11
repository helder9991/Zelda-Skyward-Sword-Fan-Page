<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>The Legend of Zelda</title>
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css">
    <link rel="icon" href="../imagem/triforce.png" >
</head>
<body>
    <?php

        if(isset($_POST['enviar'])){
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "zelda";
            
            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 

            $login = $_POST['login'];            
            $senha = $_POST['senha'];            

            $sql = "SELECT usuario, senha FROM usuarios WHERE usuario = '$login' and senha = '$senha'";
            echo $sql;
            $result = $conn->query($sql);
            
            if ($result != NULL and $result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    header('Location: pages/inicio.html');
                }
            }
            $conn->close();
        }
    ?>
    <video muted autoplay loop class="bgvideo" poster="imagens/">
        <source src="videos/background.mp4" type="video/MP4">
    </video>
    <form  action="<?php echo $_SERVER['PHP_SELF']?>" method='post'>    
        <div class="container">
            <input type="text" class="input" name="login" placeholder="Login">
            <input type="password" class="input" name="senha" placeholder="Senha">

            <input type="submit" name="enviar"  value="Entrar">
        </div>
    </form>
    
</body>
</html>