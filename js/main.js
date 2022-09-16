let my_change_from = document.querySelector(".my_change_from")
let my_change_to = document.querySelector(".my_change_to")
let exchange_btn = document.querySelector(".exchange_btn")
let my_amount = document.querySelector(".my_amount")
let my_converter = document.querySelector(".my_converter")
let my_p = document.querySelector(".my_p")
let my_h = document.querySelector(".my_h")
let my_sec_p = document.querySelector(".my_sec_p")
////////////////////// api for currencies name and symbols
fetch('https://openexchangerates.org/api/currencies.json')
	.then((my_request1) => my_request1.json())
	.then((my_data1)=>{
    // console.log(my_data1);
    for(i in my_data1){
      // console.log(my_data1[i]);
      // console.log(i);
      my_change_from.innerHTML += `<option value=${i}>${i} - ${my_data1[i]}</option>`
      my_change_to.innerHTML += `<option value=${i}>${i} - ${my_data1[i]}</option>`
    }
  })
  // cinema API
fetch("https://v6.exchangerate-api.com/v6/757cd18149fce074c167dc9d/latest/USD")
.then((my_request)=> my_request.json())
.then((my_data)=>{
  // console.log(my_data);
  for(e in my_data.conversion_rates){
    // console.log(e);
    // console.log(my_data.conversion_rates[my_change_from.value]);
      my_converter.addEventListener("click",()=>{
    // console.log(typeof Number(my_amount.value));
    my_p.innerHTML = `${my_amount.value} ${my_change_from.value} =`
    my_h.innerHTML = `${((my_amount.value / my_data.conversion_rates[my_change_from.value]) * my_data.conversion_rates[my_change_to.value]).toFixed(3)} ${my_change_to.value}`
    //showing exchange rates for both currencies
    my_sec_p.innerHTML = `${my_change_from.value} = ${my_data.conversion_rates[my_change_from.value]} USD <br/>
     ${my_change_to.value} = ${my_data.conversion_rates[my_change_to.value]} USD`
  })
  }
})
  // exchange button function
  exchange_btn.addEventListener("click",()=>{
    let x = my_change_from.value
    let y = my_change_to.value
    my_change_from.value = y
    my_change_to.value = x
    // console.log(x,y);
  })
