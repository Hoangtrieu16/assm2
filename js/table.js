
function ktds(){
	var dstr=document.querySelectorAll("table tbody tr");
	for(var i=0;i<dstr.length;i++){
		var the_tr=dstr[i];
		the_tr.style.display="table-row";
		var chk=the_tr.querySelector("input[type=checkbox]");
		chk.setAttribute("onchange","nutCheckBox(this)"); 
		var number=the_tr.querySelector("input[type=number]");
		number.setAttribute("onchange","thaySo(this)");
	}

}
ktds();

function checkAll(objCHK){
	var kt_true=objCHK.checked;
	
	var dstr=document.querySelectorAll("table tbody tr");
	
	for(var i=0;i<dstr.length;i++){
		var the_tr=dstr[i];
		var chk=the_tr.querySelector("input[type=checkbox]");
		chk.checked=kt_true;

		var number=the_tr.querySelector("input[type=number]");
		number.disabled = !kt_true ? true : false;
	}	
}

function nutCheckBox(checkBox){
	var the_tr=checkBox.parentElement.parentElement;
	var kt_true=checkBox.checked;
	var number=the_tr.querySelector("input[type=number]");
	number.disabled = !kt_true ? true : false;
}

function thaySo(so){
	var sl=so.value;
	var donggia =so.parentElement.previousElementSibling.innerHTML;
	var thanhtien =so.parentElement.nextElementSibling;
	var tonggiatien=Number(donggia)*sl;

	thanhtien.innerHTML=tonggiatien;
	tongTien();
}

function tongTien(){
	var dstr=document.querySelectorAll("table tbody tr");
	var tong_tien=0;
	for(var i=0;i<dstr.length;i++){
		var the_tr=dstr[i];
		if(the_tr.style.display="table-row"){
			var the_th=the_tr.lastElementChild.innerHTML;
			console.log(the_th);
			tong_tien=tong_tien+Number(the_th);
		}

		document.getElementById("tongtien").innerHTML=tong_tien;
	}
}

function selectGia(select){
	var dstr=document.querySelectorAll("table tbody tr");
	console.log(dstr);
	switch(select.value){
		case "0":
		for(var i=0;i<dstr.length;i++){
				dstr[i].style.display = "table-row";
			}
		break;
		
		case "1":
		for(var i=0;i<dstr.length;i++){
			var td_dongia=dstr[i].children[2].innerHTML;
			if(Number(td_dongia)<100){
				dstr[i].style.display = "table-row";
			}else{
				dstr[i].style.display = "none";
			}
		}
		break;

		case "2":
		for(var i=0;i<dstr.length;i++){
			var td_dongia=dstr[i].children[2].innerHTML;
			if(Number(td_dongia)>100 && Number(td_dongia)<500){
				dstr[i].style.display = "table-row";
			}else{
				dstr[i].style.display = "none";
			}
		}
		break;
		case "3":
		for(var i=0;i<dstr.length;i++){
			var td_dongia=dstr[i].children[2].innerHTML;
			if(Number(td_dongia)>500){
				dstr[i].style.display = "table-row";
			}else{
				dstr[i].style.display = "none";
			}
		}
		break;

		default: 
		for(var i=0;i<dstr.length;i++){
				dstr[i].style.display = "table-row";
			}
		break;
	}
}



