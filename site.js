var trans_btn = document.querySelector("#primary_btn");
var text = document.querySelector("#input_text");
var output = document.querySelector("#output")



function btn_event(){
    output.innerText = text.value;

};

trans_btn.addEventListener("click", btn_event);