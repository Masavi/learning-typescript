const input1 = document.getElementById('first_number') ! as HTMLInputElement;
const input2 = document.getElementById('second_number') ! as HTMLInputElement;
const button = document.querySelector('button');

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", () => {
  console.log( add(+input1.value, +input2.value) );
})