<?php
  // functions/index.php

function echoChillin() {
  echo "Just chillin...";
}

//for ($i=0; $i < 100; $i++) {
  echoChillin();
//}

 ?>
<style media="screen">
  section {
    margin: 20px;
    box-shadow: 2px 2px 5px black;
    border-radius: 20px;
    padding:  20px;
    width: 400px;
  }
</style>

<?php
require("functions.php");

writeCard(
  "Happy Birthday!",
  "Now that your 40.",
  "Steve Carlile"
);

writeCard(
  "Get better soon!",
  "Now that your 40.",
  "Christina Carlile"
);


 ?>
