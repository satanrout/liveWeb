const inputs = document.querySelectorAll('.controlls input');


function inputUpdate() {
  const value = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + value);
  // console.log(this.value);
  // console.log(this.name);
}

inputs.forEach(input => input.addEventListener('input', inputUpdate));