$(document).ready(function(){
async function favoriteExpression(){
    const favoriteExpression = await fetch('expression.txt');
    const expression = await favoriteExpression.text();
    console.log(expression);
    return expression; 
};

expressionText = favoriteExpression();
console.log(expressionText);

$('#button').on("click", async function(){
    const expressionText = await favoriteExpression();
    $('#paragraph').append(expressionText);}
    
)}
);