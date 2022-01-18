import '../scss/index.scss';
import '../components/components';

// (function ($) {
  
// })(jQuery);


let gridNavMenu = document.getElementById('gridNavMenu');
let gridBody = document.querySelector('.grid__menu');
if (gridNavMenu === undefined) {
    console.log("Error: this page hasn't the button grid-nav-menu")
}else{
    gridNavMenu.addEventListener('click', function(){
        let isTrue = gridNavMenu.getAttribute('data-show');
        if(isTrue === 'false'){
            gridNavMenu.setAttribute('data-show', 'true')
            gridNavMenu.style.transition = '1s';
            gridNavMenu.style.bottom = '-5px';
            // gridBody.style.opacity = '1';
        }else if(isTrue === 'true') {
            gridNavMenu.setAttribute('data-show', 'false')
            gridNavMenu.style.transition = '1s';
            gridNavMenu.style.bottom = '-170px';
        }
    })
}
