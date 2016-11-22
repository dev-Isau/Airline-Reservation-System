<?php
include'connection.php';
 if(isset($_POST['submit'])){
 $name=$_POST['name'];
	$password=md5($_POST['password']);
 
 $query="INSERT INTO `airport`. `logon`(`name`,`password`)
		VALUES('$name','$password')";
	
	$result=mysqli_query($dbc,$query)or die("Error querrying database");
	if($query){
						echo "
							<script language=\"javascript\">
								
								window.location = \"http:\/\/localhost\/project\/payment.html\";
							</script>
							";
							}
				else {
						echo "An error occur while registering you!";
						}
 }
 ?>