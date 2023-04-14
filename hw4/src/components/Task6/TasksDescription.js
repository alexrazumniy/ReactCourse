export const TasksDescription = () => { ////////////// Tasks - 1 -
    return (
        <div>
            Задача №1. Робота з Toggler HOC  - відповідає за функціоналом тоглера (переключення стану  true/false)
1.	Створити компонент User тa Todo, withToggler
•	User рендерить дані юзера
•	Album  - рендерить дані альбома
•	withToggler – HOC, який забезпечує функціонал тоглера
2.	User:
•	дані для поста можна скопіювати тут - https://jsonplaceholder.typicode.com/users/1
•	рендерить данні username, email, a також детальну інформацію про юзера: address (city, street, suit), phone, company (name)
та кнопку “See details” / “hide details”
•	при початковому рендері детальна інформація прихована, назва кнопки “See details”.
•	при кліці на кнопку в стані “See details” – показуємо детальну інформацію і змінюємо назву кнопки на “Hide details”
•	при кліці на кнопку в стані “ Hide details ” – показуємо детальну інформацію і змінюємо назву кнопки на “ See details”
3.	Album :
•	****дані для альбому можна отримати тут - https://jsonplaceholder.typicode.com/albums/1/photos (перший елемент масиву)
•	показує – назву альбома і його картинку
•	Кнопка міняє свій статус (подобається / НЕ подобається) при кліці.
Іконки для кнопки можна отримати тут -  https://www.flaticon.com/free-icons/heart
4.	Логіку для toggled винести в HOC – withToggler.
Постачає WrappedComponent пропсами:
toggled  (стан тоглера true/false) і changeToggled (функція для зміни стану тоглера)
        </div>
    )
}

export const Task2Description = () => {
    return (
        <div>
            Задача №2 Робота з Fetching Data HOC, який відповідає за функціонал для асинхронного запиту.
2.1. Створити наступні компоненти: UsersList, User, AlbumsList, Album, withFetchingData
•	UsersList – список усіх юзерів (тобто список із User).
•	User – описує 1 юзера (username, email, address, phone, company)
•	AlbumsList – список усіх коментарів (Comment)
•	Album – описує 1 альбом (title)
•	withFetchingData – HOC з функціоналом роботи з асинхронним кодом (запит на сервер, отримання даних, стан загрузки, наявність помилки)
2.2. Списки (UsersList та AlbumsList)
•	логіку по роботі із асинхронним кодом отримують із HOC – withFetchingData (див.п2.3), який снабжає їх відповідними пропсами:
data (результат загрузки – масив певних даних),  isLoading (стан загрузки), error (текст помилки)
•	показують компонент Loader, якщо йде загрузка відповідних списків
•	показують компонент Error, якщо наявна помилка при запиті
•	рендерять відповідні списки – результат запиту
Примітки:
•	в якості компонентів Loader і Error можна відобразити `div` з відповідним текстом
•	компоненти User та Album можна взяти iз попереднього завдання
2.3.  HOC -  withFetchingData
•	робить асинхронний запит
•	забезпечує WrappedComponent наступними даними:
data (результат загрузки даних),  isLoading (стан загрузки), error (текст помилки)
•	сcилка для запиту отримується із пропса url компонента, створеного за допомогою нашого HOC
2.4. Ендпоінти для запитів:
•	юзерів -  https://jsonplaceholder.typicode.com/users?_limit=10
•	альбоми - https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10
        </div>
    )
}

export const Task3Description = () => {
    return (
        <div>
Задание #3 - работа с render-props
1.	Создать компоненты App , DataMaker , Posts , Post
2.	Компонент App
a)	Хранит в себе переменную с url - https://jsonplaceholder.typicode.com/todos?_limit=10
b)	Внутри себя рендерит div , в котором вложен компонент DataMaker
c)	В DataMaker передается два пропс - url (со значением переменной url) ,и проп renderDataUrl -который в себе использует паттерн render props , а именно принимает data и прокидывай их в компонент Posts в виде пропа
3.	Компонент DataMaker - это функциональный компонент ,который принимает в себя параметры url , и renderDataUrl
a)	Внутри себя компонент имеет состояние posts (в нем буду хранится посты)
b)	Внутри себя выполняется запрос на сервер - используя prop url (который пришел ранее)
c)	Данные полученые с сервера кладутся в state постов
d)	Функциональный компонент возвращает div в котором происходит вызов функции renderDataUrl с передачей постов из state
4.	Компоненты Posts && Post только отображают данные полученые в пропах
a)	Posts получает проп с постами и рисует список, внутри списка рендерятся компоненты Post
b)	В компонент Post передавать все значение одним пропом
c)	Компонент Post -принимает пропы и рисует разметку вида
        </div>
    )
}

