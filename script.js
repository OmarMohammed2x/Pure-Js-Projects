document.body.style.margin = "0";
const header = document.createElement("header");
document.body.prepend(header);
header.style.cssText =
  "max-width:100%;height:45px;display:flex;justify-content:space-between;align-items:center;padding:15px";
const navHeader = document.createElement("h2");
const navLinks = document.createElement("ul");
navHeader.style.cssText = "margin:0;color:hsl(154.41deg 68% 39.22%);";
navLinks.style.cssText =
  "list-style:none;display:flex;margin:0;padding:0;gap:15px";
navHeader.textContent = "Omar";
header.appendChild(navHeader);
header.appendChild(navLinks);
for (let i = 1; i < 5; i++) {
  const item = document.createElement("li");
  navLinks.appendChild(item);
  switch (i) {
    case 1:
      item.textContent = "Home";
      break;
    case 2:
      item.textContent = "About";
      break;
    case 3:
      item.textContent = "Services";
      break;
    case 4:
      item.textContent = "Contact";
      break;
  }
}
const container = document.createElement("div");
header.after(container);
container.style.cssText =
  "display:grid;max-width:100%;height:calc(100vh - 165px);background-color:#eee;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(5,1fr);gap:15px;padding:15px";
for (let counter = 1; counter <= 15; counter++) {
  const product = document.createElement("div");

  container.appendChild(product);
  product.style.cssText =
    "background-color:white;display:flex;align-items:center;justify-content:center;";
  product.innerHTML = `Product ${counter}`;
}
const footer = document.createElement("footer");
container.after(footer);
footer.style.cssText =
  "width:100%;height:60px;display:flex;align-items:center;justify-content:center;background-color:hsl(154.41deg 68% 39.22%);color:white;";
footer.innerHTML = "&copy; copyright 2024";
