

let stdnam = JSON.parse(localStorage.getItem("Stdname"));
let stdagg = JSON.parse(localStorage.getItem("Agg"));
let stdroll = JSON.parse(localStorage.getItem("RollNum"));

let stdlist = document.getElementById("stdList");

stdnam.forEach((name, index) => {
    let eachAgg = stdagg[index]
    let eachRoll = stdroll[index]

    const std =
        `
        <div class="flex justify-center gap-10 border-b mb-5">
            <div>
                <h1 class=" font-bold"> Student Name</h1>
                <p  class=" mt-5 text-green-500">${name}</p>
            </div>
            <div>
                <h1 class=" font-bold">Aggregate</h1>
                <p class=" mt-5 text-green-500">${eachAgg}</p>
            </div>
            <div>
                <h1 class=" font-bold">Roll Number</h1>
                <p class=" mt-5 text-green-500"> ${eachRoll}</p>
           </div>
        </div>
    `;
    stdlist.innerHTML += std;
});

document.getElementById("namelist").textContent = stdnam;
document.getElementById("rolllist").textContent = stdroll;
document.getElementById("Agglist").textContent = stdagg; 