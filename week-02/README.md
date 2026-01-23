# Неделя 2 — Функции, массивы, объекты

# Цель недели
- Уверенно работать с массивами объектов
- Использовать map / filter / reduce
- Не мутировать входные данные
- Начать писать код, похожий на production-backend


## Задание A — массивы объектов (tasks.js)
Дан массив пользователей:
```
const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 30 },
  { name: 'Dave', age: 15 }
]
```
filterAdults(users)
```
function filterAdults(users) {
  // вернуть ТОЛЬКО пользователей age >= 18
}
```
Требования
- использовать filter
- не менять исходный массив
- если аргумент не массив → вернуть null

getNames(users)
```
function getNames(users) {
  // вернуть массив имён: ['Alice', 'Bob', ...]
}
```
Требования
- использовать map
- не использовать циклы

averageAge(users)
```
function averageAge(users) {
  // вернуть средний возраст (number)
}
```

## Задание B — статистика чисел (stats.js)
Напиши функцию:
```
function getStats(numbers) {
  // вернуть объект:
  // {
  //   min: number,
  //   max: number,
  //   avg: number
  // }
}
```
Требования
- вход: массив чисел
- если массив пустой → null
- без Math.min(...arr) и Math.max(...arr)
- один проход по массиву (reduce)

## Запрещено
- for, while
- мутация входных массивов
- console.log внутри функций
- копипаста из StackOverflow

## Start program

node index.js
