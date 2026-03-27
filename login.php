<?php
session_start();

$blad = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST["login"];
    $haslo = $_POST["haslo"];

    if ($login === "admn" && $haslo === "309") {
        $_SESSION["zalogowany"] = true;
        $_SESSION["login"] = $login;

        header("Location: index.php");
        exit();
    } else {
        $blad = "Błędny login lub hasło!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Logowanie</title>
</head>
<body>

<h2>Logowanie</h2>

<form method="POST">
    Login: <input type="text" name="login" required><br><br>
    Hasło: <input type="password" name="haslo" required><br><br>
    <button type="submit">Zaloguj</button>
</form>

<p style="color:red;"><?php echo $blad; ?></p>

</body>
</html>
