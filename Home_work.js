//*** Lesson 1
// Домашнее задание будет заиметь репозиторий на гитхабе с проектом 
//где будет первая ваша программа console.log('hello world!') если вы не сделали этого на уроке

console.log('Home work - lesson 1')
console.log('Hello world!') 
console.log(`
-----|||||-----
    `)
    

//*** Lesson 2
console.log('Home work - lesson 2')

//#1
//Создайте переменные 
//name, age, isStudent, height, hobby, favoriteNumber, isGraduated
//и присвойте им значения различных типов данных.

let myname = 'Артём aka Bartigor'
let age = 44
var isStudent = 'ЦОПП'
let height = 180
let hobby = 'mobile appdev'
let favoriteNumber = 7
let isGraduated
//Выведите в консоль типы всех этих переменных через запятую.
console.log('#1 - ' +  myname + ', ' + age + ', ' + isStudent + ', ' + height + ', ' + hobby + ', ' + favoriteNumber + ', ' + isGraduated)

//#2
//Создайте переменные, содержащие явное undefined, неявное undefined и null, 
//и выведите их типы в консоль через ||
let explicitUndefined
let implicitUndefined = undefined
const forNull = null

console.log('#2 - ' +  explicitUndefined + '||' + implicitUndefined + '||' + forNull)



//#3
//Создайте переменные для вашего года рождения и текущего года, 
//а затем вычислите и выведите в консоль ваш текущий возраст. Формат вывода:
//Привет, мне {вычисленный возраст} лет.

const yearOfBirth = 1980
let currentYear = 2024
let myAge = currentYear - yearOfBirth

console.log('#3 - ' +  'Привет, мне ' + myAge + ' года.')


//#4*
//Задание со звёздочкой (использование Google и самостоятельное обучение)
//Выполните задание №4, используя конструктор 

//new Date()
//, чтобы ваш возраст всегда рассчитывался актуально, независимо от текущего года.

function calculateAge(birthDate) {
    // Получаем текущую дату
    const today = new Date();
    
    // Преобразуем дату рождения в объект Date
    const birthDateObject = new Date(birthDate);
    
    let age = today.getFullYear() - birthDateObject.getFullYear();

    // Корректируем возраст, если день и месяц текущей даты меньше дня и месяца даты рождения
    const m = today.getMonth() - birthDateObject.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObject.getDate())) {
        age--;
    }
    
    return age;
}

const dateOfBirth = '1980-01-07';
console.log('#4 - ' +  `Точный возраст: ${calculateAge(dateOfBirth)} года`);

//Отправьте решение в виде ссылки на ваш удалённый репозиторий с домашним заданием.
console.log(`
-----|||||-----
`)

//*** Lesson 3
// Домашнее задание
console.log('Home work - lesson 3')
// Числа и округление:

// Напишите код, который:
// Присваивает переменной число с плавающей точкой, например, 7.3.
const someNumber = 7.5
// Создаёт три переменные, в которых будет храниться это число, округлённое:
console.log(someNumber)
console.log(Math.ceil(someNumber)) // В большую сторону.
console.log(Math.floor(someNumber)) // В меньшую сторону.
console.log(Math.round(someNumber)) // До ближайшего целого числа.
// Выведите все три результата в консоль.


// Генерация случайного числа:

// Напишите код, который генерирует два случайных числа от 0 до 100 (без использования функций) и выводит:
// Наибольшее из них.
const randomNumber = Math.random() * 100
const secondRandomNumber = Math.random() * 100
console.log(randomNumber)
console.log(secondRandomNumber)
console.log(Math.max(randomNumber, secondRandomNumber))
// Разницу между ними.
console.log(randomNumber - secondRandomNumber)


// Математические операции:
// Задано два числа: 4 и 3. Вычислите:

let x = 4
let y = 3
// Их сумму, произведение и частное.
console.log(x + y)
console.log(x * y)
console.log(x / y)

// Результат возведения первого числа во вторую степень.
console.log(Math.pow(x, 2))
// Квадратный корень из второго числа.
console.log(Math.sqrt(y))
// Выведите результаты на экран.


// Работа со строками:

// Напишите код, который:
// Создаёт строку 'Hello, JavaScript!' и выводит её длину.
const str = '  Hello, JavaScript!  '
console.log(str + ' = ' + str.length + ' символа') 
// Переводит строку в верхний и нижний регистр, а затем выводит оба варианта.
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.toUpperCase() + ' ' + str.toLowerCase())

// Проверяет, содержится ли в строке слово 'Java' (вывод true/false).
console.log(str.includes('Java'))
// Извлекает слово 'JavaScript' и выводит его.
console.log(str.substring(9, 19));  
// Убирает пробелы в начале и конце строки, если они есть.
console.log(str.trim())


// Работа с датами:

// Напишите код, который:
// Создаёт переменную с текущей датой и временем.

const today = new Date()

console.log(today)

// Получает и выводит отдельно:
console.log(today.getFullYear())// Год.
console.log(today.getMonth() + 1)// Месяц.
console.log(today.getDate())// День месяца.
console.log(today.getDay())// День недели.

