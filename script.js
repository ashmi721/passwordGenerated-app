const  generate = () => {
	const length = document.getElementById("length").value;
	const uppercase = document.getElementById("uppercase").checked;
	const lowercase = document.getElementById("lowercase").checked;
	const numbers = document.getElementById("numbers").checked;
	const symbols = document.getElementById("symbols").checked;
	
	let charset = uppercase + lowercase + numbers + symbols;
	let password = "";
	
if(lowercase){
	charset += "abcdefghijklmnopqrstuvwxyz";
}
	if (uppercase) {
		charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	
	if (numbers) {
		charset += "0123456789";
	}
	
	if (symbols) {
		charset += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";
	}
	
	for (let i = 0; i < length; i++) {
		password += charset.charAt(Math.floor(Math.random() * charset.length));
	}
	
	document.getElementById("password").value = password;
}
