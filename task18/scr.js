
function f(){
    var num = document.querySelector('input').value;
    document.getElementById('p3').innerHTML=fact(num); 

}
function fact(num){
    if (num==0)
    { return 1;
    }
    else
    return num*fact(num-1);
}
// $(document).ready(function(){
    // })
    // $("#btn1").click()

//     //closure function

//     function sum(){
//         let c=0;
//         return c=c+1
//     }
//     sum();
