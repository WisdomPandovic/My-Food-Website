function search() {
    var input, filter, cards, card, title, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName('card');
    var found = false;

    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        title = card.querySelector('.card-title');
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    }

    var noInputMessage = document.getElementById('noInputMessage');
    if (!found) {
        noInputMessage.style.display = 'block';
    } else {
        noInputMessage.style.display = 'none';
    }
}
