// the html tag is set to activate the function while you type, showing the imgs according to the conditions below
var checkPasswordsE = function () {
    if(document.getElementById("psw1E").value === document.getElementById("psw2E").value) {
        document.getElementById("psw_equalE").style.display = "block";
	document.getElementById("psw_errorE").style.display = "none";
    } else {
        document.getElementById("psw_errorE").style.display = "block";
	document.getElementById("psw_equalE").style.display = "none";
    }
};

var checkPasswordsG = function () {
    if(document.getElementById("psw1G").value === document.getElementById("psw2G").value) {
        document.getElementById("psw_equalG").style.display = "block";
	document.getElementById("psw_errorG").style.display = "none";
    } else {
        document.getElementById("psw_errorG").style.display = "block";
	document.getElementById("psw_equalG").style.display = "none";
    }
};

// it's supposed to be like the members list from Uebung 6 that you made appear with a click

let flagGerman = document.getElementById("germanFlag_changeToEnglish");
let flagEnglish = document.getElementById("englishFlag_changeToGerman");

flagGerman.onclick = function() {
    document.getElementById("german_version").style.display = "block";
    document.getElementById("english_version").style.display = "none";
    document.getElementById("german_header").style.display = "block";
    document.getElementById("english_header").style.display = "none";
};

flagEnglish.onclick = function() {
    document.getElementById("english_version").style.display = "block";
    document.getElementById("german_version").style.display = "none";
    document.getElementById("english_header").style.display = "block";
    document.getElementById("german_header").style.display = "none";
};

var submitCheck = function(event){
    var username = document.getElementById("username");
    var password1 = document.getElementById("psw1");
    var password2 = document.getElementById("psw2");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");

    if (!username.checkValidity()||!password1.checkValidity()||!password2.checkValidity()||!firstname.checkValidity()||!lastname.checkValidity()||!email.checkValidity()){
    document.getElementById("errormessage").style.display ="block";
    document.getElementById("okmessage").style.display ="none";
}
    else {
    document.getElementById("okmessage").style.display ="block";
    document.getElementById("errormessage").style.display ="none";  
    event.preventDefault();
}
}
//document.getElementById("submit").addEventListener("click", submitCheck());