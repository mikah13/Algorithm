let isPrime = a => {
	if (a < 2) {
		return false;
	} else if (a == 2) {
		return true;
	} else {
		for (let i = 2; i <= Math.sqrt(a); i++) {
			if (a % i === 0) {
				return false;
			}
		}
	}
	return true;
};

let primeSet = a => {
	let arr = [];
	for (let i = 0; i <= a; i++) {
		if (isPrime(i)) {

			arr.push(i);
		}
	}

	return arr;
};

primeSet(20);

let arr = primeSet(20).map(a=>{
  let k = 0;
  for(let i = 1;k<20;i++){
   k=Math.pow(a,i);
    if(k>=20){
      return Math.pow(a,i-1);
    }
  }
}).reduce((cur,val)=>cur*val);
