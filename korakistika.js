function ShowTranslatedText() {


    var inputText = document.getElementById('inputText').value;

    var hyphenate = createHyphenator(hyphenationPatternsEnGb);

    var hyphenatedText = hyphenate(inputText);

    var translatedText = "ka"+inputText;
    document.getElementById("TranslatedTextBox").value = hyphenatedText;


    return translatedText;
}
document.getElementById("TranslateButton").onclick = ShowTranslatedText;




