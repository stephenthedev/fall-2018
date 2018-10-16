<?php
//query-parameters/main.php
 ?>
 <h1>Welcome to Main!</h1>
 <h2>The seafood here is great!</h2>

 <hr>

 <h3>The mainy ways to GET things</h3>
 <a href="parameters.php?param1=something&param2=somethingelse">Click me for Static Query Parameters</a>
 <form action="parameters.php" method="GET">
   <label>Dynamic Ones</label>
   <input type="text" name="param1">
   <input type="text" name="param2">
   <button type="submit">Go!</button>
 </form>
