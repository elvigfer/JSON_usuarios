/** Cargar un fichero JSON */

window.onload = () => {

  let numPage = `?page=` + 1;
  let boton1 = document.querySelector(`#uno`);
  let boton2 = document.querySelector(`#dos`);
  let lista = document.querySelector("#usuarios");
  var btnbusc = document.getElementById("buscar");

  cargaDatos(`https://reqres.in/api/users${numPage}`);

  btnbusc.addEventListener("click", () => {

    var input = document.getElementById("numero");
    var valor = input.value;
    if( Number(valor)){
      if(valor>0 && valor<13 ){
        cargaDatos(`https://reqres.in/api/users/${valor}`);
      }else{
        alert("Este usuario no existe")
      }
    }else{
      alert("Introduce números")
    }
  });
  
  

  boton1.addEventListener("click", ()=>{
    numPage = `?page=` + 1; 
    cargaDatos(`https://reqres.in/api/users${numPage}`);
  })
  boton2.addEventListener("click", ()=>{
    numPage = `?page=` + 2; 
    cargaDatos(`https://reqres.in/api/users${numPage}`);
  })



  function cargaDatos(url){
   
    lista.innerHTML = "";
    fetch(url)
    .then(res => res.json())
    .then(res => {

      let data = res.data;
      if(Array.isArray(data)){
        data.sort((a, b) => a.first_name.localeCompare(b.first_name));
        data.forEach((user) => {
            let avatar = `https://source.boringavatars.com/bauhaus/50/${user.first_name}%20${user.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
            let item=`<li class="user">
                     <img src="${avatar}" alt="${user.first_name} "/>
                     <span class="name">${user.first_name}</span>
                     <span class="surname"> ${user.last_name} </span>
 
             </li>`;
             lista.innerHTML += item;
        });

      }else{
        let avatar = `https://source.boringavatars.com/bauhaus/50/${data.first_name}%20${data.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
        let item=`<li class="user">
                 <img src="${avatar}" alt="${data.first_name} "/>
                 <span class="name">${data.first_name}</span>
                 <span class="surname"> ${data.last_name} </span>

         </li>`;
         lista.innerHTML += item;
      }});}}