export const Task4Description = () => {
    return (
        <div>
Задание #4: Создание компонента Tooltip (всплывающая подсказка) для карт продуктов с использованием паттерна render-props
1.	Создание обязательных компонентов:
•	ProductCardList - список всех карточек
•	ProductCard – карточка о продукте
•	Tooltip - всплывающая подсказка
1.	ProductCard :
•	изначально показывает картинку продукта, название и описание.
•	при наведении на картинку продукта (далее - Компонент) – показывает Tooltip с дополнительной информацией
1.	Всплывающая подсказка должна отображаться при наведении пользователя на Компонент (событие MouseEnter) и скрыться, когда пользователь уходит с него (событие MouseLeave).  При перемещении мышки в пределах Компонента, за ней движется и подсказка (событие MouseMove)
2.	Tooltip
4.1. содержит всю логику по отображению подсказки:
•	отслеживает показывать подсказку или нет ( isTooltipShown ) , х/y позиции для отображения подсказки ( tooltipX / tooltipY )
•	функцию-тоглер (показать/спрятать подсказку)
•	функцию для изменения х/y позиций подсказки при движении мышки
4.2  рендерит:
•	Компонент (при помощи render-props)
•	и саму подсказку (отпозиционированный div + контент подсказки, внутри этого div)
4.3. принимает 2 пропа:
а) render, который должен быть функцией. Т.е здесь будем реализовывать Render Props.
b) content – содержимое подсказки (название продукта, цену и рейтинг.)
4.4.  Колбек-функция  для пропа render будет:
•	принимать аргументом функцию-тоглер для подсказки + функцию для изменения х/y позиций подсказки,
•	и возвращать Компонент
5.	Линка для получения данных с продуктами  - https://my.api.mockaroo.com/coffee.json?key=778301b0
6.	Стилизация произвольная
        </div>
    )
}

export const Task5Description = () => {
    return (
        <div>
Завдання 5.
Реалізуйте функціонал із завдань 1-2 за допомогою кастомних хуків замість HOC-ів

        </div>
    )
}

export const Task6Description = () => {
    return (
        <div>
Задание 6. React Router
1.   Создать роутинг для вышеуказанных задании
Каждое задание (твоё решений заданий 1-4) нужно рендерить на отдельной странице.
Taкже должны быть страницы  “Main” и “ Tasks Description ”
“Main” – это стартовая страница (path=”/”). Укажи для нее контент – “Это решение 4-го  домашнего задания от [твое имя].”
1.	Header должен содержать линки (ссылки) и кнопку возврата на предыдущую страницу.
Он должен бить закреплён вверху и отображаться на всех страницах.
Название ссылок соответствует названию заданий (task 1, task 2 и т.д)
Стилизация ссылки, которая отвечает за страницу на которой мы находимся, должна отличаться от остальных ссылок.
1.	Для кнопки возврата можно скачать стрелочку, которая тебе понравиться здесь: https://icon-icons.com/download/72692/SVG/512/
При клике на стрелочку нас возвращает на страницу, на которой мы находились до этого (напр. изначально мы были на странице task 3, далее по ссылке перешли на  task 1. Теперь при нажатии на кнопку возврата  нас возвразает обратно на страницу task 3)
1.	Также отдельно создай страницу Tasks Description. Здесь у нас будет описание заданий, которые у тебя есть.
4.1 При переходе на эту страницу будем изначально видеть только название задание:
1.	Task #1 - Toggler HOC
2.	Task #2 – Fetching Data HOC
3.	Task #3 - render-props
4.	Task #4: - Tooltip
4.2 При клике на каждое задание внизу под списком показываем детальную информацию об этом задание.
При этом путь до задания должен выглядеть так: description*/*idЗадания.
Напр.. если description/3 – то отображаем описание к заданию #3
Для  написания этого роута используйте вложенные роуты (nested routes), напр..
 
https://lh6.googleusercontent.com/ovtA5ri8sHzzul0OSsfJmrHIctCCpdYPcLHW9Ly2J-WQRGA03FsjVfPPP3hPGyC9lzeigJZW3IqUaATEGS2dsCGsPy9fmuve0NRuwTOnAjLXMzSVX7dTIyNs0bnSa_ouJsvFxFhz_Jf7f_8Z4Gg-yg
1.	Если попытаемся ввести путь, которого у нас не существует, нас перебрасывает на страницу “Main”
        </div>
    )
}

