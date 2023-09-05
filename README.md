# **Проект Stellar Burger**
- Проект выполнен в рамках курса Яндекс Практикума
- Автор: Олег Бархатов, студент 23 когорты Web+
# Этап №1 "Промежуточный проект. CRA-заготовка и структура папок под компоненты ветка"
- Выполнена файловая подготовка проекта
- Сверстаны основные блоки(компоненты)
- Выполнено стороннее подключение к UI-библиотеке Яндекса
# Этап №2 "Финальный проект. Написать весь JSX и сверстать"
- Реализовано подключение к API
- Реализованы компоненты обработки ошибок и ожидания загрузки запроса fetch
- Реализована фоновая подложка(overlay) под модальное окно
- Реализовано модально окно с подгрузкой данных об ингридиенте
- Добавлена типизация 
# Этап №3 "Перенос состояния в Context"
- Реализован перенос состояния в контекст
- Реализован подсчет стоимости бургера
- Добален POST запрос с ID ингридиентов для получение номера заказа
- Добавлен сброс конструктора при нажатию на кнопку оформить заказ
- Добален сброс кнопки в disabled при оформлении заказа и отсутсвии ингридиентов 
- Добавлен проброс ключей key, через библиотеку uuid
# Этап №4 "Redux"
- Реализовано хранилище данных
- Реализована логика взаимодействия с хранилищем данных
- Добавление логика перемещения ингредиентов dnd
- Добавлена сортировка в контсрукторе dnd
- Доработана навигация по ингрединетам
________________________________________________
## Ревью №1 Этап 1-2:
### Критические замечания:
- Добавлены пропущенные проверки propsTypes в компонентах Catch && Bun
### Замечания можно лучше:
- Добавлен скролл(scrollTab) в компоненте BurgerIngredients
- Запрос к серверу и проверка ответа вынесены в отдельный файл api.js
- Исправлено название пропса visible на setVisible
## Ревью №1 Этап 3:
### Критические замечания:
- Убрать отступы шапки
- Вынести за пределы компонента объект {total: 0 } 
- Перенести состояние кнопки в компонент, где используется и убрать из контекста
- Выполнять расчет стоимости заказа в burger-constructor
## Ревью №1 Этап 4:
### Критические замечания:
- Reducer должен быть чистой функцией
- Исправить тип булки 
 _______________________________________________
## Используемые материалы
- [Критерии проверки по чек листу](https://code.s3.yandex.net/web-plus/checklists/checklist_pdf/checklist_7.pdf)
- [Критерии проверки по чек листу](https://code.s3.yandex.net/web-plus/checklists/checklist_pdf/checklist_8.pdf)
- [Макет в Figma](https://www.figma.com/file/ocw9a6hNGeAejl4F3G9fp8/React-_-Проектные-задачи-(3-месяца)_external_link?node-id=2973%3A2032&mode=dev)
## Используемые технологии
- VS Code
- JavaScript
- Git
- Figma
- React
- jsx
- Redux


