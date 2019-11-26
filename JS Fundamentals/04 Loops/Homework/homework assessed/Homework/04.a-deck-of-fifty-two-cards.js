for (let i = 1; i <= 13; i++) {
    let suitSet = '';

    for (let suit = 1; suit <= 4; suit++) {
        let cardSign = '';

        switch (i) {
            case 1:
                cardSign = '2 of ';
                break;
            case 2:
                cardSign = '3 of ';
                break;
            case 3:
                cardSign = '4 of ';
                break;
            case 4:
                cardSign = '5 of ';
                break;
            case 5:
                cardSign = '6 of ';
                break;
            case 6:
                cardSign = '7 of ';
                break;
            case 7:
                cardSign = '8 of ';
                break;
            case 8:
                cardSign = '9 of ';
                break;
            case 9:
                cardSign = '10 of ';
                break;
            case 10:
                cardSign = 'J of ';
                break;
            case 11:
                cardSign = 'Q of ';
                break;
            case 12:
                cardSign = 'K of ';
                break;
            case 13:
                cardSign = 'A of ';
                break;
        }
        switch (suit) {
            case 1:
                suitSet += cardSign + 'spades, ';
                break;
            case 2:
                suitSet += cardSign + 'clubs, ';
                break;
            case 3:
                suitSet += cardSign + 'hearts, ';
                break;
            case 4:
                suitSet += cardSign + 'dimonds';
                break;
        }
    }
    console.log(suitSet);
}