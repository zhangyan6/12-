window.onload = function(){
	//验证邮箱
	var username = document.getElementById("username");
	username.onblur = function(){
		if(username.value==0){
			document.getElementById("divTipUsername").style.display = "inline";
		}
	}
	
	//验证密码
	var pword = document.getElementById("password");
	pword.onblur = function(){
		var pattern = /^(\w){6,16}$/;
		if(!pattern.test(pword.value)){
			document.getElementById("divTipPassword").style.display = "inline";
		}
	}
	//确认密码
	var pwords = document.getElementById("password2");
	pwords.onblur = function(){
		if(pwords.value != pword.value){
			document.getElementById("divTipPassword2").style.display = "inline";
		}
	}
}