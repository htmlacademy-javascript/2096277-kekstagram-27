import { resetEffect } from './effects.js';
import { resetScale } from './slider.js';
resetScale();
const imageUpload = document.querySelector('.img-upload__form');
// находим тег body
const body = document.querySelector('body');
// находим кнопку закрытия формы редактировани


// находим форму редактирования изображения
const imageEdit = document.querySelector('.img-upload__overlay');
// нужно решить, как данные будут отправляться на сервер и где они будут записываться
const hashtag = document.querySelector('.text__hashtags');
const yourComment = document.querySelector('.text__description');
// пишем функцию, которая будет работать после выбра изображения
// создаем переменную с допустимыми символами
const MAX_HASHTAG_COUNT = 5;
const VALID_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
// создаем пристин
const pristine = new Pristine(imageUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});


// пишем функцию закрытия модального окна
const closeModal = function() {
  imageUpload.reset();
  resetScale();
  resetEffect();
  imageEdit.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

// создаем функцию модального окна
const fieldOnFocuse = () =>
  document.activeElement === hashtag ||
  document.activeElement === yourComment;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !fieldOnFocuse()) {
    evt.preventDefault();
    closeModal();
  }
}

const showModal = function() {
  imageEdit.classList.remove('hidden');
  debugger
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

// закрываем окно
const onCancelButtonClick = function() {
  closeModal();
};

//открываем окно
const onFileInputChange = function() {
  showModal();
};

// делаем проверку на валидные символы
const isValidTag = function(tag) {
  VALID_SIMBOLS.test(tag);
};
// проверяем теги на совпадение условиям
const hasUniqueTags = function(tags) {
  const lowerCaseTags = tags.map((tag) => tag.lowerCaseTags());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};
// Проверяем допустимую длину коментария
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

// создаем функцию валидации тегов
const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtag,
  validateTags,
  'Неправильно заполнены хэштеги'
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};
// пишем обработчик событий для открытия/закрытия модального окна
export {onFileInputChange};
export {onCancelButtonClick};
export {onFormSubmit};
export {closeModal};


