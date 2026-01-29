const dwSound = document.getElementById("dw-sound");
const dwPos   = document.getElementById("dw-pos");
const dwWord  = document.getElementById("dw-word");
const dwImage = document.getElementById("dw-image");
const dwList  = document.getElementById("dw-list");

if(!localStorage.wordBank) localStorage.wordBank = JSON.stringify({});
let wordBank = JSON.parse(localStorage.wordBank);

function displayList(){
  dwList.innerHTML="";
  Object.entries(wordBank).forEach(([k,list])=>{
    list.forEach((it,i)=>{
      const d=document.createElement("div");
      d.textContent=`${k} → ${it.word}`;
      dwList.appendChild(d);
    });
  });
}

document.getElementById("dw-add").addEventListener("click", ()=>{
  const s=dwSound.value.trim();
  const p=dwPos.value.trim();
  const w=dwWord.value.trim();
  const file=dwImage.files[0];
  if(!s||!p||!w||!file){alert("All fields required"); return;}

  const reader = new FileReader();
  reader.onload = ()=> {
    const key=`${s}-${p}`;
    if(!wordBank[key]) wordBank[key]=[];
    wordBank[key].push({word:w,img:reader.result});
    localStorage.wordBank = JSON.stringify(wordBank);
    displayList();
  };
  reader.readAsDataURL(file);
});

displayList();
