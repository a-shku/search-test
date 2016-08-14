
var searchInput = document.getElementById('searchInput');

console.log('sdas');

var p = new Promise(function(resolve){
	var XHR = ((new XMLHttpRequest()).withCredentials !== undefined) ? XMLHttpRequest : XDomainRequest;

	var xhr = new XHR();
	
	//var xhr = new XMLHttpRequest();
	xhr.open('GET', 'players.json', true);
	xhr.responseType = 'json';
	xhr.onload = function(){
		resolve(xhr.response);
	};
	xhr.send();
}).then(function(originalArray){
	console.log(originalArray);
		
	searchInput.addEventListener('keyup', function(){
		
		var search = this.value.trim();
		search = search.toLowerCase();
		var searchArr = search.split(' ');

		results.innerHTML = '';
		
		if(search) {
			//looping through all objects in array
			for(var i = 0; i < originalArray.length; i++){
				var currentObj = originalArray[i]
				//towns.name.toLowerCase();
				//console.log(currentTown);

				//looping through an obect
				for(var prop in currentObj){
					var currentProp = String(currentObj[prop]);
					currentProp = currentProp.toLowerCase();
					
					for(var s in searchArr){
						if(currentProp.match(searchArr[s])){
							console.log('MUTCH', currentProp);
						}
						if(currentProp.indexOf(searchArr[s]) > -1){
							console.log(currentProp);
						}
					}
					
				}
				/*if(currentTown.indexOf(search) > -1){
					var newLi = document.createElement('li');
					
					newLi.textContent = towns[i].name;
					results.appendChild(newLi);
				}*/
			}
		}
	});
});




