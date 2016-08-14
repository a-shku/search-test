
var searchInput = document.getElementById('searchInput');

console.log('sdas');

var p = new Promise(function(resolve){
	var XHR = ((new XMLHttpRequest()).withCredentials !== undefined) ? XMLHttpRequest : XDomainRequest;

	var xhr = new XHR();
	
	//var xhr = new XMLHttpRequest();
	xhr.open('GET', 'city.json', true);
	xhr.responseType = 'json';
	xhr.onload = function(){
		resolve(xhr.response);
	};
	xhr.send();
}).then(function(towns){
	console.log(towns);
		
	searchInput.addEventListener('keyup', function(){
		
		var search = this.value.trim();
		search = search.toLowerCase();
		
		results.innerHTML = '';
		
		if(search) {
			for(var i = 0; i < towns.length; i++){
				var currentTown = towns[i].name.toLowerCase();
				//console.log(currentTown);
				if(currentTown.indexOf(search) > -1){
					var newLi = document.createElement('li');
					
					newLi.textContent = towns[i].name;
					results.appendChild(newLi);
				}
			}
		}
	});
});




