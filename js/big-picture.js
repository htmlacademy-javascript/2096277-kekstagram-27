//Создаем переменную с секцией для изоборажений
const bigPicture = document.querySelector('.big-picture');
// Создали комментарий для изображения
const commentList = document.querySelector('.social__comments');
//кнопка для отправки комментариев
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('.body');
//кнопка для выхода
const cancelButton = document.querySelector('.big-picture__cancel');

/*
Создаем комент, используя деструктуризацию объекта
*/
const createComment = function({avatar, name, message}) {
  const comment = document.createElement('li');
  comment.innerHTML =
    '<img class = "social__picture" src = "" alt = "" width="35" height = "35"><p class = "social__text"></p>';
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = function(comments) {
  commentList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.append(fragment);
};

const hideBigPicture = function() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = function() {
  hideBigPicture();
};

const renderPictureDetails = function({ url, likes, description }) {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = function(data) {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);

  renderPictureDetails(data);
  renderComments(data.comments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
