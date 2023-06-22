// dom - document ofject model
// const tect = document.getelementbyid('title')
// const tect = document.getelementsbyclassname('title')
// console.log(text)
// console.log(text1[0].innerHTML)
// console.log(text1[0])
// console.log(text1[0].textcontent)
// const text = document.getElementsByTagName('p')
// queryselector()
// queryselectorall()
//
const h12 = document.querySelector('#h11')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const divv = document.querySelector('#div1')
const body = document.querySelector('body')
const intt = document.getElementsByClassName('int')
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh';
body.style.fontFamily = 'sans serif';

h12.style.color = 'blue';
h12.style.fontWeight = '900';
h12.style.padding = '15px 0 20px 0 ';

const text = 'hello'
const utterance = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(utterance)

btn1.style.padding = '10px 40px';
btn1.style.borderRadius = '18px';
btn1.style.margin = '40px 0 0 0';
btn1.style.fontSize = '18px';
btn1.style.background = 'blue';
btn1.style.border = 'none';
btn1.style.color = 'white';

btn2.style.borderRadius = '18px';
btn2.style.padding = '10px 40px';
btn2.style.margin = '40px 0 0 0';
btn2.style.fontSize = '18px';
btn2.style.border = 'none';
btn2.style.color = 'blue';

divv.style.display ;
divv.style.flex;
divv.style.width = ' 350px';
divv.style.justifyContent = 'center ';
divv.style.background = 'white  ';
divv.style.height = '400px';
divv.style.borderRadius = '10px';
divv.style.textAlign = 'center';
//
intt[0].style.border = 'none';
intt[0].style.borderBottom = '2px solid black';
intt[0].style.padding = '15px 35px 2px 6px';
intt[0].style.margin = '7px';
intt[0].style.fontSize = '18px';
intt[0].style.outline = 'none';
intt[0].style.background = 'none';

intt[1].style.border = 'none';
intt[1].style.background = 'none';
intt[1].style.borderBottom = '2px solid black';
intt[1].style.padding = '15px 40px 2px 6px';
intt[1].style.margin = '7px';
intt[1].style.fontSize = '18px';
intt[1].style.outline = 'none';

intt[2].style.border = 'none';
intt[2].style.background = 'none';
intt[2].style.borderBottom = '2px solid black';
intt[2].style.padding = '15px 40px 2px 6px';
intt[2].style.margin = '7px';
intt[2].style.fontSize = '18px';
intt[2].style.outline = 'none';

let oncc = document.querySelector('#onc')
oncc.style.padding = '10px 30px '
oncc.style.background = 'yellow'
oncc.style.border = 'none'

function myFunction() {
    let arr = document.querySelectorAll("body");
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.background = "green";
    }
}
