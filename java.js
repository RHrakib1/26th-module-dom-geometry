function calculationBtn() {
    // get base
    const inputStorFirst = document.getElementById("firstInput");
    const storageFirst = inputStorFirst.value;
    const base = parseFloat(storageFirst)
    // console.log(base);

    // get hight
    const traiangleInput = document.getElementById('srcondInput');
    const traianglrHight = traiangleInput.value;
    const hight = parseFloat(traianglrHight)
    // console.log(hight);
    // area
    const area = 0.5 * base * hight;
    console.log(area);


    // add
    const newText = document.getElementById('newTextAdd');
    newText.innerText = area;
    const areaResult = document.getElementById('reult');
    areaResult.innerText = area;
}


// recangle
function recangleBtn() {
    // recangl first form
    const inputFirst1 = document.getElementById('rectangleFirstForm');
    const storage2 = inputFirst1.value;
    const weight = parseFloat(storage2);
    // console.log(weight);
    // recangle second 
    const inputSecond1 = document.getElementById('rectangleSecondForm');
    const storageSecond2 = inputSecond1.value;
    const lenght = parseFloat(storageSecond2);
    // console.log(lenght);

    // area
    const recangleArea = weight * lenght;
    console.log(recangleArea);


    // add 
    const add = document.getElementById('newTextAdd1');
    add.innerText = recangleArea;


    // main add 
    const mainArea = document.getElementById('lastAdd');
    mainArea.innerText = recangleArea;


}


// rhombus
function rhombusBtn() {
    // first form
    const getRhombusInput = document.getElementById('rhombusFirst');
    const importRhombus = getRhombusInput.value;
    const rhombusFlot = parseFloat(importRhombus);
    console.log(rhombusFlot);

    // second form
    const getRhombusInput2 = document.getElementById('rhombusSecond');
    const importRhombus2 = getRhombusInput2.value;
    const rhombusFlot2 = parseFloat(importRhombus2);
    console.log(rhombusFlot2);

    // formula for the rhombus
    const rhombusArea = 0.5 * rhombusFlot * rhombusFlot2;
    console.log(rhombusArea);
}


