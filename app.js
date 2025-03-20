const inputF = document.getElementById('inputF');
const inputimg = document.getElementById('inputimg');
const valid = document.getElementById('valid');
const btn = document.getElementById('btn');


inputF.addEventListener('input', () => {
    if (inputF.value.trim() !== "") {
      inputimg.style.display = 'block';
      valid.style.display = 'block';
       inputF.style.border = '1px solid red'
    } else {
      inputimg.style.display = 'none';
      valid.style.display = 'none';
    }


})

btn.addEventListener('click', () => {
    inputF.value = ""; 
})