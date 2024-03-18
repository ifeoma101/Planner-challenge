function saveTimeblock(event) {
event.preventDefault()
console.log(event.target) 
console.log(event.target.previousElementSibling)
let plannerObj = {
time: event.target.getAttribute("id"),
text:event.target.previousElementSibling.innerText

}
console.log(plannerObj);
}

