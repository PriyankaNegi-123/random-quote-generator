'use strict'

function generate(){
    var quotes = {
        "-Carrie Bradshaw" : "“Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.”",
        "― Aaron Lauritsen" : "“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.” ",
        "― Albert Borris" : "“the truth will set u free but first it will piss u off”",
        "― Edward M. Hallowell" : "“Forgiveness takes intelligence, discipline, imagination, and persistence, as well as a special psychological strength, something athletes call mental toughness and warriors call courage.”",
        "― Yann Martel" : "“Faith in God is an opening up, a letting go, a deep trust, a free act of love - but sometimes it was so hard to love.”"
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}