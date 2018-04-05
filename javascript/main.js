$(document).ready(function(){


//----------------------TO GET TO THE SIGNUP PAGE--------------------------------
    function signup(){
        window.location.href = "html/signup.html";
    }

    $("#signup").click(function(){
       signup();
    });


//--------------------THE SIGN UP PAGE TEXT INPUTS AND BUTTON---------------------------
    function signup2(){
        var password = $("#signpassword").val();
        var email = $("#signemail").val();

        if($("#fname").val() && $("#lname").val() && $("#signemail").val() && $("#signusername").val() && $("#signpassword").val()){
            if(password.length >= 6 && password.length <= 20){
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                    window.location.href = "mainpage.html";
                }
                else{
                    alert("Please enter a valid email")
                }    
            }
            else{
                alert("Password must be between 6 and 20 characters")
            }   
        }
        else{
            alert("Please fill out all fields")
        }
    }

    $("#signUpButton").click(function(){
        signup2();
    });
//----------------------END OF SIGNUP----------------------------------------------------

//----------------------TO GET TO LOGIN PAGE--------------------------------------------------------
function login(){
    window.location.href = "html/login.html";
}


$("#login").click(function(){
   login();
});
//------------------------LOGIN PAGE INPUTS AND BUTTON----------------------------------------------
function login2(){

    var password = $("#loginPassword").val();
    if($("#loginUsername").val() && $("#loginPassword").val()){
        if(password.length >= 6 && password.length <= 20){
            window.location.href = "mainpage.html";
        }
        else{
            alert("Invalid password");
        }
    }
    else{
        alert("Please fill out both fields")
    }    
}

$("#loginButton").click(function(){
    login2();
});


//----------------------------MAIN PAGE STARTS HERE---------------------------------------
function logout(){
    window.location.href = "../home.html";
    alert("You succesfully logged out");
}

$("#logout").click(function(){
    logout();
});



function search(){
     $("#middle").empty();


    var keyword = $("#keyword").val();

    $.get("http://opentable.herokuapp.com/api/restaurants?city="+keyword).done(
            function (response){ 
               
                 var restaurantarray = response.restaurants;
                 console.log(restaurantarray);
                 for(var i=0; i< restaurantarray.length; i++){

                    var restaurantDiv = $("<div class='restaurantDiv'></div>");
                    var textDiv = $("<div class='textDiv'></div>");
                    var img = $("<img></img>");
                    img.attr("src", restaurantarray[i].image_url);
                    var  name = $("<p id='name'></p>");
                    var phone = $("<p id='phone'></p>")
                    name.html(restaurantarray[i].name);
                    phone.html(restaurantarray[i].phone);
                                     
                    restaurantDiv.append(img);
                    restaurantDiv.append(textDiv);
                    textDiv.append(name); 
                    textDiv.append(phone);
                    $("#middle").append(restaurantDiv);

                 }
            })
        }

       

         $("#searchbutton").click(function(){
             search();
         });
       


});


