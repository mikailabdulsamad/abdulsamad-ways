let calculate = localStorage.getItem('calculate')||
	"";
    function calculator(value){
		calculate += value;
		console.log(calculate);
		document.querySelector('.page').innerHTML = calculate;
		localStorage.setItem('calculate',calculate)
	}
	function remove(){
	let see = document.querySelector('.page').innerHTML;
	let me = see.slice(0,-1);
	return me;
	}
	