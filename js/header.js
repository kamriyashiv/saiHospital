 function headFoot(){
	let headerData=[
    {
        logo:"img/logo.png",
        alt:"Sai hospital Bilaspur Official Logo",
		About:"Whole Body Check is a comprehensive health check package which helps in the overall assessment of all the organs and systems of the body such as Heart, Lungs, Kidneys, Liver, Breast,"
    },//hospital logo
    {
        tabName:["Home","About","Services","Gallery","Contact"],
        tabLinks:["index.html","about.html","services.html","gallery.html","ContactUs.html"]
    },//navList 
	{
		mobile:91000000000,
		email:"example@gmail.com",
		Adress:"Sai hospital Bilaspur C.G."
	}
	
]; 

let [logo,nav,adress]=headerData;
let {tabName,tabLinks}=nav;
let headerA=document.getElementById("header");
let footerA=document.getElementById("footer");	

function header(){
	headerA.innerHTML=`
		<div class="mainHeader">
			<div class="toggleBTN">
				<button id="menuBtn">
					<i class="fa fa-bars"></i>
				</button>
			</div>
                <div class="container">
                    <div class="HeaderGrid">
                        <div class="logoBox" id="logo">
							<figure>
								<img src=${logo.logo} alt="${logo.alt}">
							</figure>
                        </div><!--end-logoBox-->
                        <div class="navListBox" id="navList">
                            <div class="navList">
                                <ul id="list">                                    
                                </ul>
                            </div>
                        </div>
                        <div class="actionBtn" id="bt">
                            <button class="btn"id="book">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>	
	`;  
	 book.addEventListener("click",()=>{
		 window.location.href="ContactUs.html";
	 });
	//header-navlist
	for(let i=0; i<tabName.length; i++){
		list.innerHTML+=`
			 <li><a href="${tabLinks[i]}">${tabName[i]}</a></li>  
		 `;
	}

	 //onscroll - Header Sticky
	window.onscroll = function() {myFunction()};	
	let sticky = headerA.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
		headerA.classList.add("sticky");
	  } else {
		headerA.classList.remove("sticky");
		headerA.style.transition="1s";
	  }
	}

}
header();

function footer(){
	   footerA.innerHTML=`
			<div class="mainFooter">
				<div class="container">
					<div class="footerCol">
						<div class="FootAbout">
							<h3>About us</h3>
							<div id="footLogo">
								<figure>
									<img src=${logo.logo} alt="${logo.alt}">
								</figure>
							</div>
							<div class="footTExt" id="aboutText">
								<p>${logo.About}</p>
							</div>						
						</div>
					  <div class="Links">
						<h3>Useful links</h3>
						 <ul id="footMenu"></ul>
					  </div>
					  <div class="Location">
						<h3>Contact us</h3>
						<ul id="footLocation">	
							<li><a>${adress.mobile}</a></li>
							<li><a>${adress.email}</a></li>
							<li><a>${adress.Adress}</a></li>
						</ul>
					  </div>
					</div>
				</div>
				<div class="copyright">
					 <span>Copyright © 2022. Design & Developed by </span><a href="http://codefusioninfotech.com/" trget="_blank">Code Fusion Infotech</a>
				</div>
			</div>	
		`;
		
		tabName.map((val,index)=>{
			footMenu.innerHTML+=`
			 <li><a href="${tabLinks[index]}">${tabName[index]}</a></li>  
		 `;
		});	
}
footer();
function menu(){
	
}
menu();
	let navList=document.querySelector(".navList");
	let MenuOcon=document.querySelector(".toggleBTN button");
	let bt=document.querySelector("#bt");
   document.getElementById("menuBtn").addEventListener("click",()=>{
		MenuOcon.style.border="1px solid red";
		navList.classList.toggle("none");
		bt.classList.toggle("none");
   });
}
export default headFoot;