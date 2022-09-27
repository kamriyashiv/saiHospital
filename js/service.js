
function TreatMents(){
	let url="js/Treatments.json";
	fetch(url).then((responce)=>{
		return responce.json();
	}).then((data)=>{
		data.map((val,index)=>{
			document.getElementById("mainService").innerHTML+=`
			<div class="tBox">
				<figure>
					<img src="serviceImg/${val.thumbnail}" alt="${val.title}">
				</figure>
				<div class="tTitle">
					<h3>${val.title}</h3>
				</div>
			</div>
		`;			
		});   		
	});
}

export default TreatMents;