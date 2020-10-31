function checkDanger(arrnull,arrcross) {
	if(arrnull[0] && arrnull[1] && !(arrcross[2])){
		return 2;
	}
	if(arrnull[3] && arrnull[4] && !(arrcross[5])){
		return 5;
	}
	if(arrnull[6] && arrnull[7] && !(arrcross[8])){
		return 8;
	}

	if(arrnull[0] && arrnull[2] && !(arrcross[1])){
		return 1;
	}
	if(arrnull[3] && arrnull[5] && !(arrcross[4])){
		return 4;
	}
	if(arrnull[6] && arrnull[8] && !(arrcross[7])){
		return 7;
	}

	if(arrnull[1] && arrnull[2] && !(arrcross[0])){
		return 0;
	}
	if(arrnull[4] && arrnull[5] && !(arrcross[3])){
		return 3;
	}
	if(arrnull[7] && arrnull[8] && !(arrcross[6])){
		return 6;
	}

	if(arrnull[0] && arrnull[3] && !(arrcross[6])){
		return 6;
	}
	if(arrnull[1] && arrnull[4] && !(arrcross[7])){
		return 7;
	}
	if(arrnull[2] && arrnull[5] && !(arrcross[8])){
		return 8;
	}

	if(arrnull[0] && arrnull[6] && !(arrcross[3])){
		return 3;
	}
	if(arrnull[1] && arrnull[7] && !(arrcross[4])){
		return 4;
	}
	if(arrnull[2] && arrnull[8] && !(arrcross[5])){
		return 5;
	}

	if(arrnull[3] && arrnull[6] && !(arrcross[0])){
		return 0;
	}
	if(arrnull[4] && arrnull[7] && !(arrcross[1])){
		return 1;
	}
	if(arrnull[5] && arrnull[8] && !(arrcross[2])){
		return 2;
	}

	if(arrnull[0] && arrnull[4] && !(arrcross[8])){
		return 8;
	}
	if(arrnull[4] && arrnull[8] && !(arrcross[0])){
		return 0;
	}
	if(arrnull[0] && arrnull[8] && !(arrcross[4])){
		return 4;
	}

	if(arrnull[2] && arrnull[4] && !(arrcross[6])){
		return 6;
	}
	if(arrnull[2] && arrnull[6] && !(arrcross[4])){
		return 4;
	}
	if(arrnull[4] && arrnull[6] && !(arrcross[2])){
		return 2;
	}

	
	for(let i = 8;i >= 0; i--){
		if(!arrcross[i] && !arrnull[i]){
			return i;
		}
	}
}

export default checkDanger;