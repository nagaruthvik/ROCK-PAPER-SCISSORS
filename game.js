function startGame(event){
    
    var button_name = parseInt(event.currentTarget.name,10)
    var user_score = parseInt(localStorage.getItem('userScore'), 10) || 0;
    var comp_score = parseInt(localStorage.getItem('compScore'), 10) || 0;

    console.log("buttonname",button_name);

    var random_choice = random_generator();

    console.log("Random choice: " + random_choice,button_name);

    if ((user_score === 15 && comp_score === 15) ) {
        localStorage.setItem('result', 'TIE UP');
        localStorage.setItem('final','final')
        localStorage.setItem('against', '');
        
        window.location.href = "subMainPage.html";
    } else if (user_score === 15) {
        localStorage.setItem('result', 'YOU WIN');
        localStorage.setItem('final','final')
        localStorage.setItem('against', 'AGAINST PC');
        window.location.href = "subMainPage.html";
    } else if (comp_score === 15) {
        localStorage.setItem('result', 'YOU LOST');
        localStorage.setItem('final','final')
        localStorage.setItem('against', 'AGAINST PC');
        window.location.href = "subMainPage.html";
    }
    
    else if( (button_name === 1 && random_choice === 2) || 
    (button_name === 2&& random_choice === 3) || 
    (button_name === 3 && random_choice === 1)) {
        localStorage.setItem('result', 'YOU WIN');
        localStorage.setItem('final','not final')
        localStorage.setItem('against', 'AGAINST PC');
        
        window.location.href = "subMainPage.html";
        user_score += 1;
        localStorage.setItem('userScore', user_score);
    } 
    else if( (button_name === random_choice )) {
        localStorage.setItem('result', 'TIE UP');
        localStorage.setItem('final','not final')
        localStorage.setItem('against', '');
        window.location.href = "subMainPage.html";
    } 
    else {
        localStorage.setItem('result', 'YOU LOST');
        localStorage.setItem('final','not final')
        localStorage.setItem('against', 'AGAINST PC');
        window.location.href = "subMainPage.html";
        comp_score += 1;
        localStorage.setItem('compScore', comp_score);
    }
    localStorage.setItem('your_choice',button_name)
    localStorage.setItem('comp_choice',random_choice)
    updateScores();
    console.log("Random choice: " + random_choice);
}

function reset() {
    
    localStorage.clear(); 

    
    document.getElementById("user_score").textContent = 0;
    document.getElementById("computer_score").textContent = 0;

    window.location.href = "index.html"
}

function win() {
    localStorage.clear()
    window.location.href = "win.html"
}
function redirect(){
    window.location.href = "index.html"
}
function random_generator() {
    return Math.floor(Math.random() * 3) + 1;
}

function updateScores() {
    
    var user_score_storage = parseInt(localStorage.getItem('userScore'), 10) || 0;
    var comp_score_storage = parseInt(localStorage.getItem('compScore'), 10) || 0;

    
    document.getElementById("user_score").textContent = user_score_storage;
    document.getElementById("computer_score").textContent = comp_score_storage;
    console.log("Updated Scores -> User: " + user_score_storage + ", Computer: " + comp_score_storage);
}
document.querySelectorAll("button:not(.not_valid)").forEach(btn => 
    btn.addEventListener("click", startGame)
);
window.addEventListener("load", updateScores);
