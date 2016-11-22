<?php
include 'connection.php';
if(isset($_POST['submit'])){
$travelling_experience=$_POST['travelling_experience'];
$purpose_of_visit=$_POST['purpose_of_visit'];
$problem_encounter=$_POST['problem_encounter'];
$source_vs_destination=$_POST['source_vs_destination'];
$duration=$_POST['duration'];

 $query="INSERT INTO `airport`. `information`(`travelling_experience`,`purpose_of_visit`,`problem_encounter`,`source_vs_destination`,`duration`)
		VALUES('$travelling_experience','$purpose_of_visit','$problem_encounter','$source_vs_destination','$duration')";
	
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