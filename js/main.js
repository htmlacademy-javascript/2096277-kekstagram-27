const cancelButton = document.querySelector('#upload-cancel');
// Находим начальное состояния поля загрузки изображения
const fileField = document.querySelector('#upload-file');
// находим форму загрузки
const imageUpload = document.querySelector('.img-upload__form');
import { renderPictures } from './picture.js';
import { getPictures } from './data.js';
import { closeModal } from './form.js';
import {onFileInputChange} from './form.js';
import {onCancelButtonClick} from './form.js';
import {onFormSubmit} from './form.js';
renderPictures(getPictures());
closeModal();
fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
imageUpload.addEventListener('change', onFormSubmit);

// eslint-disable-next-line no-console
