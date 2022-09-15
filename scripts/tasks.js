// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const jwt = cargarToken();

if(!jwt) {
  location.replace('/');
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const btnCerrarSesion = document.querySelector('#closeApp');
  const formCrearTarea = document.querySelector('.nueva-tarea');
  const inputTarea = document.querySelector('#nuevaTarea');
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
    
    const confirma = confirm('Seguro que quiere cerrar sesion?');
    if(confirma) {
      localStorage.removeItem('jwt');
      location.replace('/');
    }
    
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const parrafo = document.getElementById('nombre_usuario');
    
    const URL = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe'
    const config = {
      method: 'GET',
      headers: {
        authorization: jwt,
      }
    }

    fetch(URL, config).then( res => {return res.json()})
    .then( data => {
      const { firstName, lastName } = data;
      parrafo.textContent = firstName + ' ' +lastName;
    })


  };

  obtenerNombreUsuario();


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    
    const URL = 'https://ctd-todo-api.herokuapp.com/v1/tasks'
    const config = {
      method: 'GET',
      headers: {
        authorization: jwt,
      }
    }

    fetch(URL, config).then( res => {return res.json()})
    .then( data => {
      console.log(data);
    })
  };

  consultarTareas()


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault();
    const nuevaTarea = inputTarea.value;
    inputTarea.value = '';
    const data = {
      description: nuevaTarea,
      completed: false,
    }
    const URL = 'https://ctd-todo-api.herokuapp.com/v1/tasks'
    const config = {
      method: 'POST',
      headers: {
        authorization: jwt,
        'Content-Type' : "application/json; charset=UTF-8",
      }, 
      body: JSON.stringify(data),
    }

    fetch(URL, config).then( res => { return res.json()})
    .then(data => {
      console.log(data);
    })
  });

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});