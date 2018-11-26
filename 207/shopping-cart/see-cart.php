<?php 
session_start();

$_SESSION['userId'] = $_GET['id'];

#echo $_SESSION['userId'];

 header('Location: index.php');
