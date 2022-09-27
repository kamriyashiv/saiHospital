function Gallery(){
	let url= "js/gallery.json";
	fetch(url).then((response)=>{
		return response.json();
	}).then((data)=>{
		data.map((val,index)=>{
			val.img.map((valImg)=>{
				document.getElementById("Gbox").innerHTML+=`
				<div class="tBox">
					<figure>
						<img src="${valImg}" alt="${val.alt}">
					</figure>					
				</div>
				`; 		  
			}); 			
		});
	});
}

export default Gallery;