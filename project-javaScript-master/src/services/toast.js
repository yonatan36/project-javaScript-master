const toast = document.getElementById("toast")
let id = 1; 
const showToast = (msg , success = true) =>{
toast.innerHTML += `<div id = "toastMsg-${id++}" class = "${success ? "success" :"error"}">${msg}</div>`;

}


export default showToast;