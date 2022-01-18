
let multi_tabs_buttons = document.querySelectorAll('.multi-tabs__button');
multi_tabs_buttons.forEach((btn, index, arr) =>{
    btn.addEventListener('click', function(){
        let isTrue = ("true" === btn.getAttribute('data-active'));
        let btnDataName = btn.getAttribute('data-name');

        if(!isTrue){
            btn.setAttribute('data-active', 'true')
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].getAttribute('data-active') === 'true' && arr[i].getAttribute('data-name') !== btnDataName){
                    arr[i].setAttribute('data-active', 'false')
                }
            }
            showCards(btnDataName);
        }else{
            btn.setAttribute('data-active', 'false')
        }
        
    })
})

function showCards(btnName){
    console.log(btnName)
    let cardList = document.querySelectorAll('.events-my__list');
    console.log(cardList)
    cardList.forEach((card, index, arr) => {
        if (card.getAttribute('data-name') === btnName) {
            card.setAttribute('data-show', 'true');
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].getAttribute('data-show') === 'true' && arr[i].getAttribute('data-name') !== btnName){
                    arr[i].setAttribute('data-show', 'false');
                }
            }
        }
    })
  
}