const nextYear = new Date(); 
nextYear.setFullYear(today.getFullYear() + 1);
nextYear.setMonth(0);
console.log(nextYear) // Изменяет год на следующий, а месяц на январь. Выведите изменённую дату.


console.log(`
    -----|||||-----
    `)
    
    //*** Lesson 4
    console.log('Home work - lesson 4')
    console.log('')

    // Напишите функцию, которая принимает строку и проверяет, состоит ли она только из цифр.
    console.log('#1 Напишите функцию, которая принимает строку и проверяет, состоит ли она только из цифр.')
    function onlyDigits(str) {
        const regex = /^\d+$/;
//Регулярное выражение /^\d+$/ означает следующее:
// ^ — начало строки,
// \d+ — одна или более цифр,
// $ — конец строки.
        
        // Проверяем строку с помощью регулярного выражения
        return regex.test(str);
    }
    
    console.log(onlyDigits('123'));   // true
    console.log(onlyDigits('12a3'));  // false
    console.log(onlyDigits('abc'));   // false
    console.log('')

    // Напишите функцию, которая принимает строку и возвращает количество букв
    console.log('#2 Напишите функцию, которая принимает строку и возвращает количество букв')
    
    function countLetters(str) {
        // Регулярное выражение для поиска всех букв латинского и кириллического алфавитов
        const letters = /[a-zA-Zа-яА-Я]/g;
// Регулярное выражение: /[a-zA-Zа-яА-Я]/g
// [a-zA-Z] — ищет любые строчные и заглавные буквы латинского алфавита.
// [а-яА-Я] — ищет любые строчные и заглавные буквы кириллического алфавита.
// g — глобальный флаг, чтобы найти все совпадения в строке.
        
        // Используем match для получения массива совпадающих символов
        const matches = str.match(letters);
        
        // Возвращаем длину массива совпадений, либо 0, если совпадения отсутствуют
        return matches ? matches.length : 0;
    }
    
    console.log(countLetters('Hello, World!'));       // 10
    console.log(countLetters('Привет, Мир!'));        // 9
    console.log(countLetters('123'));                 // 0
    console.log(countLetters('Набор из букв и 3-х 123 цифр'));    // 17
    console.log('')

    // Напишите функцию, которая принимает строку и возвращает количество гласных букв
    console.log('#3 Напишите функцию, которая принимает строку и возвращает количество гласных букв')

    function countVovels(str) {
        // Регулярное выражение для поиска всех букв латинского и кириллического алфавитов
        const vovels = /[aeiouyаеёиоуыэюя]/gi;
        // все глассные [aeiouyаеёиоуыэюя], /g - все совпадения, /i - нечуствительность к регистру
        // Используем match для получения массива совпадающих символов
        const matches = str.match(vovels);
        
        // Возвращаем длину массива совпадений, либо 0, если совпадения отсутствуют
        return matches ? matches.length : 0;
    }

    console.log(countVovels('Hello, World!'));       // 3
    console.log(countVovels('Привет, Мир!'));        // 3
    console.log(countVovels('123'));                 // 0
    console.log(countVovels('Набор из букв и 3-х 123 цифр'));    // 6
    console.log('');

    // Напишите функцию, которая принимает год и определяет, является ли он високосным.
    console.log('#4 Напишите функцию, которая принимает год и определяет, является ли он високосным.');
    function leapYear(year) {
    // Условие для определения високосного года
    return (year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0));
}

    console.log(leapYear(new Date().getFullYear())); // true
    console.log(leapYear(2025)); // false
    console.log(leapYear(1893)); // false
    console.log(leapYear(1980)); // true
    console.log('');

// Напишите функцию, которая принимает двузначное число и возвращает разницу между его цифрами.
console.log('#5 Напишите функцию, которая принимает двузначное число и возвращает разницу между его цифрами.');
function differenceBetweenDigits(num) {
    // Разделяем число на две отдельные цифры
    let firstDigit = Math.floor(num / 10);  // Первая цифра (деление на 10 и округления вниз)
    let secondDigit = num % 10;             // Вторая цифра (остаток от деления на 10)

    // Находим разницу между ними
    return firstDigit - secondDigit;
}
console.log(differenceBetweenDigits(45));  // -1
console.log(differenceBetweenDigits(99));  // 0
console.log(differenceBetweenDigits(72));  // 5
console.log('');

// Напишите функцию, которая принимает число и проверяет, является ли оно зеркальным
console.log('#6 Напишите функцию, которая принимает число и проверяет, является ли оно зеркальным');

function mirrorNumber(num) {
    
    let reversedNum = String(num).split('').reverse().join(''); // Преобразует число в строку и переворачивает её
    
        return num == reversedNum; // сравнить 2 числа
}

// Примеры использования
console.log(mirrorNumber(121));      // true
console.log(mirrorNumber(123));      // false
console.log(mirrorNumber(1312131));  // true
console.log(mirrorNumber(-121));     // false (знак минус делает число несимметричным)