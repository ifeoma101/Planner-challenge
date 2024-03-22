function saveTimeblock(event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.previousElementSibling.value);
  let plannerObj = {
    time: event.target.getAttribute("id"),
    text: event.target.previousElementSibling.value,
  };

  // Google JSON.stringify and JSON.parse()
  // Creatng a key name and giving it a value and storing it in local storage
  localStorage.setItem(plannerObj.time, plannerObj.text);
  // accessing value by using the key name
  //const name = localStorage.getItem(plannerObj.time)
  console.log(plannerObj);
}
$(document).ready(function () {
  $(".text-area").each(function () {
    let dataValue = $(this).data("hour");
    console.log(dataValue);
    let localValue = localStorage.getItem(dataValue);
    $(this).val(localValue);
    let currentHour = dayjs().hour();
console.log(currentHour);
    $("#currentDay").text(dayjs().format("dd-MM-YYYY"));
    if (dataValue < currentHour) {
      $(this).addClass("past");
    } else if (dataValue > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
});
