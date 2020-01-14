document.getElementById("create").addEventListener("click", function(e){

 e.preventDefault(); 

 if(document.getElementById("array_type").value=='normal'){
  const seperator = document.getElementById('seperator').value;
  if(seperator=='0'){
  	let values = document.getElementById("option_values").value.split("\n");
  }
  else{
  	let values = document.getElementById("option_values").value.split(seperator);
  }
  
  let text = '';
 

for (let i =0; i < values.length; i++) {
	if (i==0){
		let array = '$'+document.getElementById('array_name').value+'=array( ';
		text = text + array +"\n";
	}

	let option = values[i];
	text = text + '"' + option + '",' + "\n";

	

	if (i==values.length-1){
		let array = ');';
		text = text + array;
	}
}
document.getElementById('result').value=text;
}

if(document.getElementById("array_type").value=='associative'){
	let new_value = [];
	let text = '';
	let values = document.getElementById("option_values").value.split("\n");
	for (let i =0; i < values.length; i++) {
		new_value.push(values[i].split(","));
	}
	for (let i =0; i < new_value.length; i++){
		if (i==0){
		let array = '$'+document.getElementById('array_name').value+'=array( ';
		text = text + array +"\n";
	}
		let option = new_value[i][0];
		let option2 = new_value[i][1];
		text = text + '"' + option + '"=>';
		text = text + '"' + option2 + '",' + "\n";

		if (i==values.length-1){
		let array = ');';
		text = text + array;
	}

	}
	
document.getElementById('result').value=text;
}

});

function array_function (){
	if(document.getElementById("array_type").value=='associative'){
		document.getElementById("associative_array").style.display = "block";
		document.getElementById("normal_array").style.display = "none";
	}
	else{
		document.getElementById("associative_array").style.display = "none";
		document.getElementById("normal_array").style.display = "block";
	}
}

