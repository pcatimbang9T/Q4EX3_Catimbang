function checkthegrade() {
	let grade = document.getElementById('inputGrade').value;
	
	if (grade <= 65) {
		window.alert("FAILED");
	}

	else if (grade <= 75) {
		window.alert("BELOW AVERAGE");	
	}

	else if (grade <= 80) {
		window.alert("AVERAGE");	
	}

	else if (grade <= 85) {
		window.alert(" ABOVE AVERAGE");	
	}		
}
