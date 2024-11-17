//*** Lesson 1
// Домашнее задание будет заиметь репозиторий на гитхабе с проектом 
//где будет первая ваша программа console.log("hello world!") если вы не сделали этого на уроке

console.log('Home work - lesson 1')
console.log("Hello world!") 
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
console.log("#1 - " +  myname + ', ' + age + ', ' + isStudent + ', ' + height + ', ' + hobby + ', ' + favoriteNumber + ', ' + isGraduated)

//#2
//Создайте переменные, содержащие явное undefined, неявное undefined и null, 
//и выведите их типы в консоль через ||
let explicitundefined
let implicitundefined = undefined
const fornull = null

console.log("#2 - " +  explicitundefined + '||' + implicitundefined + '||' + fornull)



//#3
//Создайте переменные для вашего года рождения и текущего года, 
//а затем вычислите и выведите в консоль ваш текущий возраст. Формат вывода:
//Привет, мне {вычисленный возраст} лет.

const yearofbirth = 1980
let currentyear = 2024
let myage = currentyear - yearofbirth

console.log('#3 - ' +  'Привет, мне ' + myage + ' года.')


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