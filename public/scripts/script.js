const newTask = document.querySelector('.new-task');
const btnAddCard = document.querySelectorAll('.add-card');

btnAddCard.forEach((el) => {
    el.addEventListener('click', (e) => {
        console.log(e.currentTarget.getAttribute('data-addcard'));
        if(!newTask.classList.contains('show-new-task')) {
            newTask.classList.add('show-new-task');
        } else newTask.classList.remove('show-new-task');
    });
});