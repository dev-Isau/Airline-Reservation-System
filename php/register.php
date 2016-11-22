<?php
include 'connect.php';
 if(isset($_POST['submit'])){
  $name=$_POST['name'];
 $email=$_POST['email'];
 $fname=$_POST['fname'];
 $password=md5($_POST['password']);
 $phone_number=$_POST['phone_number'];
 $next_of_kin=$_POST['next_of_kin'];
 $residence_address=$_POST['residence_address'];
 $destination_address=$_POST['destination_address'];
 $source=$_POST['source'];
 $destination=$_POST['destination'];
 $day=$_POST['day'];
 $month=$_POST['month'];
 $year=$_POST['year'];
 $dob=$day."-".$month."-".$year;
 
 $connection = mysqli_connect("localhost","root","","airport") or die("error connecting to database");
	$query_sql = "SELECT email FROM register WHERE email ='$email'";
	$result=mysqli_query($connection,$query_sql) or die("error querying database");
	$count = count(mysqli_fetch_array($result,MYSQL_ASSOC));


			if($count > 0)
			{
				echo "
							<script language=\"javascript\">
								alert(\"User with the email already exist! Enter another email!\");
								window.location = \"index.php\";
							</script>
							";
			}

			else{

				$sql="INSERT INTO `airport`. `register`(`name`,`email`,`fname`,`password`,`phone_number`,`next_of_kin`,`residence_address`,`destination_address`,`source`,`destination`,`dob`)
				VALUES ('$name','$email','$fname','$password','$phone_number','$next_of_kin','$residence_address','$destination_address','$source','$destination','$dob')";

				$query=mysqli_query($connection,$sql) or die("problem connecting to database");

				if($query){
						echo "
							<script language=\"javascript\">
								
								window.location = \"http:\/\/localhost\/project\/mylogin.html\";
							</script>
							";
							}
				else {
						echo "An error occur while registering you!";
						}
						

		}
	}
?>

				
 