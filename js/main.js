function getRandom(min, max) {
  if (min > max) {
    return Math.random() * (min - max) + max;
  }
  else {
    return Math.random() * (max - min) + min;
  }
}

function stringLength(string , maxLenght) {
  if (stringLength <= maxLenght) {
    // eslint-disable-next-line no-console
    console.log(`Строка ${ string } занимает ${ string.length } символов`);
  }
  else {
    // eslint-disable-next-line no-console
    console.log('Строка превысила максимальное количество символов!');
  }
}

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
/* Что от нас хотят ?
Написать необходимые функции для создания масива из 25 сгенерированных объектов.
 У каждого из которых есть следующие характеристики
 id:
 avatar:
 message:
 name:
 Эта программа похожа на футболистов. В связи с чем за основу попробуем взять футболистов*/
// Создали массив с коментами
const commentsArray = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];
// создали массив с описанием
const descriptionArray = [
  'На картинке изображены лошади с х***и',
  'Ну и рожа',
  'Ты такая крассотка, а у меня только сотка. p.s. Джейсон Стетхем',
  'Блондинка',
  'Брюнетка'
];
// создали массив с именами
const nameArray = [
  'Александра',
  'Карина',
  'Максим',
  'Марк',
  'Екатерина',
  'Ксения',
  'Илья',
  'Григорий',
  'Майя',
  'София',
  'Артемий',
  'Сафия',
  'Дмитрий',
  'Роман',
  'Артемий',
  'Серафим',
  'Луиза',
  'Александр',
  'Семён',
  'Алина',
  'Елисей',
  'Ульяна',
  'Маргарита',
  'Тимур',
  'Анастасия',
  'Олег'
];

const getPhotos = function (photo) {
  //написали функцию возвращающую рандомное число из масива для описания и имени
  const randDescription = Math.floor(Math.random() * descriptionArray.length);
  const randName = Math.floor(Math.random() * nameArray.length);
  const randComents = Math.floor(Math.random() * commentsArray.length);
  const rendAvatar = getRandom(1, 6).svg;
  const photosObject = {
    id: 0,
    url: 0,
    description: 0,
    likes: 0,
    comment: {
      id: 0,
      avatar: 0,
      message: 0,
      name: 0,
    },
  };
  // цикл для изменения объектов массива
  for (let i = 0; i < photo.length - 1; i++){
    photosObject.id = i;
    photosObject.url = photos/[i].jpg;
    photosObject.description = descriptionArray[randDescription];
    photosObject.likes = getRandom(25, 200);
    photosObject.comment.message = commentsArray[randComents];
    photosObject.comment.name = nameArray[randName];
    photosObject.comment.avatar = img/avatar-[rendAvatar].svg;
    return photo;
  }
};

