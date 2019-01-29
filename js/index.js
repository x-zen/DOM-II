// Your code goes here
const render = () => {
  const btnAttr = document.querySelectorAll('.btn');
  btnAttr[0].addEventListener('click', e => {
    console.log('stuff works now');
    e.stopPropagation();
    //  TweenMax.to('.btn', 1, {scale: 0.9});
  });

  console.log('Z3N')
}

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
console.log('Z3N')
