function result(){
    let score=0; 
if(document.getElementById('correct1').checked){
    score++; 
} 
if(document.getElementById('correct2').checked){
    score++; 
}  
if(document.getElementById('correct3').checked){
    score++; 
} 
if(document.getElementById('correct4').checked){
    score++; 
}
alert('نتيجتك هي :' +score);
} 
document.getElementById('myButton').onclick=function(){
    let MyName= document.getElementById('myText').value;
    let MyAge= document.getElementById('myText2').value; 
    console.log("hello", MyName);  
    alert(" يا اهلا بك في موقعنا")
} 
