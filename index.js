let numbers = document.getElementsByClassName("number")
let buttonSubmit = document.getElementsByClassName("btn")
let mainState = document.getElementById("ratingState")
let secondState = document.getElementById("thankYouPage")
let numSelected = document.getElementById("selected")

console.log(numSelected.innerHTML)

for (let i = 0; i < numbers.length; i++) {
    const e = numbers[i];
    let nums = e.innerHTML
    e.addEventListener("click", (num)=>{
        console.log(`Clicked ${nums}`)
        numSelected.innerHTML = nums
        e.classList.toggle('buttonActive')
        console.log(num)
    })
}

Array.from(buttonSubmit).forEach((btnClick) => {
    btnClick.addEventListener("click", ()=> {
        // const isInactive = secondState.style.display === "inactive"
        if(secondState.classList.value === 'inactive'){
            mainState.classList.add("inactive")
            secondState.classList.remove('inactive')
            console.log(numSelected)
        }else{
            console.log("not working")
        }
        console.log("BTN Clicked")
    })
})
