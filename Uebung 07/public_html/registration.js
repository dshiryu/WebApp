// the html tag is set to activate the function while you type, showing the imgs according to the conditions below
var checkPasswords = function () {
    console.log();
    if(document.getElementById("psw1").value === document.getElementById("psw2").value) {
        document.getElementById("psw_equal").style.display = "block";
	document.getElementById("psw_error").style.display = "none";
    } else {
        document.getElementById("psw_error").style.display = "block";
	document.getElementById("psw_equal").style.display = "none";
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