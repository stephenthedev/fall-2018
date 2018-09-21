<?php
  // functions/functions.php

function writeCard($title, $message, $author) {
  echo "
  <section>
    <h2>$title</h2>
    <p>$message</p>
    <cite><b>$author</b></cite>
  </section>
  ";
}
