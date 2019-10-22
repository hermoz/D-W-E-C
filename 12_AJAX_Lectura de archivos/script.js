const imagen = document.getElementById("imagen");
const pdf= document.getElementById("pdf");

imagen.addEventListener('click',()=>{
    fetch('imagen.png')
        .then(res => res.blob())
        .then(img => {
            document.getElementById('miImagen').src = URL.createObjectURL(img)
        })      
});



pdf.addEventListener('click', () => {
    fetch('mipdf.pdf')
        .then(res => res.blob())
        .then(pdf => {
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })
})
