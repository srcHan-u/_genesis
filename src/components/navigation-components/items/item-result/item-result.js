
let arrayOflabelsOfitemResult = document.querySelectorAll('.header-item-result__label');
let arrayOfTitlesOfitemResult = document.querySelectorAll('.header-item-result__title');

arrayOflabelsOfitemResult.forEach((item) => {
	console.log(item.innerHTML);
});
arrayOfTitlesOfitemResult.forEach((item) => {
	console.log(item.textContent);
});

document.querySelectorAll('.body-item-result__button').forEach(btn =>{
    btn.addEventListener('click', function(){
        document.location.href = "./result-details.html";
    })
})