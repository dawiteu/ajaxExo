<?php
#echo "Bonjour! " . $_POST['firstname'], var_dump($_POST); 
#$status = "500"; // inconnu; 

#HTTP Status Code Types – Overview
#1xx informational response
#2xx success
#3xx redirection
#4xx client errors
#5xx server errors
#Unofficial status codes


if(
    !empty($_POST['firstname']) && 
    !empty($_POST['lastname']) && 
    !empty($_POST['email']) 
){
    $fname = $_POST['firstname'];
    $sname = $_POST['lastname'];
    $email = $_POST['email']; 

    #$status = "200"; 
    $return = array(
        'status' => 200,
        'message' => "Données enregistrées",
        'data' => [$fname , $sname, $email]
    );
    #http_response_code(200);
}else{
    $return = array(
        'status' => 403,
        'message' => "Données non enregistrées."
    );
    #http_response_code(403);
}
print_r(json_encode($return));
#return $status; 

?>