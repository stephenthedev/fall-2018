<?php
// functions/cards.php
require('functions.php');

$cards = [
  [
    'title' => 'Welcome to the world!',
    'message' => 'She is such a cute baby!',
    'author' => 'Dada'
  ],
  [
    'title' => 'The Yankees win the world Series!',
    'message' => 'Take that Sox!',
    'author' => 'Prof Raghunath'
  ],
  [
    'title' => 'Have a good Trip!',
    'message' => 'I wish I was going to the Dominican!',
    'author' => 'Raghunath'
  ],
];

foreach ($cards as $card) {
  writeCard(
    $card['title'],
    $card['message'],
    $card['author`']
  );
}
 ?>
