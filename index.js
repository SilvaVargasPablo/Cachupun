      var opciones = ["Piedra", "Papel", "Tijera"];
      var contComputer = 0;
      var contUser = 0;
   
      do {
        cantidadDepartidas = + prompt(
          "Ingrese numero de partidas"
        );
      } 

      //elegir cantidad d epartidas
      while (cantidadDepartidas <= 0);
      
      for (var i = 1; i <= cantidadDepartidas; i++) {
        let jugadaUser;
        do {
          jugadaUser = +prompt(`ingrese el numero de su opcion: 
        1-Piedra
        2-Papel
        3-Tijera`);} 
        
        while (jugadaUser < 1 || jugadaUser > 3);
        
        //eleccion de computer
        var jugadaComputer = Math.floor(Math.random() * 3) + 1;
        alert("La computadora eligió: " + opciones[jugadaComputer - 1]);

        var u = jugadaUser;
        var c = jugadaComputer;

        //define resultados
        if (u == c) alert("Double K.O!"), contComputer++, contUser++;
        else if (u == 1 && c == 2) alert("You Lose"), contComputer++;
        else if (u == 1 && c == 3) alert("You Win"), contUser++;
        else if (u == 2 && c == 3) alert("You Lose"), contComputer++;
        else if (u == 2 && c == 1) alert("You Win"), contUser++;
        else if (u == 3 && c == 1) alert("You Lose"), contComputer++;
        else if (u == 3 && c == 2) alert("You Win"), contUser++;
      }
      //lo hice basandome en el de la ultima clase y al final lo termine haciendo igual, y no funcoina...
      //a no, olvideolo, tenia mal escrito juaguada en vez de jugada equis de
      //lo importante es que voy entendiendo  :)
      const decisionFinal = contUser > contComputer ? "Jugador" : "Computadora";
      alert(`
        Puntaje final:
        - Jugador: ${contUser}
        - Computadora: ${contComputer};
        Gracias por jugar
      `);
