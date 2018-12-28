const max = document.querySelector(".max");
const rolls = document.querySelector(".rolls");
const turns = document.querySelector(".turns");
const start = document.querySelector('.start');
const betTitle = document.querySelector('.bet-title');
const startingBet = document.querySelector('.starting-bet')
function game(){
    resetTextContent()
    starting = parseFloat(document.getElementById("bet").value);
    money = parseFloat(starting);
    if(!isNaN(money)){
        maxInfo = [0,money];
        count = 0;
        while (money > 0){
            count++;
            if(Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) === 7){
                money += 4;
            } else {
                money -=1;
            }
            if (money > maxInfo[1]){
                maxInfo[0] = count;
                maxInfo[1] = money;
            }
        }
        startingBet.textContent = `Starting bet: ${starting}$`;
        rolls.textContent = `Total Rolls Before Going Broke: ${count}`;
        max.textContent = `Highest Amount Won: ${maxInfo[1]}$`;  
        turns.textContent = `Roll Count At Highest Amount Won: ${maxInfo[0]}`;
    } else{
        betTitle.textContent = "You must enter a number to play";
        setTimeout(resetTextContent, 5000);
    }
}
function resetTextContent(){
    betTitle.textContent = "Enter a starting bet";
}

start.addEventListener('click', game);