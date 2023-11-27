<!-- Блок JS -->
<script>
  // Импортируем Стор для символов
  import { LettersStore } from './Store.js';

  // Переменная для хранения текущего символа в поле ввода
  let currentValue

  // Функция для обработки нажатия на ОК
  const handleOk = (e) => {
    e.preventDefault() // Предотвратить обновление страницы (это стандартное поведение форм)
    LettersStore.add(currentValue) // Вызываем кастомную функцию добавление нового символа из стора
    currentValue = null // Обнуляем переменную для красоты
  }
  
  $: console.log("stream 1 ", $LettersStore.list)
  $: console.log("stream 2 ", $LettersStore.listSorted)
  $: console.log("stream 3 ", $LettersStore.length)
</script>



<!-- Блок HTML -->
<main>
  
  <h1>Введенные символы: {$LettersStore.list.join(", ")}</h1> <!-- Вытаскиваем из стора массив list и соединяем его элементы запятой -->
  <h1>Буквы по алфавиту: {$LettersStore.listSorted.join(", ")}</h1> <!-- Вытаскиваем из стора массив listSorted и соединяем его элементы запятой -->
  <h1>Длина: {$LettersStore.length}</h1> <!-- Вытаскиваем из стора переменную length -->

  <form on:submit={handleOk}> <!-- Назначаем на подтверждение формы (нажатие на ОК) функцию  handleOk-->
    <input bind:value={currentValue} /> <!-- Связываем input с переменной currentValue -->
    <button type="submit" disabled={!currentValue || currentValue === " " || currentValue.length !== 1}>OK</button> <!-- Назначаем на нажатие подтверждение формы, условие выключения кнопки- пустая строка или больше одного символа -->
  </form>

</main>



<!-- Блок CSS, тут красота и расположение элементов -->
<style>

  main {
    margin: auto;
    width: 40rem;
  }
  h1 {
    font-size: 1.0rem;
    text-align: left;
  }
  form {
    display: flex;
    align-items: center;
    padding: 0;
    border: 0;

    gap: 1rem;
  }
  input {
    display: flex;
    flex: 1;

    height: 2rem;
    padding-inline: 0.5rem;

    border: 0;
    outline: 0;
  }
  button {
    height: 2rem;
    width: 4rem
  }

</style>
