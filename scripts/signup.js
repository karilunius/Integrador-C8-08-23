window.addEventListener("load", function () {
	/* ---------------------- obtenemos variables globales ---------------------- */
	const nombre = document.getElementById("inputNombre");
	const apellido = document.getElementById("inputApellido");
	const email = document.getElementById("inputEmail");
	const password = document.getElementById("inputPassword");
	const repetirPassword = document.getElementById("inputPasswordRepetida");
	const form = document.querySelector("form");

	/* -------------------------------------------------------------------------- */
	/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
	/* -------------------------------------------------------------------------- */
	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const nuevoUsuario = {
			nombre: nombre.value,
			apellido: apellido.value,
			email: email.value,
            password: password.value,
            repetirPassword: null,
            
		};
	});

	/* -------------------------------------------------------------------------- */
	/*                    FUNCIÓN 2: Realizar el signup [POST]                    */
	/* -------------------------------------------------------------------------- */
	function realizarRegister(settings) {}
});
