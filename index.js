const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
// const Orders = [
//   {
//     productName: "Foldable Mini Drone",
//     paymentStatus: "Due",
//     shipping: "Pending",
//     productNumber: 85631,
//   },
//   {
//     productName: "LARVENDER KF102 Drone",
//     paymentStatus: "Refunded",
//     shipping: "Declined",
//     productNumber: 36378,
//   },
//   {
//     productName: "Ruko F11 Pro Drone",
//     paymentStatus: "Refunded",
//     shipping: "Declined",
//     productNumber: 47347,
//   },
//   {
//     productName: "Drone with Camera Drone",
//     paymentStatus: "Paid",
//     shipping: "Delivered",
//     productNumber: 96996,
//   },
//   {
//     productName: "GPS 4K Drone",
//     paymentStatus: "Paid",
//     shipping: "Delivered",
//     productNumber: 22821,
//   },
// ];

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

debugger;
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${
      order.shipping === "Declined"
        ? "danger"
        : order.shipping === "pending"
        ? "warning"
        : "primary"
    }>${order.shipping}</td>
    <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
