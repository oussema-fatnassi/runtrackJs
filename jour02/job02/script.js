var articleCreated = false;

function showhide() {
    if (!articleCreated) {
        var article = document.createElement("article");
        var text = document.createTextNode("The important thing is not the fall, but the landing");
        article.setAttribute("id", "article");
        article.appendChild(text);
        document.body.appendChild(article);
        
        articleCreated = true;
    }

    else {
        document.getElementById("article").remove();
        articleCreated = false;
    }
}
