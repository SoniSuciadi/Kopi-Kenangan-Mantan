let nama = document.getElementById("fnama");
let email = document.getElementById("femail");
let pesanan = document.getElementById("fpesanan");
let tablebody = document.getElementById("tableBody");
let order = [];

const retriveOrder = () => {
  order = [];
  let getOrder = localStorage.getItem("order");
  if (getOrder != null) {
    order = JSON.parse(getOrder);
  }
};
const submitOrder = () => {
  let orders = {
    nama: nama.value,
    email: email.value,
    pesanan: pesanan.value,
  };

  retriveOrder();

  order.push(orders);

  localStorage.setItem("order", JSON.stringify(order));
  location.reload();
};

const setTableBody = (item, index) => {
  tableBody.innerHTML += `
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>${item.email}</td>
            <td>${item.pesanan}</td>
           `;
};
const showTableBody = () => {
  retriveOrder();
  order.forEach(setTableBody);
};
