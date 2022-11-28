const blockPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const fillTemplate = (data) => {
  const fragmentPosts = document.createDocumentFragment();

  data.forEach(({
    url,
    likes,
    comments
  }) => {
    const picture = pictureTemplate.cloneNode(true);
    const photo = picture.querySelector('.picture__img');
    const likeCounter = picture.querySelector('.picture__likes');
    const commentCounter = picture.querySelector('.picture__comments');

    photo.src = url;
    likeCounter.textContent = likes;
    commentCounter.textContent = comments.length;

    fragmentPosts.append(picture);
  });

  blockPictures.append(fragmentPosts);
};

export { fillTemplate };
