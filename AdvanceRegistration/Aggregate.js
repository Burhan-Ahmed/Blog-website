function pushed() {
  const total = 1100;
  const matric = document.getElementById("MM").value;
  const Fsc = document.getElementById("FM").value;
  const entry = document.getElementById("EM").value;

  var percent20 = (((20 / 100) * matric) / total) * 100;
  var percent30 = (((30 / 100) * Fsc) / total) * 100;
  var percent50 = (50 / 100) * entry;

  const agg = percent20 + percent30 + percent50;

  if (agg > 50) {
    alert("You are Eligible for Admission");
  } else {
    alert("You are not Eligible for Admission");
  }
}
