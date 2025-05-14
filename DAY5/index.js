// function fun(){
//     var h=window.innerHeight;
//     var w=window.innerWidth;
   
//    let b=document.getElementById("dk")
//    document.inn
//    b.innerHTML=`height of window=${h} and width=${w}`;
// }

//for open new site or window

let newWindow;

function openWindow() {
    
    newWindow = window.open("https://abes.ac.in", "_blank", "width=800,height=600");
}

function closeWindow() {
    
    // if (newWindow && !newWindow.closed) {
        newWindow.close();
    // } else {
    //     alert("The window is already closed or not opened yet.");
    // }
}
