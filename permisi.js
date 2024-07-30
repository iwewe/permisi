var alpha = new Array(
    "---", "--x", "-w-", "-wx", "r--", "r-x", "rw-", "rwx"
);

function trim(str) {
    str = str.replace(/\s+$/, "");
    str = str.replace(/^\s+/, "");
    return str;
}

function showPermissions() {
    var err = document.getElementById("octalerror");
    var perm = document.getElementById("permissions");
    var octal = document.octal_to_perm.octal.value;
    var valid = /^[0-7]+$/;
    var txt;
    var i;
    var permStr;
    var zeros = "000";

    octal = trim(octal);
    if (octal.search(valid) >= 0) {
        permStr = "-";
        if (octal.length < 3) {
            octal = zeros.substr(0, 3 - octal.length) + octal;
        }
        for (i = 0; i < octal.length; i++) {
            permStr = permStr + alpha[octal.charAt(i)];
        }
        permStr = permStr;
        txt = document.createTextNode(permStr);
        perm.replaceChild(txt, perm.firstChild);
        txt = document.createTextNode("\u00a0");
    } else {
        if (octal == "") {
            octal = "Your input";
        }
        txt = document.createTextNode(octal + " does not consist of three digits in the range 0 to 7");
    }
    err.replaceChild(txt, err.firstChild);
    return false;
}

function showOctal() {
    var octal = "";
    var obj = document.getElementById("numeric");
    var txt;
    var choice;
    choice = document.perm_to_octal.user.selectedIndex;
    octal = octal + document.perm_to_octal.user.options[choice].value;
    choice = document.perm_to_octal.group.selectedIndex;
    octal = octal + document.perm_to_octal.group.options[choice].value;
    choice = document.perm_to_octal.other.selectedIndex;
    octal = octal + document.perm_to_octal.other.options[choice].value;
    txt = document.createTextNode(octal);
    obj.replaceChild(txt, obj.firstChild);
    return false;
}
