<!DOCTYPE html>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
   
    <title>Signup</title>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="../css/signup.css" />
    <script src="../javascript/main.js"></script>
</head>
<body>
    <div class="tocentersignup">
        <h1>Sign Up</h1>
        <form action="mainpage.jsp">
            <input type="text" id="fname" placeholder="Firstname">
            <input type="text" id="lname" placeholder="Lastname"><br>
            <input type="text" id="signemail" placeholder="Email"><br>
            <input type="text" id="username" placeholder="Username"><br>
            <input type="password" id="signpassword" placeholder="Password"><br>
        </form>
        <button id="signUpButton">Sign Up</button>
    </div>    
    
    <div class="footer">   
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Site Map</p>
    </div>
</body>

</html>