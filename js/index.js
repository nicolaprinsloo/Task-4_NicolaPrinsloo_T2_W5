let allVehicles = [];

addVehicle = () => {
    let type =  document.getElementById("type").value
    let make =  document.getElementById("make").value
    let model =  document.getElementById("model").value
    let number =  +document.getElementById("number").value
    let condition =  document.getElementById("condition").value

    console.log(allVehicles)

    document.getElementById("vehicleForm").requestFullscreen();

}

let vehicleLog = [];

logVehicle = () =>{

    //type
    let type = document.getElementById("type").value;
    //make
    let make = document.getElementById("make").value;
    //model
    let model = document.getElementById("model").value;
    //registration number
    let number = document.getElementById("number").value;
    //condition of vehicle
    let condition = document.getElementById("condition").value;

    vehicleLog.push({
       type: type;
       make: make;
       model: model;
       number: number;
       condition: condition
    })

    console.log(allVehicles);

    document.getElementById("vehicleForm").reset();
}