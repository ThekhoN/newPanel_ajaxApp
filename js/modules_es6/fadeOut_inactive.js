import classList from 'classlist-polyfill';

const fadeOut_inactive = () => {
  var _inactive = document.getElementsByClassName('inactive');
  //console.log('addClass fadeOut...');
  for(var i=0; i<_inactive.length; i++){
    _inactive[i].classList.add('fadeOutx99');
  }
};

export default fadeOut_inactive;
