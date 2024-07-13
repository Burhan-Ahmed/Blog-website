function pushed() {
  const total = 1100;
  const name = document.getElementById("stdnam").value;
  const matric = document.getElementById("MM").value;
  const rollnum = document.getElementById("roll").value;
  const Fsc = document.getElementById("FM").value;
  const entry = document.getElementById("EM").value;

  var percent20 = (((20 / 100) * matric) / total) * 100;
  var percent30 = (((30 / 100) * Fsc) / total) * 100;
  var percent50 = (50 / 100) * entry;

  const Aggre = percent20 + percent30 + percent50;

  let nam = JSON.parse(localStorage.getItem("Stdname")) || [];
  let rollnums = JSON.parse(localStorage.getItem("RollNum")) || [];
  let aggs = JSON.parse(localStorage.getItem("Agg")) || [];

  nam.push(name)
  rollnums.push(rollnum)
  aggs.push(Aggre)

  // Store arrays back to localStorage
  localStorage.setItem("Stdname", JSON.stringify(nam));
  localStorage.setItem("Agg", JSON.stringify(aggs));
  localStorage.setItem("RollNum", JSON.stringify(rollnums));


  if (Aggre > 60) {
    alert("You are Eligible for Admission");
  } else {
    alert("You are not Eligible for Admission");
  }
}
