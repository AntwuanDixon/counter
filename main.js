let input = document.getElementById('num-input');
let btn = document.querySelector('#increment-btn');
input.value = 0;

btn.addEventListener('click', () => {
increment(input)
});

function increment(input) {
return input.value++;
}