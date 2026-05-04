

// 2-d array of problems for tabl

let arrProblems = [
    ["Crowdstrike", 2024, "$5.4B", "Faulty security software update"],
    ["Facebook", 2020, "$90M", "misconfigureation that resulted in downtime"],
    ["Citibank", 2020, "$900M", "Mistaken transfer"],
    ["Mars Climate Orbiter", 1999, "$327M", "Metric and imperial measurments mismatch"]
];


for (let i=0; i<arrProblems.length; i++){
    // create new table row - tr tag
    let tr = document.createElement("tr");

    //inner/nested loop - j for counter in nested loops
    for (let j=0; j < arrProblems[i].length; j++){
        //create a new table data  td tag
        let td = document.createElement("td");

        //set data as text conted calue
        td.textContent = arrProblems[i][j];

        // add the td to the tr
        tr.appendChild(td);
    }


    // add table row to table
    document.getElementById("tblData").appendChild(tr);

}