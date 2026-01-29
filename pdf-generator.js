function exportPDF(){
  const board = document.getElementById("game-board");
  const clone = board.cloneNode(true);
  document.body.appendChild(clone);

  html2canvas(clone).then(canvas=>{
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 15, 15, 180, 0);
    pdf.save("board.pdf");
    document.body.removeChild(clone);
  });
}
