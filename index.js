document.addEventListener("DOMContentLoaded", function () {
  var resultContainer = document.createElement("div");
  resultContainer.style.border = "1px solid black";
  resultContainer.style.padding = "10px";

  var nameInput = document.getElementById("name");
  var ageInput = document.getElementById("age");
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");
  var male = document.getElementById("m");
  var female = document.getElementById("f");
  var form = document.getElementById("form");

  function validateForm() {
    if (  
      nameInput.value == "" ||
      ageInput.value == "" || 
      height.value == "" || 
      weight.value == "" || 
      (male.checked == false && female.checked == false) 
      ) { 
      alert("All fields are required!");                           document .getElementById("submit") .removeEventListener("click", countBmi); 
          } else { 
            countBmi(); } } document.getElementById("submit").addEventListener("click", validateForm);

  function countBmi() {
    var p = [nameInput.value, ageInput.value, height.value, weight.value];
    if (male.checked) {
      p.push("male");
    } else if (female.checked) {
      p.push("female");
    }
    form.reset();
    var bmi = Number(p[3]) / ((Number(p[2]) / 100) * (Number(p[2]) / 100));
    var result = "";
    var image = "";

    if (bmi < 18.5) {
      result = "KEKURANGAN BERAT BADAN";
      image = "1.png";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = "IDEAL";
      image = "2.png";
    } else if (25 <= bmi && bmi <= 29.9) {
      result = "KELEBIHAN BERAT BADAN";
      image = "3.png";
    } else if (30 <= bmi && bmi <= 34.9) {
      result = "OBESITAS";
      image = "4.png";
    } else if (35 <= bmi) {
      result = "OBESITAS EKSTRIM";
      image = "5.png";
    }

    var h5 = document.createElement("h5");
    var h2 = document.createElement("h2");

    var imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.style.width = "125px";
    imgElement.style.height = "300px";
    imgElement.style.display = "block";
    imgElement.style.margin = "auto";

    var nameText = document.createElement("h3");
    nameText.style.fontFamily = "inherit";
    nameText.appendChild(document.createTextNode("Nama: " + p[0]));

    var ageText = document.createElement("h3");
    ageText.style.fontFamily = "inherit";
    ageText.appendChild(
      document.createTextNode("Usia: " + p[1] + " Tahun")
    );

    var genderText = document.createElement("h3");
    genderText.style.fontFamily = "inherit";
    genderText.appendChild(
      document.createTextNode(
        "Jenis Kelamin: " + (p[4] === "male" ? "Laki-laki" : "Perempuan")
      )
    );

    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));

    h5.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);

    resultContainer.innerHTML = "";
    resultContainer.appendChild(nameText);
    resultContainer.appendChild(ageText);
    resultContainer.appendChild(genderText);
    resultContainer.appendChild(imgElement);
    resultContainer.appendChild(h5);
    resultContainer.appendChild(h2);

    var borderElement = document.getElementById("myDiv");
    borderElement.style.border = "10px solid #346888";
    borderElement.style.marginTop = "-20px";
    borderElement.style.margin = "10px";
    borderElement.innerHTML = "";
    borderElement.appendChild(resultContainer);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });
});
    
