const buttons = document.querySelectorAll("button");
const screen = document.querySelector("input");

function onClick(event) {
  var buttonClick = event.target;
  var valueButton = buttonClick.textContent;

  switch (valueButton) {
    case "=":
      try {
        var resultat = eval(screen.value);
        screen.value = resultat;
      } catch (error) {
        screen.value = "Erreur";
      }
      break;

    case "C":
      screen.value = "";
      break;

    default:
      screen.value += valueButton;
      break;
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", onClick);
});
