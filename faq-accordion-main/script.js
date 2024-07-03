const questions = document.querySelectorAll('.accordion');


questions.forEach(question=>{
    const button = question.querySelector('.question');
    const img = question.querySelector('.toggle-icon');
    const open = "../assets/images/icon-plus.svg"
    const close = "../assets/images/icon-minus.svg"

    button.addEventListener('click', ()=>{
        questions.forEach(item=>{
            if(item!==question){
                item.classList.remove("show");
                // item.querySelector('.toggle-icon').classList.remove('open');
                item.querySelector('.toggle-icon').src=open;
            }
        })
        question.classList.toggle("show");
        if(question.classList.contains("show")){
            img.src = close;
        }else{
            img.src = open;
        }
    })
})

































