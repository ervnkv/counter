import { writable } from 'svelte/store'

// Стор для символов
function createLettersStore() {
    // Первоначальное состояние стора
	const { subscribe, set, update } = writable({
        list: [], // 1. Полный список символов
        listSorted: [], // 2. Отсортированный и отфильтрованный список символов (только буквы)
        length: 0 // 3/ Длина отфильтрованного списка
    })

	return {
        // Обязательная функция подписки
		subscribe,

        // Кастомная функция изменения стора 
        add: (letter) => { // Принимает символ
            update((store) => { // Вызываем обновление стора, есть еще Set
                const {list, listSorted, length} = store // Достаем из стора текущие переменные (фигурные скобки - деструктуризация объекта)
                
                // 1. Обновляем Полный список символов
                const newList = [...list, letter] // Создаем копию массива и добавляем в конец символ (... - spread оператор)

                // 2. Обновляем Отсортированный и отфильтрованный список символов
                // Длинный вариант для лохов
                let newListSorted = listSorted // Копируем предыдущий
                if (typeof letter === "string" && letter.toUpperCase() !== letter.toLowerCase()) { // Если символ - строка и буква - идем дальше (этим условием отбрасываем чиста и спец символы)
                    if (!listSorted.includes(letter.toUpperCase())) { // Если массив не содержит этот символ - идем дальше (этим условием мы избегаем повторов)
                        newListSorted = [...listSorted, letter] // Создаем копию массива и добавляем в конец символ (... - spread оператор)
                            .map(letter => letter.toUpperCase()) // Преобразуем каждый символ в верхний регистр
                            .sort() // Сортируем по алфавиту
                    }
                }
                // Короткий вариант для пацанов
                // const newListSorted = typeof letter === "string" && letter.toUpperCase() !== letter.toLowerCase()
                //     ? [...new Set([...listSorted, letter.toUpperCase()])].sort()
                //     : listSorted


                // 3. Обновляем длину отфильтрованного списка
                const newLength = newListSorted.length

                // Возвращаем новый объект в стор
                return {
                    list: newList,
                    listSorted: newListSorted,
                    length: newLength
                }
            }) 
        }
	}
}

export const LettersStore = createLettersStore()



