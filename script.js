let btn = document.getElementById('popupBtn');
let printBtn = document.getElementById('printBtn')
let popup = document.getElementById('popup_contact');
let close = document.getElementsByClassName('close')[0];
let print = document.getElementById('popup_print');
let exit = document.getElementsByClassName('exit')[0];


btn.onclick = function showContacts(){
    popup.style.display = "block";
}
printBtn.onclick = function prntIt(){
    print.style.display = "block";
}
close.onclick = function exit(){
    popup.style.display = "none";
}
exit.onclick = function exit(){
   print.style.display ="none";
}
