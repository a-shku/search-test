
var searchInput = document.getElementById('searchInput');



var list = [  
   {  
      "id":242,
      "name":"Abdul Rahman Baba",
      "position":"Left-Back",
      "jerseyNumber":6,
      "dateOfBirth":"1994-07-02",
      "nationality":"Ghana",
      "contractUntil":"2020-06-30",
      "marketValue":"10,000,000 ˆ"
   },
   {  
      "id":435,
      "name":"Falcao",
      "position":"Centre Forward",
      "jerseyNumber":9,
      "dateOfBirth":"1986-02-10",
      "nationality":"Colombia",
      "contractUntil":"2016-06-30",
      "marketValue":"35,000,000 ˆ"
   },
   {  
      "id":1840,
      "name":"Asmir Begovic",
      "position":"Keeper",
      "jerseyNumber":1,
      "dateOfBirth":"1987-06-20",
      "nationality":"Bosnia-Herzegovina",
      "contractUntil":"2019-06-30",
      "marketValue":"12,000,000 ˆ"
   },
   {  
      "id":2138,
      "name":"Thibaut Courtois",
      "position":"Keeper",
      "jerseyNumber":13,
      "dateOfBirth":"1992-05-11",
      "nationality":"Belgium",
      "contractUntil":"2019-06-30",
      "marketValue":"35,000,000 ˆ"
   },
   {  
      "id":2140,
      "name":"Jamal Blackman",
      "position":"Keeper",
      "jerseyNumber":27,
      "dateOfBirth":"1993-10-27",
      "nationality":"England",
      "contractUntil":"2019-06-30",
      "marketValue":"250,000 ˆ"
   },
   {  
      "id":2141,
      "name":"Gary Cahill",
      "position":"Centre Back",
      "jerseyNumber":24,
      "dateOfBirth":"1985-12-19",
      "nationality":"England",
      "contractUntil":"2017-06-30",
      "marketValue":"20,000,000 ˆ"
   },
   {  
      "id":2142,
      "name":"Kurt Zouma",
      "position":"Centre Back",
      "jerseyNumber":5,
      "dateOfBirth":"1994-10-27",
      "nationality":"France",
      "contractUntil":"2019-06-30",
      "marketValue":"12,000,000 ˆ"
   },
   {  
      "id":2143,
      "name":"John Terry",
      "position":"Centre Back",
      "jerseyNumber":26,
      "dateOfBirth":"1980-12-07",
      "nationality":"England",
      "contractUntil":"2016-06-30",
      "marketValue":"4,000,000 ˆ"
   },
   {  
      "id":2145,
      "name":"Cesar Azpilicueta",
      "position":"Left-Back",
      "jerseyNumber":28,
      "dateOfBirth":"1989-08-28",
      "nationality":"Spain",
      "contractUntil":"2019-06-30",
      "marketValue":"23,000,000 ˆ"
   },
   {  
      "id":2147,
      "name":"Branislav Ivanovic",
      "position":"Right-Back",
      "jerseyNumber":2,
      "dateOfBirth":"1984-02-22",
      "nationality":"Serbia",
      "contractUntil":"2016-06-30",
      "marketValue":"17,000,000 ˆ"
   },
   {  
      "id":2148,
      "name":"Nemanja Matic",
      "position":"Defensive Midfield",
      "jerseyNumber":21,
      "dateOfBirth":"1988-08-01",
      "nationality":"Serbia",
      "contractUntil":"2019-06-30",
      "marketValue":"40,000,000 ˆ"
   },
   {  
      "id":2149,
      "name":"John Obi Mikel",
      "position":"Defensive Midfield",
      "jerseyNumber":12,
      "dateOfBirth":"1987-04-22",
      "nationality":"Nigeria",
      "contractUntil":"2017-06-30",
      "marketValue":"10,000,000 ˆ"
   },
   {  
      "id":2151,
      "name":"Cesc Fabregas",
      "position":"Central Midfield",
      "jerseyNumber":4,
      "dateOfBirth":"1987-05-04",
      "nationality":"Spain",
      "contractUntil":"2019-06-30",
      "marketValue":"50,000,000 ˆ"
   },
   {  
      "id":2152,
      "name":"Ramires",
      "position":"Central Midfield",
      "jerseyNumber":7,
      "dateOfBirth":"1987-03-24",
      "nationality":"Brazil",
      "contractUntil":"2017-06-30",
      "marketValue":"25,000,000 ˆ"
   },
   {  
      "id":2153,
      "name":"Oscar",
      "position":"Attacking Midfield",
      "jerseyNumber":8,
      "dateOfBirth":"1991-09-09",
      "nationality":"Brazil",
      "contractUntil":"2019-06-30",
      "marketValue":"38,000,000 ˆ"
   },
   {  
      "id":2154,
      "name":"Willian",
      "position":"Right Wing",
      "jerseyNumber":22,
      "dateOfBirth":"1988-08-09",
      "nationality":"Brazil",
      "contractUntil":"2018-06-30",
      "marketValue":"30,000,000 ˆ"
   },
   {  
      "id":2155,
      "name":"Eden Hazard",
      "position":"Left Wing",
      "jerseyNumber":10,
      "dateOfBirth":"1991-01-07",
      "nationality":"Belgium",
      "contractUntil":"2020-06-30",
      "marketValue":"70,000,000 ˆ"
   },
   {  
      "id":2158,
      "name":"Diego Costa",
      "position":"Centre Forward",
      "jerseyNumber":19,
      "dateOfBirth":"1988-10-07",
      "nationality":"Spain",
      "contractUntil":"2019-06-30",
      "marketValue":"50,000,000 ˆ"
   },
   {  
      "id":2159,
      "name":"Loic Remy",
      "position":"Centre Forward",
      "jerseyNumber":18,
      "dateOfBirth":"1987-01-02",
      "nationality":"France",
      "contractUntil":"2018-06-30",
      "marketValue":"12,000,000 ˆ"
   },
   {  
      "id":2655,
      "name":"Papy Djilobodji",
      "position":"Centre Back",
      "jerseyNumber":null,
      "dateOfBirth":"1988-12-01",
      "nationality":"Senegal",
      "contractUntil":"2019-06-30",
      "marketValue":"6,500,000 ˆ"
   },
   {  
      "id":3428,
      "name":"Pedro",
      "position":"Right Wing",
      "jerseyNumber":17,
      "dateOfBirth":"1987-07-28",
      "nationality":"Spain",
      "contractUntil":"2019-06-30",
      "marketValue":"20,000,000 ˆ"
   },
   {  
      "id":3641,
      "name":"Ruben Loftus-Cheek",
      "position":"Central Midfield",
      "jerseyNumber":36,
      "dateOfBirth":"1996-01-23",
      "nationality":"England",
      "contractUntil":"2017-06-30",
      "marketValue":"2,000,000 ˆ"
   },
   {  
      "id":5663,
      "name":"Kenedy",
      "position":"Secondary Striker",
      "jerseyNumber":16,
      "dateOfBirth":"1996-02-08",
      "nationality":"Brazil",
      "contractUntil":"2020-06-30",
      "marketValue":"6,000,000 ˆ"
   },
   {  
      "id":5664,
      "name":"Bertrand Traore",
      "position":"Centre Forward",
      "jerseyNumber":14,
      "dateOfBirth":"1995-09-06",
      "nationality":"Burkina Faso",
      "contractUntil":"2018-06-30",
      "marketValue":"4,000,000 ˆ"
   }
]


