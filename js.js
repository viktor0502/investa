const accord = document.querySelectorAll('.faq-accord-item');

for(item of accord){
    item.addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

// services

