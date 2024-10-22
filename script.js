const $ = document;
let list = $.querySelectorAll(".list")

function activation(elem){
    list.forEach((item)=>{
        item.classList.remove('active')
    })
    this.classList.add('active')
}

list.forEach((elem) => {
    elem.addEventListener('click' , activation)
})