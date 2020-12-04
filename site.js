var trans_btn = document.querySelector("#primary_btn");
var inp_text = document.querySelector("#input_text");
var output_text = document.querySelector("#output")



var serverUrl  = "https://api.funtranslations.com/translate/valspeak.json";

function error_handler(error){
    console.log("error occured",error);
    alert("somrthing went wrong! try again after few minutes");
}
function translation(text){
    return serverUrl + "?" + "text=" + text


}
function btn_event(){
    var inputText = inp_text.value;

    fetch(translation(inputText))
    .then(response => response.json())
    .then(json => {
        var trans_text = json.contents.translated;
        output_text.innerText = trans_text;}
        )

};

trans_btn.addEventListener("click", btn_event);