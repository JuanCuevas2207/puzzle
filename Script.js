const puzzleContainer = document.getElementById("puzzleContainer");

move = (e) => {
	var id = e.target.id;

	if(id == "" || id == "puzzleContainer")
		return;

	var row = parseInt(id.slice(-2, -1));
	var column = parseInt(id.slice(-1));

	var tile = document.getElementById(row+""+column).className;

	if (tile != "cellD4") { 
       //Si se enuentra a la derecha el espacio vacio 
       if (column<4) {
       	if (document.getElementById(row+""+(column+1)).className=="cellD4") {
       		swapTiles(row+""+column,row+""+(column+1));
       		updateMovements(1);
       		return;
       	}
       }

       //Si se enuentra a la izquierda el espacio vacio
       if (column>1) {
       	if (document.getElementById(row+""+(column-1)).className=="cellD4") {
       		swapTiles(row+""+column,row+""+(column-1));
       		updateMovements(1);
       		return;
       	}
       }

       //Si se enuentra arriba el espacio vacio
       if (row>1) {
       	if (document.getElementById((row-1)+""+column).className=="cellD4") {
       		swapTiles(row+""+column,(row-1)+""+column);
       		updateMovements(1);
       		return;
       	}
       }

       //Si se enuentra debajo el espacio vacio
       if (row<4) {
       	if (document.getElementById((row+1)+""+column).className=="cellD4") {
       		swapTiles(row+""+column,(row+1)+""+column);
       		updateMovements(1);
       		return;
       	}
       } 
   }

}

shuffle = () => {
	updateMovements(0);
	for (var row=1; row<=4; row++) { 
		for (var column=1; column<=4; column++) { 

			var row2=Math.floor(Math.random()*4 + 1); 
			var column2=Math.floor(Math.random()*4 + 1);

			swapTiles(row+""+column, row2+""+column2); 
		} 
	} 
}

swapTiles = (cell1, cell2) => {
	var temporal = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temporal;
}

solve = () => {
	updateMovements(1);
	for (var row=1; row<=4; row++) { 
		for (var column=1; column<=4; column++) {
			switch (row) {
				case 1:
				document.getElementById(""+row+column).className = "cellA"+column;
				break;
				case 2:
				document.getElementById(""+row+column).className = "cellB"+column;
				break;
				case 3:
				document.getElementById(""+row+column).className = "cellC"+column;
				break;
				case 4:
				document.getElementById(""+row+column).className = "cellD"+column;
				break;
				default:
				break;
			}   		
		} 
	} 
}

updateMovements = setOrReset => {
	var movements = document.getElementById("movements").value;

	if(setOrReset == 0)
		document.getElementById("movements").value = 0;
	else
		document.getElementById("movements").value = parseInt(movements)+1;
}

(() => {
	puzzleContainer.addEventListener("click", move);
})(); 