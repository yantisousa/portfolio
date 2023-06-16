<?php
$dsn = 'mysql:host=localhost;dbname=portfolio';
$username = 'root';
$password = 'Yanemanuel123@';
$pdo = new PDO($dsn, $username, $password);
try {
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    if(!empty($email)){
        $pdo->query("INSERT INTO envios_formulario ( email, telefone) VALUES ('$email', '$telefone')");
    }else{
        throw Exception();
    }
} catch(Exception $e){
    echo $e->getMessage();
}



