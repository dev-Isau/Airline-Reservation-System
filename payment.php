<?php
include 'connect.php';
if(isset($_POST['submit'])){
$name=$_POST['name'];
$account_number=$_POST['account_number'];
$card_number=$_POST['card_number'];
$card_pin=$_POST['card_pin'];
$card_type=$_POST['card_type'];
 $source=$_POST['source'];
 $destination=$_POST['destination'];
$expiry_day=$_POST['expiry_day'];
$expiry_month=$_POST['expiry_month'];
$expiry_year=$_POST['expiry_year'];
$edmy=$expiry_day."-".$expiry_month."-".$expiry_year;

$query="INSERT INTO `airport`. `payment`(`name`,`account_number`,`card_number`,`card_pin`,`card_type`,`source`,`destination`,`edmy`)
		VALUES ('$name','$account_number','$card_number','$card_pin','$card_type','$source','$destination','$edmy')";
	
	$result=mysqli_query($dbc,$query)or die("Error querrying database");
	if($query){
						echo "
							<script language=\"javascript\">
								alert(\"Registration Successful,check your email for confimation of your visa number!\");
								window.location = \"http:\/\/localhost\/project\/home.html\";
								
							</script>
							";
							}
				else {
						echo "An error occur while registering you!";
						}
}
