let cardBody = Array.from(document.getElementsByClassName('card-regestration__body'));
let cardBodyWithData = cardBody.filter((card) => {
	return card.getAttribute('data-name') === 'card-slide';
});
cardBodyWithData.forEach((card, index) => {
	card.setAttribute('data-index', `card-${index}`);
});
console.log(cardBodyWithData);
document.querySelectorAll('.checkbox').forEach((item, index) => {
	item.setAttribute('data-index', `card-${index}`);
	item.setAttribute('data-check', 'false');
	item.addEventListener('click', function () {
		cardBodyWithData.forEach((card) => {
			if (
				item.getAttribute('data-check') === 'false' &&
				card.getAttribute('data-index') === item.getAttribute('data-index')
			) {
				card.setAttribute('data-show', 'true');
				item.setAttribute('data-check', 'true');
			} else if (
				item.getAttribute('data-check') === 'true' &&
				card.getAttribute('data-index') === item.getAttribute('data-index')
			) {
				card.setAttribute('data-show', 'false');
				item.setAttribute('data-check', 'false');
			}
		});
	});
});
