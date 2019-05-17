function ShowHelloMessage()
{
    var name = document.getElementById("myname");
    document.getElementById("hellomessage").innerHTML = "Hellooooo!!!, " + name.value; + name.value
}

document.getElementById("mybutton").onclick = ShowHelloMessage;



function Translate() {
    var inputText = document.getElementById('inputText').value;
    var translatedText = "translated text";
    return translatedText;
}
