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

function addCard(e) {
  e.preventDefault();
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardContainer.appendChild(cardDiv);
  const nameinfo = document.createElement("p");
  cardDiv.appendChild(nameinfo);
  nameinfo.innerText = fname.value + " " + lname.value;
  fname.value = "";
  lname.value = "";
  const rollinfo = document.createElement("p");
  cardDiv.appendChild(rollinfo);
  rollinfo.innerText = roll.value;
  roll.value = "";
  const genderinfo = document.createElement("p");
  cardDiv.appendChild(genderinfo);
  genderinfo.innerText = gender.value;
  gender.value = "";
  const bloodinfo = document.createElement("p");
  cardDiv.appendChild(bloodinfo);
  bloodinfo.innerText = blood.value;
  blood.value = "";
  const contactinfo = document.createElement("p");
  cardDiv.appendChild(contactinfo);
  contactinfo.innerText = contact.value;
  contact.value = "";
  const addressinfo = document.createElement("p");
  cardDiv.appendChild(addressinfo);
  addressinfo.innerText = address.value;
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
