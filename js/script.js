`use strict`
import playingFieldData from "./modules/playingFieldData";
import checkDanger from "./modules/checkDanger";
import searchSuccess from "./modules/searchSuccess";
import checkWinner from "./modules/checkWinner";
import finall from "./modules/finall";

window.addEventListener(`DOMContentLoaded`, function() {
	const playingfield_items = document.querySelectorAll(`.playingfield_item`),
		  humancount = document.querySelector(`.human_score`),
		  computedcount = document.querySelector(`.computed_score`);
	if (localStorage.getItem(`human_score`)){
		humancount.innerText = `${localStorage.getItem(`human_score`)}`;
		computedcount.innerText = `${localStorage.getItem(`computed_score`)}`;
	}
	console.log(localStorage.getItem(`human_score`));
	console.log(localStorage.getItem(`computed_score`));
	  
	let countstep = 0;


	humanStep();

	function humanStep() {
		playingfield_items.forEach((item,index) =>{
			item.addEventListener(`click`,()=>{
				if(!(item.classList.contains('busy'))){
					addZero(item,index);
					countstep++;
					let arrnull = playingFieldData(`null`);
					let flag = checkWinner(arrnull);
					if(flag){
						finall(`human`,playingfield_items);
					}
					computedStep();
				}        
			});
			item.addEventListener(`mouseenter`,()=> {
				if(!(item.classList.contains('busy'))){
					item.classList.add(`pointer`);
				}   
			});
			item.addEventListener(`mouseleave`,()=> {
				item.classList.remove(`pointer`);     
			});
		});
	}

	function addZero(item,index){
	    const zero = document.createElement(`div`);
	    zero.classList.add(`zero`);
	    playingfield_items[index].append(zero);
	    item.classList.add(`busy`,`null`);
	}

	function computedStep() {
		let arrnull = playingFieldData(`null`);
		let arrcross = playingFieldData(`cross`);
		if(countstep === 5){
			finall(`ybxmz`,playingfield_items);
		}
		if (countstep === 1){
	        if(!arrnull[4]){
	            addCross(4);
	        } else {
	            addCross(8);
			}
		}

		if (countstep > 1 && countstep < 5){
			let x = checkDanger(arrnull,arrcross);
			if(!(x === -1)){
				addCross(x);
			} else {
				addCross(searchSuccess(arrnull,arrcross));
			}
		}
		arrcross = playingFieldData(`cross`);
		let flag = checkWinner(arrcross);
			if(flag){
				finall( `compudet`,playingfield_items);
			}
	}

	function addCross(index){
	    const cross = document.createElement(`div`);
		cross.classList.add(`cross_`);
		cross.innerHTML = `
		<span></span>
		<span1></span1>
		`;
	    playingfield_items[index].append(cross);
	    playingfield_items[index].classList.add(`busy`,`cross`);
	}
	
});



