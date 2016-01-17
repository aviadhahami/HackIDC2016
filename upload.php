<?php
// Local directory on the server under 2016 folder (aka relative what up)
$target_dir = "cvs/";

// Flag for testing later whether we should save the file or not
$uploadOk = 1;

// Get names and clear them
$firstName = preg_replace('/[^A-Za-z\-]/', '', $_POST["firstName"]);
$lastName = preg_replace('/[^A-Za-z\-]/', '', $_POST["lastName"]);

$err=[];
// Test for name's length, we test for 20 since client is configured to block larger than 20
if(strlen($firstName)>20 || strlen($lastName)>20){
    // Names are too long wtf
    $err[] ="name too long";
    $uploadOk = 0;
}

$docFileType = pathinfo(basename($_FILES["file"]["name"]),PATHINFO_EXTENSION);

$file_name = preg_replace('/\s+/', '', $firstName) . "_" . preg_replace('/\s+/', '', $lastName) . "-cv.".  uniqid() .".".$docFileType;
$target_file = $target_dir . $file_name;//basename($_FILES["file"]["name"]);


//// Check if image file is a actual image or fake image
//if(isset($_POST["submit"])) {
//    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//    if($check !== false) {
//        echo "File is an image - " . $check["mime"] . ".";
//        $uploadOk = 1;
//    } else {
//        echo "File is not an image.";
//        $uploadOk = 0;
//    }
//}
//// Check if file already exists
//if (file_exists($target_file)) {
//    echo "Sorry, file already exists.";
//    $uploadOk = 0;
//}
// Check file size
if ($_FILES["file"]["size"] > 5242880) {
    $err[]="Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($docFileType != "doc" && $docFileType != "docx" && $docFileType != "pdf") {
    $err[]="Sorry, we get only doc,docx and pdf, you've given us this: " . $docFileType;
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
//    echo "Sorry, your file was not uploaded.";
    echo json_encode(array('status'=>400,'reason'=>$err));
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        echo json_encode(array('status'=>'200','url'=>$file_name));
        // echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
    } else {
        echo json_encode(array('status'=>400,'reason'=>$err));
    }
}
?>