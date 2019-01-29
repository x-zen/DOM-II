// Your code goes here

const btnAttr = document.querySelector('.btn');
btnAttr[0].addEventListener('click', e => {
  console.log('stuff works now');
  e.stopPropagation();
});

/*
navTxt[i].forEach(link => {
  link.addEventListener;
});

navTxt[0].addEventListener('mouseover', e =>  {
  e.stopPropagation();
  TweenMax.to(e.currentTarget, 2, {
    textDecoration: 'lineThrough'
  });
});
*/
