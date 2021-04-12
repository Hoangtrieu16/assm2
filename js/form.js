
function kt(){
	var mssv=document.getElementById("masv");
	var name=document.getElementById("ten");
	var email=document.getElementById("email");
	var quocgia=document.getElementById("quocgia");

	var error1=document.getElementById("thieu");
	var error2=document.getElementById("thieu1");
	var error3=document.getElementById("thieu2");
	var error4=document.getElementById("thieu3");
	var error5=document.getElementById("thieu4");
	var error6=document.getElementById("thieu5");

	var gioitinh=document.getElementsByName("gioitinh");
	var sothich=document.getElementsByClassName("sothich");
	var fieldset = document.getElementsByClassName("fieldset");


	//kiểm tra mã sinh viên
	if(mssv.value.length==0){
		mssv.style.border="1px solid red";
		error1.innerHTML="Mã sinh viên không được để trống!";
		return false;
	 }else{
	 	mssv.style.border="none";
	 	error1.innerHTML="";
	}

	//kiểm tra họ tên
	if(name.value.length==0){
		name.style.border="1px solid red";
		error2.innerHTML="Họ tên sinh viên không được để trống!";
		return false;
	}else{
		name.style.border="none";
		error2.innerHTML="";
	}

	//kiểm tra email
	if(email.value.length==0){
		email.style.border="1px solid red";
		error3.innerHTML="Email không được để trống!";
		return false;
	}else{
		email.style.border="none";
		error3.innerHTML="";
	}

	//kiểm tra giới tính
	if(gioitinh[0].checked!==true & gioitinh[1].checked!==true){
		error4.innerHTML="Bạn phải chọn giới tính!";
		return false;
	}else{
		error4.innerHTML="";
	}

	//Kiểm tra sở thích
	var kt=0;
	for(var i=0;i<sothich.length;i++){
		if(sothich[i].checked==true){
			kt++;
		}
	}
	if(kt==0){
		
		error5.innerHTML="Bạn phải chọn ít nhất một sở thích!";
		return false;
	}else{
		error5.innerHTML="";
	}
	//kiểm tra chọn quốc tịch
	if(quocgia.value==0){
		quocgia.style.border = "1px solid red";
		error6.innerHTML=" Bạn phải chọn quốc tịch!";
		return false;
	}else{
		quocgia.style.border = "none";
		error6.innerHTML="";
	}

    alert("Đăng kí thành công");
}