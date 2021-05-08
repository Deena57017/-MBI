

function calculateBMI(weight,height) {
    let weight = prompt("input Weight");
    let height = prompt("input Height");
    
    let bmi = '';
    let bmi = weight / ((height / 100) * (height / 100))
    document.getElementById("answer-section").innerHTML=bmi.tofixed(2);
    if (bmi < 18.50) {
        console.log("BIM :" + bmi + " = " + "น้ำหนักน้อย")
        return "BIM :" + bmi + " = " + "น้ำหนักน้อย"
    }
    else if ((bmi < 18.50) || (bmi < 22.90)) {
        console.log("BIM :" + bmi + " = " + "ปกติ(สุขภาพดี)")
        return "BIM :" + bmi + " = " + "ปกติ(สุขภาพดี)"
    }
    else if ((bmi < 23) || (bmi < 24.90)) {
        console.log("BIM :" + bmi + " = " + "ท้วม")
        return "BIM :" + bmi + " = " + "ท้วม"
    }
    else if ((bmi < 23) || (bmi < 24.90)) {
        console.log("BIM :" + bmi + " = " + "อ้วน")
        return "BIM :" + bmi + " = " + "อ้วน"
    }
    else if ((bmi < 23) || (bmi < 24.90)) {
        console.log("BIM :" + bmi + " = " + "อ้วนมาก")
        return "BIM :" + bmi + " = " + "อ้วนมาก"
    }
    
}









