
const button_download_section_close = document.getElementById('button-download_section-close');

if(button_download_section_close === null){
    console.log("Error: this page hasn't the button of the section-download")
}else{
    button_download_section_close.addEventListener('click', function(){
        document.querySelector('.download-section').classList.remove('download-section_active');
        document.querySelector('.download-section').classList.toggle('download-section_disable');
    })
}