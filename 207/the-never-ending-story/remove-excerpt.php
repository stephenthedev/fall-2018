<?php
// remove-excerpt.php

$connection = new mysqli('localhost:8889', 'root', 'root', 'tnes');

$connection->query("DELETE FROM editor_picks WHERE id = " . $_GET['id']);

// Redirects to the home page
header('Location: index.php');
