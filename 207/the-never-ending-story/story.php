<?php
// story.php

require('header.php');

require('navbar.php');
require('db.php');
$story = getStory();
 ?>

<h1 id="new-story-title"><?php echo $story['title'] ?></h1>

<section id="past-chapters">
  <?php foreach ($story['chapters'] as $chapter) { ?>
    <h4><?php echo $chapter['title'] ?></h4>
    <p><?php echo $chapter['text'] ?></p>
  <?php } ?>
</section>

<textarea id="new-chapter"></textarea>

<section id="new-story-actions">
  <button id="draft">Save Draft</button>
  <button id="submit">Submit and Send to Friend</button>
</section>



 <?php require('footer.php') ?>
