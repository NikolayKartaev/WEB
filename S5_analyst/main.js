const paginationButtonsEls = document.querySelectorAll('.pagination'); // document - переменная обо всех тегах на странице. 
// querySelectorAll - найти все теги с классом .pagination
for (let index = 0; index < paginationButtonsEls.length; index++) {
    const button = paginationButtonsEls[index];                 // Достаем каждую кнопку
    button.addEventListener('click', async function () {              // addEventListener - добавляет "слушатель событий" 
        const pageNumber = button.getAttribute("data-page");  // при клике на кнопку выполняет функцию function, достает значение аттрибута
        const users = await fetchUsers(pageNumber);     // посылает запрос по url с указанием номера страницы в соответствии с кнопкой (1 или 2)
        renderUsers(users);
    })
}

async function fetchUsers(number) { // асинхронная ФУНКЦИЯ
    const response = await fetch(`https://reqres.in/api/users?page=${number}`); // await - ожидание ответа
    const json = await response.json(); //.json() - метод получающий json
    return json.data; // возвращает data (массив) из полученных данных
}

function renderUsers(users) {
    let content ='';
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        content+=
        `<div>
            <img src="${user.avatar}">
            <p>${user.first_name} ${user.last_name}<br>${user.email}</p>
        </div>
        `
        document.querySelector('#app').innerHTML = content;


    }
}