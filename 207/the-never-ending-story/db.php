<?php
// db.php

// Home page functions
function getEditorPicks() {
  $connection = getConnection();

  $rawResult = $connection->query("SELECT * FROM editor_picks");

  $items = [];

  while ($row = $rawResult->fetch_assoc()) {
    $items[] = $row;
  }

  return $items;
}


// Profile page functions

function getMyStories() {
  return [
    [
      'chapter-number' => 1,
      'title' => 'Some title once told me',
      'total-chapters' => 42
    ],
    [
      'chapter-number' => 2,
      'title' => 'We\'re going title title in a merry go title',
      'total-chapters' => 2
    ],
    [
      'chapter-number' => 3,
      'title' => 'Title Title Title Title Title',
      'total-chapters' => 82
    ],
  ];
}

function getStory() {
  $stories = simpleGet("SELECT * FROM stories WHERE id = 1");
  $story = reset($stories);
  $chapters = simpleGet("SELECT * FROM chapters WHERE story_id = 1");

  return [
    'title' => $story['title'],
    'chapters' => $chapters
  ];
}

function getConnection() {
  $connection = new mysqli('localhost:8889', 'root', 'root', 'tnes');

  if ($connection->error) {
    die("Creating connection failed:" . $connection->error);
  }

  return $connection;
}

function simpleGet($sqlQuery) {
  $connection = getConnection();

  $result = $connection->query($sqlQuery);

  $items = [];

  while ($row = $result->fetch_assoc()) {
    $items[] = $row;
  }

  return $items;
}

function runSafeQuery($query, $params) {
  $connection = getConnection();
  // PREPARE
  $statement = $connection->prepare($query);
  // check if prepare failed
  if ($statement == false) {
    die('Prepare failed: ' . $connection->error);
  }
  // BIND PARAMETERS
  // ex SELECT * FROM dogs WHERE id = ? AND name = ?
  // $statement->bind_param('is', 1, 'spot');
  // s = string, i = int, b = blob/binary
  if (count($params) > 0) {
    $statement->bind_param(...$params);
  }
  if ($statement->error) {
    die('Bind failed: ' . $statement->error);
  }
  $success = $statement->execute();
  if ($success == false) {
    die('Execute failed: ' . $statement->error);
  }
  $result = $statement->get_result();
  $connection->close();

  $results = [];
  while ($row = $result->fetch_array()) {
    $results[] = $row;
  }

  return $results;
}

function removeExcerptById($id) {
  runSafeQuery(
    "DELETE FROM editor_picks WHERE id = ?",
    ["i", $id]
  );
}






//
