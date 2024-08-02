let toastBox = document.getElementById('ToastBox');

let successMsg = ' <i class="fa-solid fa-circle-check"></i> Successfully Submited';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Fix The Error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input , Check again';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast)

    if (msg.includes('Error')) {
        toast.classList.add('error')
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid')
    }

    setTimeout(() => {
        toast.remove()
    }, 5000)
}
