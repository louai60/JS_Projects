var element1 = document.getElementById("conn-1");
var element2 = document.getElementById("conn-2");

function remove() {
    element1.remove("connec");
}

function remove2() {
    element2.remove("connec");
}

//changing Name 

const text = document.querySelector('.name');

function changeName(){
    text.innerText = "Louay";
}