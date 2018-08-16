document.getElementById("aberto").click();// elemento que vai começar aberto

function openContent(evt, idContent){
	var tabcontent, tablinks;

	/* Deixar todos os conteudo com display none*/
	tabcontent = document.getElementsByClassName("tabcontent");
	for (var i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	/* Deixar todos os botões sem a class active*/
	tablinks = document.getElementsByClassName("tablinks");
	for (var i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	/* show no conteudo e colocar active no botão*/
	document.getElementById(idContent).style.display = "block";
	evt.currentTarget.className += " active";
}

