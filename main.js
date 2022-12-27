let timeNow = new Date();

let c=parseInt(prompt("enter value"));
let ansi=timeNow.setTime(c);

if(ansi>=5&&ansi<=12){
    console.log("morning");
}
else if(ansi>=12&&ansi<=16){
    console.log("afternoon");
}
else{
    console.log("night");
}
