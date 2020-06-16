let phrases = [
    {
        text: 'С другой стороны, укрепление и развитие внутренней структуры прекрасно подходит для реализации модели развития.',
        image: 'https://randomwordgenerator.com/img/picture-generator/54e4d2404356b10ff3d8992cc12c30771037dbf852547941762a7ed19e48_640.jpg'
    },
    {
        text: 'Как принято считать, элементы политического процесса, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут своевременно верифицированы.',
        image: 'https://randomwordgenerator.com/img/picture-generator/57e6d043435aa514f1dc8460962e33791c3ad6e04e507441722a72dd964ccc_640.jpg'
    },
    {
        text: 'Сложно сказать, почему непосредственные участники технического прогресса, вне зависимости от их уровня, должны быть объявлены нарушающими общечеловеческие нормы этики и морали.',
        image: 'https://randomwordgenerator.com/img/picture-generator/52e0dd464b5ba814f1dc8460962e33791c3ad6e04e507441722978d69244cd_640.jpg'
    },
    {
        text: 'Банальные, но неопровержимые выводы, а также интерактивные прототипы обнародованы.',
        image: 'https://randomwordgenerator.com/img/picture-generator/54e6d0474a5aa814f1dc8460962e33791c3ad6e04e507440752f72d7974fc1_640.jpg'
    },
    {
        text: 'Воистину радостный звук: далёкий барабанный бой',
        image: 'https://randomwordgenerator.com/img/picture-generator/51e3d5444e57b10ff3d8992cc12c30771037dbf85254794e702672d7904b_640.jpg'
    },
    {
        text: 'Базовый вектор развития связывает нас с нашим прошлым',
        image: 'https://randomwordgenerator.com/img/picture-generator/horses-1348383_640.jpg'
    },
    {
        text: 'Цены на бензин начинают падать',
        image: 'https://randomwordgenerator.com/img/picture-generator/55e7d5454f50b10ff3d8992cc12c30771037dbf85254794e702672d79648_640.jpg'
    },
    {
        text: 'Все чаще появляется информация о том, что известный инсайдер, в преддверии важного события, попахивает безумием',
        image: 'https://randomwordgenerator.com/img/picture-generator/57e5dd404357a814f1dc8460962e33791c3ad6e04e50744074287ed2924cc2_640.jpg'
    },
    {
        text: 'посмотреть трейлер сериала',
        image: 'https://randomwordgenerator.com/img/picture-generator/54e8d74b4b56aa14f1dc8460962e33791c3ad6e04e507440752f72d69e4ec0_640.jpg'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://randomwordgenerator.com/img/picture-generator/54e3dc4a425aaf14f1dc8460962e33791c3ad6e04e507440752f72d79745c5_640.jpg'
    },{
        text: 'Благородные стремления не спасут: героям были возданы соответствующие почести',
        image: 'https://randomwordgenerator.com/img/picture-generator/55e2dc4a4b52a414f1dc8460962e33791c3ad6e04e5074417d2d73dc9444c7_640.jpg'
    },{
        text: 'Не забудьте выдать мне доступ ко всей переписке в настройках беседы, а то ',
        image: 'https://randomwordgenerator.com/img/picture-generator/54e9dd444e55aa14f1dc8460962e33791c3ad6e04e5074417d2d73d39f4ec1_640.jpg'
    },{
        text: 'MOLOKO С НОЖАМИ',
        image: 'https://randomwordgenerator.com/img/picture-generator/54e8d74b4b56aa14f1dc8460962e33791c3ad6e04e507440752f72d69e4ec0_640.jpg'
    },{
        text: 'Я съел ноги у которого подряд',
        image: 'https://randomwordgenerator.com/img/picture-generator/52e9d4414e57b10ff3d8992cc12c30771037dbf85254794075277bd3914e_640.jpg'
    },{
        text: 'Даже евгений понасенков теперь у меня, но не начинай этот бот говорит сел любитель постиронии к японии, прется от него',
        image: 'https://randomwordgenerator.com/img/picture-generator/5ee4d1404a4faa0df7c5d57bc32f3e7b1d3ac3e45659784f70267edc94_640.jpg'
    },{
        text: 'сто используете эту команду. Подождите немного и попробуйте сно',
        image: 'https://randomwordgenerator.com/img/picture-generator/locomotive-616267_640.jpg'
    },{
        text: 'ЧЕРЕЗ ЧАС ИЛИ ПОЛЧАСА',
        image: 'https://randomwordgenerator.com/img/picture-generator/55e8dd4a4255b10ff3d8992cc12c30771037dbf85254794e73277bd7954a_640.jpg'
    },{
        text: 'Я мы кабан я хочу новую аватарку',
        image: 'https://randomwordgenerator.com/img/picture-generator/52e1d64a435aae14f1dc8460962e33791c3ad6e04e507441722a72dd904ac1_640.jpg'
    },{
        text: 'ДОСТУП К ПОЛУНОЧИ БЫЛО ИДТИ В И БРОСИТЬ В БЮДЖЕТ НЕ СПОРЮ',
        image: 'https://randomwordgenerator.com/img/picture-generator/53e0d0464a57a914f1dc8460962e33791c3ad6e04e5074417d2d73d3914fc4_640.jpg'
    },
];



function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text)
    smoothly(image, 'src', randomElement.image)

    if (randomElement.text.length > 40) {
        advice.style.fontSize = '33px';
    } else {
        advice.style.fontSize = '42px';
    }
});
