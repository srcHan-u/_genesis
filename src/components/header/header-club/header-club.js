let button_profile = document.getElementById('button_profile')
if(button_profile === null){
    console.log('this page hasnt button-profile')
}else{
    button_profile.addEventListener('click', function(){
        window.location.replace('./profile.html')
    })
}