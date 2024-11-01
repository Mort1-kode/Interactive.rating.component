let selectedOption = null;
let selectedButton = null;

const buttons = document.querySelectorAll(`.buttons`);

buttons.forEach((button) => {
  button.addEventListener(`click`, function () {
    button.classList.add(`clicked`);
    if (selectedButton) {
      selectedButton.style.backgroundColor = "white";
      selectedButton.style.color = "black";
    }
    button.style.backgroundColor = "orange";
    button.style.color = "black";

    selectedOption = button.dataset.value;
    selectedButton = button;
  });
});

const submitButton = document.querySelector(`.submitbutton`);

submitButton.addEventListener(`click`, function () {
  submitButton.classList.add("clicked");
  if (selectedOption !== null) {
    document.getElementById("selected-rating").textContent = selectedOption;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
  } else {
    alert("Please select an option before submitting.");
  }
});
