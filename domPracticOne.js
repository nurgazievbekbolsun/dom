// Array.from() --> massivke ailandyruu
// const task = document.querySelectorAll('.nav__link')
 // console.log(Array.from(task1))

//Task 1 Напишите функцию, которая вернет текст внутри первого тэга - a.
//
// const task1 = document.querySelector('.zero')
// console.log(task1.innerText= '<h1>zero</h1>')
// task1.textContent = '<h1>zero</h1>'
// task1.innerHTML = '<h1>zero</h1>'

//  Task 2 Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// const task2 = document.querySelectorAll(".nav__link")
// console.log(Array.from(task2).map(el => el.innerHTML))

// Task 3 Напишите функцию, которая вернет массив с текстами внутри тэгов
// элементов с классом navlinkitem

// const task3 = document.querySelectorAll('.navlinkitem')
// console.log(Array.from(task3).map(el => el.innerHTML))

// Task 4 Напишите функцию, которая вернет массив со значениями атрибута
// class внутри тэгов элементов с классом navlinkitem
// const task4 = document.querySelectorAll("a")
// console.log(Array.from(task4).map(el => {
//     return el.getAttribute("class")
// }))

// // Task 5 Напишите функцию, которая вернет массив со значениями атрибута
// data-link внутри тэгов элементов с классом nav__link .

// const task5 = document.querySelectorAll('.nav__link')
// console.log(Array.from(task5).map(el => {
//     // return el.setAttribute('id','4')
//     return el.getAttribute('data-link')
// }))

// Task 6 Вы пишете робота, который проверяет, что страница отображается
// корректно, по правилам внутри элемента с классом nav__link должен быть
// текст порядкового номера индекса. И у этого же элемента должен быть
// класс с текстовым номером индекса.
// Например
// <a class="nav__link  first" data-link="1">first</a>
// Но база данных была повреждена и по ошибке некоторые элементы стали
// отображаться с некорректно.
// <a class="nav__link  zero" data-link="0">first</a>
// Ваша задача вернуть массив атрибутов data-link у элементов, у которых
// сломана логика. То есть текст внутри не имеет соответствующего класса.
//Используйте map для обхода массива. Иными словами элемент считается
//сломанным если в классах не содержится текста элемента.

// const talk = document.querySelectorAll('.top-nav a')
// console.log(Array.from(talk).filter(el => {
//     return el.classList[1] !== el.innerHTML
// }))

// const task = document.querySelectorAll('.top-nav a')
// console.log(Array.from(task).map(el => {
    // return el.className
    // return el.classList
// }))


// Task 7 Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a>
// Стало
// <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>
// <a href="#" class="nav__link first" data-link="1">five</a>
// Стало
// <a href=/"#" class="nav__link first" data-link="1">1 first</a>
// То есть ${data-link
// Используйте forEach
// yourElementsArray.forEach((element) => {
// })

// const talk = document.querySelectorAll('.top-nav a')
// talk.forEach((el,idx)=>{
//     el = `<a href="#" class="${el.getAttribute('class')}" data-link="${idx}">${el.classList[1]}</a>`
//     console.log(el)
// })

//Task 8 Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице.
// Для удаления используйте forEach.
//     Что бы удалить элемент из DOM - используйте метод .remove()

// const task8 = document.querySelectorAll('.nav__link')
// task8.forEach((el,idx)=>{
//     if (el.classList[1] !== el.innerHTML){
//         return el.remove()
//     }
// })

// let arr = document.querySelectorAll('.nav__link')
// arr.forEach((el,idx)=>{
//     if (el.classList[1] !== el.innerText){
//         return el.remove()
//     }
// })




