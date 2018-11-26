<?php session_start() ?>

<h1>Shopping Car Example</h1>

<a href="see-cart.php?id=1">See User 1's Cart</a>
<a href="see-cart.php?id=2">See User 2's Cart</a>
<a href="see-cart.php?id=3">See User 3's Cart</a>

<hr>

<?php if(isset($_SESSION['userId'])) { ?>

<?php
  $cartItems = [];

  $connection = new mysqli('localhost:8889', 'root', 'root', 'shopping_cart');
 
  #die("STOP!");

  #echo("SELECT * FROM shoppingCartItems where userId = " . $_SESSION['userId']);

  $result = $connection->query(
    "SELECT * FROM shoppingCartItems where userId = " . $_SESSION['userId']
  );

  while ($row = $result->fetch_assoc()) {
    $cartItems[] = $row;
  }
 ?>

<?php foreach ($cartItems as $item) { ?>
  <p><?php echo $item['name'] ?></p>
<?php } ?>


<?php } ?>

<hr>
