<?php
// arrays/index.php
$buffet = [
  'Pancakes' => [
    'calories' => 400,
    'cost' => 4.99
  ],
  'Crab Legs',
  'French Toast',
  'Caviar',
  'Bacon',
  4786347856473,
  0.454755,
  false,
  ['Meta', 'Meta'],
  'think' => 'about something'
];

echo "<pre>";
var_dump($buffet);
echo "</pre>";

$vacations = [];

$canada = [
  'location' => 'Nova Scotia',
  'cost' => 120.00,
  'activities' => ['Sight Seeing', 'Hot Chocolate']
];

$mexico = [
  'location' => 'Cancun',
  'cost' => 1000.00,
  'activities' => ['Chillll', 'The Beach', 'Cold Chocolate']
];

$vegas = [
  'location' => 'Bellagio',
  'cost' => 2.00,
  'activities' => ['Poker', 'Concerts', 'Drinks']
];

$vacations[] = $canada;
$vacations['Mexico'] = $mexico;
$vacations[] = $vegas;

echo "<pre style='color:blue'>";
var_dump($vacations);
echo "</pre>";
 ?>

<style>
  div {
    margin-bottom: 10px;
    outline: solid 3px purple;
  }
</style>

<?php foreach ($vacations as $vacay) { ?>
  <div>
    <h3><?php echo $vacay['location'] ?></h3>
    <p><i><?php echo $vacay['cost'] ?></i></p>
    <h4>Things to Do</h4>
    <ul>
      <?php foreach ($vacay['activities'] as $activity) { ?>
        <li><?php echo $activity ?></li>
      <?php } ?>
    </ul>
  </div>
<?php } ?>
