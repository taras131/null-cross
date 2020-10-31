function finall(selector,items){
    console.log(selector);
    console.log(items);
    const result = document.querySelector(`.result`),
          cleaner = document.querySelector(`.newgame`);
    let humancount1, computedcount1;

    items.forEach((item) =>{
        item.classList.add(`busy`,`rotate`);
    });

    if(localStorage.getItem(`human_score`)){
        humancount1 = +localStorage.getItem(`human_score`),
        computedcount1 = +localStorage.getItem(`computed_score`);
    } else{
        humancount1 = 0,
        computedcount1 = 0;
    }
        
    if(selector === `human`){
        result.innerText = `Вы победили`;
        humancount1 += 3;
    } else {
        if(selector === `compudet`){
            result.innerText = `Вы проиграли ХАХАХАХА!!!!!`;
            computedcount1 = +computedcount1 + 3;
        } else {
            result.innerText = `Ничья......`;
            humancount1 = +humancount1 + 1;
            computedcount1 = +computedcount1 + 1;
        }
    }
    
    localStorage.setItem(`human_score`,humancount1);
    localStorage.setItem(`computed_score`,computedcount1);
   
    const button = document.createElement(`button`);
    button.classList.add(`button`);
    button.innerText = `Начать новую игру`;
    cleaner.append(button);
    button.addEventListener(`click`,()=>{
        window.location.reload();
    });
}
export default finall;