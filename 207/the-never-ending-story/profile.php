<?php
// profile.php

require('header.php');

require('navbar.php');
require('db.php');

$myStories = getMyStories();
 ?>

<img id="profile-pic" src="https://free-wired.com/wp-content/uploads/2018/05/headshot-resume-awesome-the-national-resume-writers-association-certification-of-headshot-resume.jpg" alt="">

<section id="profile-content">
  <h2>Your Stories...</h2>
  <a id="new-story" href="#">New Story</a>

  <table>
    <thead>
      <tr>
        <th>Ch. #</th>
        <th>Title</th>
        <th># of Ch.s.</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>

      <?php foreach ($myStories as $story) { ?>
        <tr>
          <td><?php echo $story['chapter-number'] ?></td>
          <td><?php echo $story['title'] ?></td>
          <td><?php echo $story['total-chapters'] ?></td>
          <td><a href="#">Continue Writing</a></td>
        </tr>
      <?php } ?>

    </tbody>
  </table>
</section>


 <?php require('footer.php') ?>
