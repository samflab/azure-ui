const slider = document.querySelector(".slider");
const output = document.querySelector(".slider-output");

output.innerHTML = `Value: ${slider.value}`;

slider.addEventListener("input", ()=>{
output.innerHTML = `Value: ${slider.value}`;
console.log(slider.value)

})