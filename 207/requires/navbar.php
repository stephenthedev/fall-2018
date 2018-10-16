<?php
//requires/navbar.php
if (isset($pageTitle) == false) {
  $pageTitle = 'index';
}
 ?>

<style>
  .bold { color: red; font-weight: bold; }
</style>

 <nav>
   <ul>
     <a href="index.php"
      class="<?php echo $pageTitle == 'index' ? 'bold' : '' ?>">
        Home
      </a>
     <a href="page1.php" class="<?php echo $pageTitle == 'page1' ? 'bold' : '' ?>">Page 1</a>
     <a href="page2.php" class="<?php echo $pageTitle == 'page2' ? 'bold' : '' ?>">Page 2</a>
     <a href="page3.php" class="<?php echo $pageTitle == 'page3' ? 'bold' : '' ?>">Page 3</a>
     <a href="https://facebook.com">Facebook!</a>
   </ul>
 </nav>
