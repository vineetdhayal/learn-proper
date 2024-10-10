const form = document.createElement('form');
const input = document.createElement('input');
const btn = document.createElement('button');
const list = document.createElement('ul');
btn.textContent = 'Add';
form.append(input, btn);
document.body.append(form, list);

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log({input});
    const listt = document.createElement('li');
    listt.innerText = input.value;
    listt.addEventListener('click', () => {
        listt.remove();
    })
    list.append(listt);
    // list.innerHTML += `<li>${input.value}</li>`
    input.value = '';
})
