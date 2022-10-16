var book;
let chapterNum;
var totalChapters
var verseNum;
var url;

var bookSelect = document.getElementById("book");
bookSelect.oninput = (event) => {
    event.preventDefault();
    book = bookSelect.options[bookSelect.selectedIndex].text
    console.log(book);
    switch (book) {
        case "Matthew":
            totalChapters = 28;
            break;
        case "Mark":
            totalChapters = 16;
            break;
        case "Luke":
            totalChapters = 24;
            break;
        case "John":
            totalChapters = 21;
            break;
        case "Acts":
            totalChapters = 28;
            break;
        case "Romans":
            totalChapters = 16;
            break;
        case "1 Corinthians":
            totalChapters = 16;
            break;
        case "2 Corinthians":
            totalChapters = 13;
            break;
        case "Galatians":
            totalChapters = 6;
            break;
        case "Ephesians":
            totalChapters = 6;
            break;
        case "Philippians":
            totalChapters = 4;
            break; 
        case "Colossians":
            totalChapters = 4;
            break;
        case "1 Thessalonians":
            totalChapters = 5;
            break;
        case "2 Thessalonians":
            totalChapters = 3;
            break;
        case "1 Timothy":
            totalChapters = 6;
            break;
        case "2 Timothy":
            totalChapters = 4;
            break;
        case "Titus":
            totalChapters = 3;
            break;
        case "Philemon":
            totalChapters = 1;
            break;
        case "Hebrews":
            totalChapters = 13;
            break;
        case "James":
            totalChapters = 5;
            break;
        case "1 Peter":
            totalChapters = 5;
            break;  
        case "2 Peter":
            totalChapters = 3;
            break;
        case "1 John":
            totalChapters = 5;
            break;
        case "2 John":
            totalChapters = 1;
            break;
        case "3 John":
            totalChapters = 1;
            break;
        case "Jude":
            totalChapters = 1;
            break;
        case "Revelation":
            totalChapters = 22;
            break;
    }
    document.getElementById("chapter").innerHTML = "";
    for (let i = 1; i <= totalChapters; i++) {
        document.getElementById("chapter").innerHTML+= '<option value="' + i + '">' + i + '</option>';
    }
    console.log(totalChapters);
}

var chapterSelect = document.getElementById("chapter");
chapterSelect.oninput = (event) => {
    event.preventDefault();
    chapterNum = chapterSelect.options[chapterSelect.selectedIndex].innerHTML;
    console.log(chapterNum);
}

function generateNum () {
    return Math.round(Math.random() * 20);
}
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    var result = "";
    verseNum = generateNum();
    url = "https://bible-api.com/" + book + "%20" + chapterNum + ":" + verseNum;

    fetch(url).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        result += json.text;
        console.log(result);
        document.getElementById("myverse").innerHTML = "";
        document.getElementById("myverse").innerHTML = book + " " + chapterNum + ":" + verseNum;
        document.getElementById("result").innerHTML = "";
    document.getElementById("result").insertAdjacentText('beforeend', result);
    });
    
    
});