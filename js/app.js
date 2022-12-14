var open = document.querySelector('#open')
var close = document.querySelector('#close')
var nav = document.querySelector('nav')

open.addEventListener('click', function(){
    nav.classList.toggle('open')
})
close.addEventListener('click', function(){
    nav.classList.toggle('open')
})


var down = document.querySelector('.down')
var drop = document.querySelector('.drop')
var content = document.querySelector('.content')


drop.addEventListener('click', function(){
    down.classList.toggle('up')
    content.classList.toggle('activ')
    
})


var company = document.querySelector('.company')
var dropCompany = document.querySelector('.drop-company')
var contentCompany= document.querySelector('.content-company')

dropCompany.addEventListener('click', function(){
    company.classList.toggle('up')
    contentCompany.classList.toggle('activ')
    
})