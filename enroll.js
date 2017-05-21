var enroll=document.getElementById("enroll");
//alert(enroll);
enroll.onclick=function(e){
	e.preventDefault();
	enroll.innerHTML="已参与";
	enroll.style.background="#27cb8b";
	enroll.style.borderColor="#27cb8b";
}
/*window.onload=roll;
function roll(){
	var menu=document.getElementById("menu");
	var rnd=Math.floor(Math.random()*2)+1;
	menu.clssName="menu"+rnd;
	menu.style.backgroundImage="url('pic"+rnd+".jpg')";
}*/