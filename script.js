const COLORS = ["crimson", "royalblue", "seagreen", "goldenrod", "hotpink", "turquoise"];
const gameEl = document.getElementById("game");

const title = document.querySelector("h1");
const msg = document.createElement("div");
msg.className = "msg";
document.body.querySelector("main")?.append(msg) || document.body.appendChild(msg);

const againBtn = document.createElement("button");
againBtn.className = "btn";
againBtn.textContent = "Nuova sfida";
againBtn.style.display = "none";
againBtn.onclick = () => start();
(document.body.querySelector("main") || document.body).appendChild(againBtn);

let targetColor = null;

function start(){
  gameEl.innerHTML = "";
  msg.className = "msg";
  againBtn.style.display = "none";

  const pool = shuffle([...COLORS]).slice(0,3);
  targetColor = pool[Math.floor(Math.random()*pool.length)];

  title.textContent = "Trova il colore: " + targetColor;
  msg.textContent = "Clicca il riquadro con il colore richiesto.";

  pool.forEach(c=>{
    const sq = document.createElement("div");
    sq.className = "square";
    sq.style.background = c;
    sq.onclick = ()=> check(c);
    gameEl.appendChild(sq);
  });
}

function check(chosen){
  if(chosen === targetColor){
    msg.textContent = "🎉 Hai vinto! Codice sconto: CREA10";
    msg.className = "msg ok";
  }else{
    msg.textContent = "❌ Non è questo. Riprova.";
    msg.className = "msg err";
  }
  againBtn.style.display = "inline-block";
}

function shuffle(a){
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

start();
