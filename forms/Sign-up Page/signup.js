var checkpwd = function () {
	const pwd = document.getElementById("pwd").value;
	const rptpwd = document.getElementById("rptpwd").value;
	const checkmark = document.getElementById("checkmark");

	if (pwd === rptpwd && pwd.length >= 8) {
		checkmark.innerHTML = "√";
		checkmark.style.color = "green";
		console.log("pwd = rptpwd");
	} else {
		checkmark.innerHTML = "X";
		checkmark.style.color = "red";
		checkmark.style.fontSize = "20px";
		console.log("else");
	}
};
