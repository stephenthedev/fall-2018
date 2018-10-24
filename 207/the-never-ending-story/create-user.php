<?php
//create-user.php

// 1. Check that the passwords are the xhprof_sample_disable
// 2. Create a user
// 3. Redirect to login


if ($_POST['password'] != $_POST['confirm_password']) {
  header('Location: signup.php');
}


require('db.php');

$hashedPassword = md5($_POST['password']);

runSafeQuery(
  "INSERT INTO users (first_name, last_name, email, password, alias)
    VALUES (?,?,?,?,?)
  ",
  [
    "sssss",
    $_POST['first_name'],
    $_POST['last_name'],
    $_POST['email'],
    $hashedPassword,
    $_POST['alias']
  ]
);

header('Location: login.php');
