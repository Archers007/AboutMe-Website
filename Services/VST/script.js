
async function Serial(){
	await fetch("https://api.countapi.xyz/create")
	.then(response => response.json())
	.then(data => {
		console.log(data.key)
		document.getElementById("SerialNum").value = data.key;
	});
}
var loadFile = function(event,id) {
	var image = document.getElementById(`${id}Image`);
	image.src = URL.createObjectURL(event.target.files[0]);
};


window.addEventListener("load",Serial);
