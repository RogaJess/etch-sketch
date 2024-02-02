const container = document.getElementById("container");
let gridSize = 16; // Grid starting size

function createGrid(size) {
	container.style.display = "flex";
	container.style.flexWrap = "wrap";
	container.style.width = "960px";
	container.innerHTML = ""; // Clear previous grid

	let squareSize = 960 / size;
	for (let i = 0; i < size * size; i++) {
		const square = document.createElement("div");
		square.style.width = `${squareSize}px`;
		square.style.height = `${squareSize}px`;
		square.style.border = "1px solid black";
		square.classList.add("grid-square");
		container.appendChild(square);
	}
	hoverEffect();
}

function hoverEffect() {
	const squares = document.querySelectorAll(".grid-square");
	squares.forEach((square) => {
		let opacity = 0;
		square.addEventListener("mouseover", () => {
			if (!square.style.backgroundColor || opacity < 1) {
				// Random Color Extra Credit
				let randomColor = `rgb(${Math.random() * 255}, ${
					Math.random() * 255
				}, ${Math.random() * 255})`;
				square.style.backgroundColor = randomColor;
				// Extra Credit for Progressive Darkening
				opacity = Math.min(opacity + 0.1, 1);
				square.style.opacity = opacity.toString();
			}
		});
	});
}

// Button event listener
document.getElementById("gridButton").addEventListener("click", () => {
	let newSize = prompt("Enter Grid size (max 100):");
	if (newSize !== null && newSize <= 100 && newSize > 0) {
		createGrid(newSize);
	} else {
		alert("Please enter a valid Grid size (1-100).");
	}
});

createGrid(gridSize);
