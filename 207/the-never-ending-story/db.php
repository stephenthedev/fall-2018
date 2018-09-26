<?php
// db.php

// Home page functions
function getEditorPicks() {
  // TODO: Make it work with DB
  return [
    [
      'title' => 'Intern breaks government',
      'excerpt' => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, ab quibusdam architecto dolorum voluptatem qui tempore optio doloremque, nisi itaque, consectetur dicta minus! Excepturi earum, suscipit molestiae nam assumenda beatae explicabo, vitae dicta distinctio hic minus autem architecto tenetur culpa consequatur odio ex error debitis cupiditate modi aut laudantium eius."
    ], // story 1
    [
      'title' => 'Tsunami and me',
      'excerpt' => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut alias quas animi libero asperiores illo, recusandae dicta doloremque distinctio officia molestias adipisci ex, quam repellat. Odit eligendi eos perspiciatis iste, repellendus ad magnam optio magni et amet, ex atque. Blanditiis cupiditate cumque quaerat consequuntur explicabo dolores deleniti, at quis ratione?"
    ] // story 2
  ];
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
  return [
    'title' => 'Some title once told me',
    'chapters' => [
      ['text' => 'All the paragraph text goes here'],
      ['text' => 'All the paragraph text goes here'],
      ['text' => 'All the paragraph text goes here'],
      ['text' => 'All the paragraph text goes here'],
      ['text' => 'All the paragraph text goes here'],
      ['text' => 'All the paragraph text goes here'],
    ]
  ];
}









//
