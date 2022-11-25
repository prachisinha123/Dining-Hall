let ctr=1
function bulbOn(){
    ctr++;
    let bulbobj = document.getElementById("b1")
    let caption = document.getElementById("caption")
    let box = document.getElementById("box1")
    if(ctr%2==0){
        bulbobj.src="bulbon.jpg"
        caption.innerHTML="ON"
       box.style.border = "2px solid rgb(200, 159, 26)"
    }
    else{
        bulbobj.src="bulboff.jpg"
        caption.innerHTML="OFF"
        box.style.border = "2px solid rgb(112, 108, 108)"
    }
    
}  
let ctr1 = 1
function bulbOn1(){
    ctr1++;
    let bulbobj = document.getElementById("b2")
    let caption = document.getElementById("caption2")
    let box = document.getElementById("box2")
    if(ctr1%2==0){
        bulbobj.src="bulbon.jpg"
        caption.innerHTML="ON"
        box.style.border = "2px solid rgb(200, 159, 26)"
        
    }
    else{
        bulbobj.src="bulboff.jpg"
        caption.innerHTML="OFF"
        box.style.border = "2px solid rgb(112, 108, 108)"
    
    }
}
// fetching api
// console.log('This is my Dining Hall');
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://misima2536.pythonanywhere.com/");
// // xhr.send();
// xhr.onload =()=>{
    
//     console.log(JSON.parse(xhr.response))
//  }

//  xhr.send();
function myAxios(method,url,body = null){
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.responseType = 'json';
    // xhr.setRequestHeader('Content-Type','application/json');

    xhr.onload = () => {
        if(xhr.ststus >=400){

        } else{
            console.log(xhr.response);

        }
    }
    xhr.oneeror = () =>{
        console.log('ERROR!!!!');
    }
    xhr.send(JSON.stringify(body));
}
    const url = 'https://misima2536.pythonanywhere.com/';
    myAxios('GET',url);

    myAxios('POST',url , {
        parentkey: 'app_1',
        name : 'Bulb 1',
        icon:'https://casaaltair.com/static/internship/bulb/0.svg',
        status : '0',
        
        
    });
   




