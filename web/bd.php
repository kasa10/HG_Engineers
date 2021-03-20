<?php

$db = mysqli_connect("localhost","root","","turizm");

//$db = false;

if ($db == false)
{
    echo "Ошибка подключения";
} else {
    echo "Все хорошо";
}






?>