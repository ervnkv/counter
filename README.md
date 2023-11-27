### Приложение счетчик
    Стэк - Vite, Javascript, Svelte

#### О ПРОЕКТЕ
    Точка входа в приложение index.html - пустая страница, в которую подключаются:
        index.js - функция, которая берет приложение из App.svelte и вставляет его в index.html.
        В index.js подключается index.css - базовые стили всего приложение
    
    src/App.svelte - само приложение
    src/Store.js - стор, логика

#### Скачать к себе
    Установить Node.js (https://nodejs.org/ru/download)
    Установить Git, настроить (имя, почта)
    Скопировать репозиторий через git clone
    (или скачать и распаковать архив)

#### Создать билд (итоговый результат)
    npm i
    npm run build

#### Настройка и запуск (в режиме разработчика)
    npm i
    npm run dev
    
#### Сделал изменения
    git add .
    git commit -m "Вот такое изменение я сделал"
    git push

#### Получить изменения
    git pull
