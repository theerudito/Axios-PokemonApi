let boton = document.getElementById("boton")
// FETCH API POKEMON

    boton.addEventListener("click", async(e) => {
      let buscar = document.getElementById("buscador").value
      let name = document.getElementById("nombre")
      let imagen = document.getElementById("img")
      let salud = document.getElementById("sall")
      let id = document.getElementById("idn")
      let ataque = document.getElementById("ataa")
      let defensa = document.getElementById("deff")
      e.preventDefault()
          const res  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${buscar}`)    
          console.log(res);
          const data = await res.data
          console.log(data);  

          imagen.setAttribute("src", data.sprites.front_default)
          name.textContent = data.name
          salud.textContent= data.stats[0].base_stat
          id.textContent= data.id
          ataque.textContent= data.stats[3].base_stat
          defensa.textContent= data.stats[2].base_stat
    })   
