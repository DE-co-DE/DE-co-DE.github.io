
<?php
include 'face.php';
 $facebook = new Facebook_Login('2037374113171707','d7b71201000ff3397214c6bda9715c3b','http://localhost/login.html?page=facebook');
$url = $facebook->login(FALSE);
$userData = $facebook->getUserData();
// view the data
print_r( $userData );exit;
?>
?>