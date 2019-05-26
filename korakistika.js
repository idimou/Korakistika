function ShowTranslatedText() {


    var inputText = document.getElementById('inputText').value;



    var lang ="EN";

    if (lang=="GR")
    {
        var hyphenate=createHyphenator(hyphenationPatternsGrMonoton,{debug:true,hyphenChar:'κα'} );
        var FillerSyllable="κα";
    }
    else
    {
        var hyphenate=createHyphenator(hyphenationPatternsEnGb,{debug:true,hyphenChar:'ka'} );
        var FillerSyllable="ka";
    }

    var hyphenatedText = hyphenate(inputText);
    var translatedText ="";

    translatedText = hyphenatedText;
    translatedText=translatedText.replace(/ /g, " ka");
    translatedText="Ka"+translatedText;


    document.getElementById("TranslatedTextBox").value = translatedText;
    return translatedText;
}

function FillInputWithDummyText()
{
    var DummyInputText ="The king and queen, and the prime minister have sent congratulations to Duncan Laurence for his Eurovision Song Festival win – the first Dutch victory since 1975. ‘We are proud of Duncan Laurence, who has conquered Europe with his musical quality, delivered a win for the Netherlands for the first time in 44 years and brought the song festival to the Netherlands next year,’ king Willem-Alexander and queen Maxima said on Twitter.";
    document.getElementById('inputText').value=DummyInputText;
}
document.getElementById("TranslateButton").onclick = ShowTranslatedText;
document.getElementById("FillInWithDummyText").onclick = FillInputWithDummyText;



