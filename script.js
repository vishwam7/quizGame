(function() {
    function Question(option, number) {
        this.option = option;
        this.number = number;
    }
    Question.prototype.randomQuestion = function() {
        if (number === 1) {
            console.log('1.what\'s the born year of ak? \n1.2000 \n2.2001 \n3.1999');
        } else if (number === 2) {
            console.log('2.which language you\'re learning currently?\n1.js\n2.html\n3.css\n4.php');
        } else if (number === 3) {
            console.log('3.Who has been appointed as the new chairman of Central Board of Indirect taxes and Customs (CBIC)?\n1.Johnjoseph\n2.VanajaN.Sarna\n3.MahenderSingh\n4.S Ramesh');
        } else if (number === 4) {
            console.log('4.India’s first-ever national police museum will establish in which city?\n1.Chennai\n2.Delhi\n3.Nagpur\n4.Kolkata');
        } else if (number === 5) {
            console.log('5.Who is the first person to reach North Pole?\n1.Robert Peary\n2.Rajesh Sharma\n3.Charles Hillary\n4.Johan don');
        }
    }
    Question.prototype.answer = function(callBack) {
        var sc;
        if (number == 1 && option == 1) {
            console.log('correct answer!!');
            sc = callBack(true);
        } else if (number == 2 && option == 1) {
            console.log('correct answer!!');
            sc = callBack(true);
        } else if (number == 3 && option == 4) {
            console.log('correct answer!!');
            sc = callBack(true);
        } else if (number == 4 && option == 2) {
            console.log('correct answer!!');
            sc = callBack(true);
        } else if (number == 5 && option == 1) {
            console.log('correct answer!!');
            sc = callBack(true);
        } else {
            console.log('incorrect answer!!!!');
            sc = callBack(false);
        }
        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('your score is ' + score);
        console.log('----------------------------------');
    }
    var rq = new Question('option', 'number');

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct)
                sc++;
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        number = Math.floor(Math.random() * 5) + 1;
        rq.randomQuestion();
        option = prompt('enter correct option number');

        if (option !== 'exit') {
            rq.answer(keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();