const link_show_copy_popup = document.getElementById('show_copy_popup');
if(link_show_copy_popup === null){
    console.log('this page hasnt popup')
}else{
    link_show_copy_popup.addEventListener('click', function () {
        document.querySelector('.toaster').classList.remove('toaster_disable');
        document.querySelector('.toaster').classList.toggle('toaster_active');
        setTimeout(() => {
            document.querySelector('.toaster').classList.remove('toaster_active');
            document.querySelector('.toaster').classList.toggle('toaster_disable');
        }, 2000);
        
    });

}


const link_show_popup = document.getElementById('show-download-popup');
if(link_show_popup === null){
    console.log('this page hasnt link-popup');
}else{
    link_show_popup.addEventListener('click', function(){
        document.querySelector('.popup').classList.remove('popup_disable');
        document.querySelector('.popup').classList.toggle('popup_active');
        setTimeout(() => {
            document.querySelector('.popup').classList.remove('popup_active');
            document.querySelector('.popup').classList.toggle('popup_disable');
        }, 3000);

    })
}


