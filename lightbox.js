document.addEventListener("DOMContentLoaded", function () {
  var imgs = document.querySelectorAll(".figure img");
  if (!imgs.length || typeof HTMLDialogElement === "undefined") return;

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  var big = document.createElement("img");
  var caption = document.createElement("p");
  dialog.appendChild(big);
  dialog.appendChild(caption);
  document.body.appendChild(dialog);

  imgs.forEach(function (img) {
    img.addEventListener("click", function () {
      big.src = img.src;
      big.alt = img.alt;
      var cap = img.parentElement.querySelector("figcaption");
      caption.textContent = cap ? cap.textContent : "";
      caption.hidden = !cap;
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", function () { dialog.close(); });
});
