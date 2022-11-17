var checkpwd = function () {
	const pwd = document.getElementById("pwd").value;
	const rptpwd = document.getElementById("rptpwd").value;
	const message = document.getElementById("tooltip");
	const checkmark = document.getElementById("checkmark");

	if (pwd === rptpwd) {
		checkmark.innerHTML = "√";
		checkmark.style.color = "green";
	} else {
		checkmark.innerHTML = "X";
		checkmark.style.color = "red";
		checkmark.style.fontSize = "20px";
	}
};
