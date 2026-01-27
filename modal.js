const btnabrirModal =
document.querySelector("#abrirModal");
const btncerrar =
document.querySelector("#cerrar");
const modal =
document.querySelector("#modal");

btnabrirModal.addEventListener('click', ()=>{
	modal.showModal();
})
	
cerrar.addEventListener('click', ()=>{
	modal.close();
	})