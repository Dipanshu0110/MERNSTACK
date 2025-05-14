function generateIDCard(){
    const name=document.getElementById("in1").value
    
    const address=document.getElementById("in2").value
    const course=document.getElementById("in3").value
    const blood=document.getElementById("b2").value
    const contact=document.getElementById("c1").value

    let gender="";
    if(document.getElementById("rd1").checked){
        gender=document.getElementById("rd1").value;
    }
    else if(document.getElementById("rd2").checked)
            gender=document.getElementById("rd2").value;

    document.getElementById("nameDisplay").textContent="Name: " +name;
    
    document.getElementById("addressDisplay").textContent="Address: " +address;
    
    document.getElementById("courseDisplay").textContent="Course: " +course;
    
    document.getElementById("genderDisplay").textContent="Gender: " +gender;
    
    document.getElementById("bloodDisplay").textContent="Blood: " +blood;
    
    document.getElementById("contactDisplay").textContent="Contact: " +contact;

    document.getElementById("idCard").style.display ="block";
}