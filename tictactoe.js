(function() {
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  const box4 = document.getElementById("box4");
  const box5 = document.getElementById("box5");
  const box6 = document.getElementById("box6");
  const box7 = document.getElementById("box7");
  const box8 = document.getElementById("box8");
  const box9 = document.getElementById("box9");
  let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  document.getElementById("vitoria").firstElementChild.querySelector("button").addEventListener("click", function() {
    window.location.reload()
  })

  let cont = 1;
  let x = [];
  let o = [];

  function criaXis() {
    let xir = document.createElement("p");
    xir.classList = "elementoResposta"
    xir.textContent = "X"
    return xir;
  }
  function criaBolinha() {
    let bolinhas = document.createElement("p");
    bolinhas.classList = "elementoResposta"
    bolinhas.textContent = "O"
    bolinhas.style.color = "red"
    return bolinhas;
  }
  let valorPlayer = criaXis();

  function verificaVitoria() {
    const vitorias = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];

    for (let i = 0; i < vitorias.length; i++) {
      let vitoria = vitorias[i];
      const containVictoryX = vitoria.every(element => {
        return x.includes(element);
      });
      const containVictoryO = vitoria.every(element => {
        return o.includes(element);
      });
      if (containVictoryX || containVictoryO) {
        document.getElementById("vitoria").style.display = "flex";
      }
    }

    if (cont == 10) {
      document.getElementById("vitoria").style.display = "flex";
    }

    console.log(x, o, cont);
  }

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function(e) {
      this.innerHTML == `<p class="elementoResposta">X</p>` || this.innerHTML == `<p class="elementoResposta" style="color: red;">O</p>` 
        ? console.log("Já tem um item aí")
        : this.appendChild(valorPlayer) && cont++;
      this.innerHTML == `<p class="elementoResposta">X</p>` ? x.push(i + 1) : o.push(i + 1);
      cont % 2 == 0 ? (valorPlayer = criaBolinha()) : (valorPlayer = criaXis());
      console.log(valorPlayer)
      verificaVitoria();
    });
  }
})();