var p = new Promise(function(resolve){
	/*var XHR = ((new XMLHttpRequest()).withCredentials !== undefined) ? XMLHttpRequest : XDomainRequest;

	var xhr = new XHR();
	
	//var xhr = new XMLHttpRequest();
	xhr.open('GET', 'players.json', true);
	xhr.responseType = 'json';
	xhr.onload = function(){
		//resolve(xhr.response);
	};
	xhr.send();*/

	resolve(list);

}).then(function(originalArray){
	//console.log(originalArray);
	
	function toLowerCaseString(inlet){
		inlet = String(inlet);
		inlet = inlet.trim();
		inlet = inlet.toLowerCase();
		return inlet;
	};

	var preSelected = [];
	searchInput.addEventListener('keyup', function(){
		
		
		
		var search = toLowerCaseString(this.value);
		
		var searchArr = search.split(' ');
		
		if(document.cookie){	//console.log(document.cookie);
      	}
		
		function getCookie() {
		  var matches = document.cookie.match(new RegExp(
			"(?:^|; )" + 'oldSearch'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		  ));
		  return matches ? decodeURIComponent(matches[1]) : undefined;
		}

		getCookie();
		//console.log(search, getCookie());
		if(search.match(getCookie())){
			//console.log(search);
			//originalArray = preSelected;
			//console.log(originalArray);
		}
		document.cookie = 'oldSearch='+search;
		
		
		//cleaning of list
		results.innerHTML = '';
		
		
		if(search) {
         //looping through searchArray
			searcLooping(searchArr);
			/*if(newSearch.match(oldSearc)){
				originalArray = preSelected;
			}*/
			
			
			
			//alert(searchArr.every(searcLooping));
			
			/*if(searchArr.every(searcLooping)){
				preSelected.push();
			}*/
			
			function searcLooping(searchArr){
				var s = 0;
				for(s in searchArr){
							
					//console.log(searchArr[s]);
					objLooping(searchArr[s]);
					
				}
			};
			
			//looping through all objects in array
			function objLooping(searchItem){
				//console.log(searchItem);
				for(var currentObjIndex in originalArray){
               //console.log(currentObjIndex);
					propLooping(searchItem, originalArray[currentObjIndex]);
				}
			};
			
			function propLooping(currentSearch, currentObj){
				//console.log(currentObj);
				for(var prop in currentObj){
					matching(currentSearch, currentObj[prop], currentObj);
				}
			};
			
			function matching(currentSearch, currentProp, currentObj){
				//console.log(currentSearch, currentProp, currentObj);

            //if every searchArr[s]
                  /*вынести условие совпадения в функцию "содержится и не содержится (для исключений)"*/
				/*var exception = false;
						if(currentSearch.charAt(0) == '-' ){
							exception = true;
							//console.log(exception);
							currentSearch = currentSearch.replace(/^-/,'');
						}*/
				
				/*function  exception(){
							
						}*/
				
				currentProp = toLowerCaseString(currentProp);
				/*function ever(){
					return currentProp.match(currentSearch);
				};
					
					if(searchArr.every(searcLooping)){
					alert('hello');
					}
				
				*/
				if(currentProp.match(currentSearch) /*&& !exception*/){
					console.log(currentSearch, currentProp);
               /*preSelected.push(currentObj);
					
					//console.log(preSelected);
					for(var preItem in preSelected){
						if(preSelected[preItem].id == currentObj.id){
							var del = preSelected.indexOf(currentObj);
							preSelected.splice(del, 1);
						}
					}
					//console.log(preSelected);*/
					
					preSelected.push(currentObj);
						var newLi = document.createElement('li');
	   
						newLi.textContent = JSON.stringify(currentObj);
						results.appendChild(newLi);
					
					//console.log(currentSearch, currentProp, currentObj);
					//console.log(preSelected);
					//s++;
				}
				
			};
			
		/*====================================================*/	
			
			
			
			
			
			/*for(var i = 0; i < originalArray.length; i++){
				var currentObj = originalArray[i]
				
				var mountOfMatchesInObj = 0;
				var collect = [];
            
			top:
				
				//looping through an obect
				
					
					for(var s in searchArr){
						
											
						for(var prop in currentObj){

						var currentProp = toLowerCaseString(currentObj[prop]);
						
						
						
												
						
						if(currentProp.match(searchArr[s])){
														
							collect.push(currentProp);
							//console.log('collect', collect);
							mountOfMatchesInObj++;
							//console.log('MUTCH', currentProp);
							//console.log(mountOfMatchesInObj);
							
							//if(mountOfMatchesInObj === searchArr.length ){
							//	//console.log(mountOfMatchesInObj, searchArr.length);
								
							//	preSelected.push(currentObj);
							//	var newLi = document.createElement('li');
               
							//	newLi.textContent = JSON.stringify(currentObj);
							//	results.appendChild(newLi);
							//}

                    
                     continue top;
						} else {continue }
						
					} //end looping by prop
					
				}//end looping by searchArr
				
			}*/

		}
	});
});




