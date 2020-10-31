function searchSuccess(arrnull,arrcross){
	if(arrcross[0] && arrcross[1] && !(arrnull[2])){
		return 2;
	}
	if(arrcross[3] && arrcross[4] && !(arrnull[5])){
		return 5;
	}
	if(arrcross[6] && arrcross[7] && !(arrnull[8])){
		return 8;
	}

	if(arrcross[0] && arrcross[2] && !(arrnull[1])){
		return 1;
	}
	if(arrcross[3] && arrcross[5] && !(arrnull[4])){
		return 4;
	}
	if(arrcross[6] && arrcross[8] && !(arrnull[7])){
		return 7;
	}

	if(arrcross[1] && arrcross[2] && !(arrnull[0])){
		return 0;
	}
	if(arrcross[4] && arrcross[5] && !(arrnull[3])){
		return 3;
	}
	if(arrcross[7] && arrcross[8] && !(arrnull[6])){
		return 6;
	}

	if(arrcross[0] && arrcross[3] && !(arrnull[6])){
		return 6;
	}
	if(arrcross[1] && arrcross[4] && !(arrnull[7])){
		return 7;
	}
	if(arrcross[2] && arrcross[5] && !(arrnull[8])){
		return 8;
	}

	if(arrcross[0] && arrcross[6] && !(arrnull[3])){
		return 3;
	}
	if(arrcross[1] && arrcross[7] && !(arrnull[4])){
		return 4;
	}
	if(arrcross[2] && arrcross[8] && !(arrnull[5])){
		return 5;
	}

	if(arrcross[3] && arrcross[6] && !(arrnull[0])){
		return 0;
	}
	if(arrcross[4] && arrcross[7] && !(arrnull[1])){
		return 1;
	}
	if(arrcross[5] && arrcross[8] && !(arrnull[2])){
		return 2;
	}

	if(arrcross[0] && arrcross[4] && !(arrnull[8])){
		return 8;
	}
	if(arrcross[0] && arrcross[8] && !(arrnull[4])){
		return 4;
	}
	if(arrcross[4] && arrcross[8] && !(arrnull[0])){
		return 0;
	}

	if(arrcross[2] && arrcross[4] && !(arrnull[6])){
		return 6;
	}
	if(arrcross[2] && arrcross[6] && !(arrnull[4])){
		return 4;
	}
	if(arrcross[4] && arrcross[6] && !(arrnull[2])){
		return 2;
	}

	return -1;
}

export default searchSuccess;