function ShowTranslatedText() {
    var inputText = document.getElementById('inputText').value;
    var translatedText = "ka"+inputText;
    document.getElementById("TranslatedTextBox").value = translatedText;
    return translatedText;
}
document.getElementById("TranslateButton").onclick = ShowTranslatedText;

