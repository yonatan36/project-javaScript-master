const toast = document.getElementById("toast")
let id = 1; 
const showToast = (msg , success = true) =>{
    let thisid = id++
toast.innerHTML += `<div id = "toastMsg-${thisid}" class = "${
  success ? "success" : "error"
}">${msg}
<div class = "toast-timer"></div>
</div>`;
setTimeout(()=>{
document.getElementById(`toastMsg-${thisid}`).remove();
},3000)
}


export default showToast;