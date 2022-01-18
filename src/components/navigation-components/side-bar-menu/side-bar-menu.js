document.getElementById('burgerMenu').addEventListener('click', function () {
	document.querySelector('.side-menu').classList.toggle('side-menu_active');
	document.querySelector('.side-menu__wrapper').classList.toggle('side-menu__wrapper_active');
});

document.querySelector('.header-side-menu__button-close').addEventListener('click', function () {
	document.querySelector('.side-menu').classList.remove('side-menu_active');
	document.querySelector('.side-menu__wrapper').classList.remove('side-menu__wrapper_active');
});


let button_show_profile_header = document.getElementById('button-show-profile-header')

if(button_show_profile_header === null){
    console.log('This page hasnt the button')
}else{
    button_show_profile_header.addEventListener('click', function(){
        window.location.replace('./profile.html')
    })
}

