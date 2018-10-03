<?php
// signup.php
//
require('header.php');
require('navbar.php');
 ?>

<h1 id="signupTitle">The Never Ending Story</h1>

<form id="signupForm">
  <input type="file" name="pic">

  <div>
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password">
    <input type="password" placeholder="Confirm Password">
  </div>

  <div>
    <input type="text" placeholder="Name (Alias)">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Date of Birth">
  </div>

  <button>Register</button>
</form>




 <?php require('footer.php'); ?>
