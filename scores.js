let scoresData = localStorage.getItem("scores");
let scoresContainer = document.querySelector('.container-scores');
let buttonClear = document.querySelector('.button-clear');

if(scoresData !== null){
    let scoresObj = JSON.parse(scoresData);
    scoresObj.sort((a, b) => {
        if(a.score > b.score){
            return -1;
        }
        if(a.score < b.score){
            return 1;
        }
        return 0;
    });
    scoresObj.forEach((scores, index) => {
        let div = document.createElement("div");
        div.setAttribute("class", "scoreInitials-time")
        div.innerHTML = `${index + 1}: ${scores.initials} --> ${scores.score} points`;
        scoresContainer.appendChild(div);
    });
}