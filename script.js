document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const toggleIcon = document.getElementById("toggleIcon");
  const moreContent = document.getElementById("moreContent");

  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      moreContent.hidden = true;
      moreContent.setAttribute("aria-hidden", "true");
      toggleButton.setAttribute("aria-expanded", "false");
      toggleIcon.textContent = "▼";
    } else {
      moreContent.hidden = false;
      moreContent.setAttribute("aria-hidden", "false");
      toggleButton.setAttribute("aria-expanded", "true");
      toggleIcon.textContent = "▲";
      moreContent.focus();
    }
  });
});
