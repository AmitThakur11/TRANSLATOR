var trans_btn = document.querySelector("#primary_btn");
var text = document.querySelector("#input_text");

function btn_event(){
    console.log("input", text.value);
    
};

trans_btn.addEventListener("click", btn_event);