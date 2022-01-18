
let button_show_profile = document.getElementById('button-show-profile');
if(button_show_profile === null){
    console.log('This page hasnt the button')
}else{
    button_show_profile.addEventListener('click', function(){
        window.location.replace('./profile.html')
    })
}


let button_show_registration = document.getElementById('button-show-event-registration');
console.log(button_show_registration)
if(button_show_registration === null){
    console.log('This page hasnt the button')
}else{
    button_show_registration.addEventListener('click', function(){
        window.location.replace('./event-registration.html')
    })
}

let button_event_page_show_download_popup = document.getElementById('button-event_page-show_download_popup');
if(button_event_page_show_download_popup === null){
    console.log("Error: this page hasn't the button of event page");
}else{
    button_event_page_show_download_popup.addEventListener('click', function(){
        document.querySelector('.download-section').classList.remove('download-section_disable');
        document.querySelector('.download-section').classList.toggle('download-section_active');
    })
}