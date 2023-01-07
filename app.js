const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const roll = document.querySelector(".roll");
const gender = document.querySelector(".gender");
const blood = document.querySelector(".blood");
const contact = document.querySelector(".contact");
const address = document.querySelector(".address");
const submitBtn = document.querySelector(".submitBtn");
const cardContainer = document.querySelector(".card-container");

submitBtn.addEventListener("click", addCard);
document.addEventListener("DOMContentLoaded", getform);

function addCard(e) {
  e.preventDefault();
  // const cardDiv = document.createElement("div");
  // cardDiv.classList.add("card");
  // cardContainer.appendChild(cardDiv);
  // const nameinfo = document.createElement("p");
  // cardDiv.appendChild(nameinfo);
  // nameinfo.innerText = fname.value + " " + lname.value;

  // const rollinfo = document.createElement("p");
  // cardDiv.appendChild(rollinfo);
  // rollinfo.innerText = roll.value;

  // const genderinfo = document.createElement("p");
  // cardDiv.appendChild(genderinfo);
  // genderinfo.innerText = gender.value;

  // const bloodinfo = document.createElement("p");
  // cardDiv.appendChild(bloodinfo);
  // bloodinfo.innerText = blood.value;

  // const contactinfo = document.createElement("p");
  // cardDiv.appendChild(contactinfo);
  // contactinfo.innerText = contact.value;

  // const addressinfo = document.createElement("p");
  // cardDiv.appendChild(addressinfo);
  // addressinfo.innerText = address.value;

  const data = {
    fname: fname.value,
    lname: lname.value,
    roll: roll.value,
    gender: gender.value,
    blood: blood.value,
    contact: contact.value,
    address: address.value,
  };
  saveform(data);

  fname.value = "";
  lname.value = "";
  roll.value = "";
  gender.value = "";
  blood.value = "";
  contact.value = "";
  address.value = "";
  //   if (
  //     (fname.value ||
  //       lname.value ||
  //       roll.value ||
  //       gender.value ||
  //       blood.value ||
  //       contact.value ||
  //       address.value) == ""
  //   ) {
  //     alert("Please fill the form completely");
  //   }
}

function saveform(form) {
  let formData;
  if (localStorage.getItem("formData") === null) {
    formData = [];
  } else {
    formData = JSON.parse(localStorage.getItem("formData"));
  }
  formData.push(form);
  localStorage.setItem("formData", JSON.stringify(formData));
  cardContainer.innerHTML = "";
  getform();
}

function getform() {
  let formData;
  if (localStorage.getItem("formData") === null) {
    formData = [];
  } else {
    formData = JSON.parse(localStorage.getItem("formData"));
    console.log(formData);
  }
  formData.forEach((e) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardContainer.appendChild(cardDiv);
    const nameinfo = document.createElement("p");
    cardDiv.appendChild(nameinfo);
    nameinfo.innerText = e.fname + " " + e.lname;

    const rollinfo = document.createElement("p");
    cardDiv.appendChild(rollinfo);
    rollinfo.innerText = e.roll;

    const genderinfo = document.createElement("p");
    cardDiv.appendChild(genderinfo);
    genderinfo.innerText = e.gender;

    const bloodinfo = document.createElement("p");
    cardDiv.appendChild(bloodinfo);
    bloodinfo.innerText = e.blood;

    const contactinfo = document.createElement("p");
    cardDiv.appendChild(contactinfo);
    contactinfo.innerText = e.contact;

    const addressinfo = document.createElement("p");
    cardDiv.appendChild(addressinfo);
    addressinfo.innerText = e.address;
  });

  // formData.forEach((e) => {
  //   const nameinfo = document.createElement("p");
  //   cardDiv.appendChild(nameinfo);
  //   nameinfo.innerText = e;
  // });
  // formData.forEach((f) => {
  //   const rollinfo = document.createElement("p");
  //   cardDiv.appendChild(rollinfo);
  //   rollinfo.innerText = f;
  // });
  // formData.forEach((g) => {
  //   const genderinfo = document.createElement("p");
  //   cardDiv.appendChild(genderinfo);
  //   genderinfo.innerText = g;
  // });
  // formData.forEach((h) => {
  //   const bloodinfo = document.createElement("p");
  //   cardDiv.appendChild(bloodinfo);
  //   bloodinfo.innerText = h;
  // });
  // formData.forEach((i) => {
  //   const contactinfo = document.createElement("p");
  //   cardDiv.appendChild(contactinfo);
  //   contactinfo.innerText = i;
  // });
  // formData.forEach((j) => {
  //   const addressinfo = document.createElement("p");
  //   cardDiv.appendChild(addressinfo);
  //   addressinfo.innerText = j;
  // });
}
