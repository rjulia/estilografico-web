<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['telephone'])) die();

if ($_POST) {

    // set response code - 200 OK

    http_response_code(200);
    $subject = $_POST['subject'];
    $to = "reimon1972@gmail.com";
    $from = "reimon1972@gmail.com";
    // data
  
    $msg = '<html><body>';
    $msg .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $msg .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
    $msg .= "<tr><td><strong>telephone:</strong> </td><td>" . strip_tags($_POST['telephone'] ) . "</td></tr>";
    $msg .= "<tr><td><strong>Services:</strong> </td><td>" . strip_tags($_POST['services'] ) . "</td></tr>";
    $msg .= "<tr><td><strong>Message:</strong> </td><td>" . htmlentities($_POST['comments']) . "</td></tr>";
    $msg .= "</table>";
    $msg .= "</body></html>";

    // Headers

    $headers = "MIME-Version: 1.0\r\n";
    $headers.= "Content-type: text/html; charset=UTF-8\r\n";
    $headers.= "From: <" . $from . ">";
    mail($to, $subject, $msg, $headers);

    // echo json_encode( $_POST );

    echojson_encode(array( "sent" => true ));
	}  else	{
	// tell the user about error
	  echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>