import {getRandomArrayElement} from './util.js';
import { checkStringLength } from './util.js';
import { getRandomPositiveInteger } from './util.js';

const PICTURES_COUNT = 25;
const AVATARS_COUNT = 6;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};
// Создали массив с коментами
const commentLines = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];
// создали массив с описанием
const descriptions = [
  'На картинке изображены лошади с х***и',
  'Ну и рожа',
  'Ты такая крассотка, а у меня только сотка. p.s. Джейсон Стетхем',
  'Блондинка',
  'Брюнетка'
];
// создали массив с именами
const names = [
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

const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(commentLines)
  ).join('');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATARS_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(LikesCount.MIN, LikesCount.MAX),
  comments: Array.from(
    { length: getRandomPositiveInteger(0, 20) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from({ length: PICTURES_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );
checkStringLength('', 140);
getPictures();

export {createPicture};
export {createComment};
