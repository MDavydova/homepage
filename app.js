function initCopyContactLink() {
  // Get the text field
  const display = document.getElementById("contactDisplay");

  const contactLinks = document.querySelectorAll(".contact button");

  const hiddenInput = document.getElementById("contactDisplayInput");

  contactLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
      display.textContent = btn.dataset.value;
      hiddenInput.value = btn.dataset.value;
    });
  });

  display.addEventListener("click", () => {
    navigator.clipboard.writeText(hiddenInput.value).then(function (x) {
      alert("Link copied to clipboard: " + hiddenInput.value);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCopyContactLink();
});
