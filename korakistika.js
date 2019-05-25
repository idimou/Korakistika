function ShowTranslatedText() {


    var inputText = document.getElementById('inputText').value;


    var lang ="EN";

    if (lang=="GR")
    {
        var hyphenate=createHyphenator(hyphenationPatternsGrMonoton,{debug:true,hyphenChar:'-'} );
        var FillerSyllable="κα";
    }
    else
    {
        var hyphenate=createHyphenator(hyphenationPatternsEnGb,{debug:true,hyphenChar:'-'} );
        var FillerSyllable="ka";
    }

    var hyphenatedText = hyphenate(inputText);

    var translatedText = FillerSyllable+hyphenatedText;
    document.getElementById("TranslatedTextBox").value = translatedText;


    return translatedText;
}
document.getElementById("TranslateButton").onclick = ShowTranslatedText;




