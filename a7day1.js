var nums = [1,3,4,5,6];
var factorials = new Array();
var result;

for(let i=0; i< nums.length ; i++){
	//factorial for every number
	
       let result= getFactorial(nums[i]);
       console.log(result);
       factorials.push(result);
}

for (const iterator of factorials) {
   // document.write(iterator + '</br>');
    //console.log(iterator);
}


function getFactorial(num){

	//write here factorial logic
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }

	return fact;
}