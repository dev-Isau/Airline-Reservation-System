<?php
$server='localhost';
$user='root';
$password='';
$database='airport';
$dbc=mysqli_connect($server,$user,$password,$database)
or die("Error connecting to database");
?>