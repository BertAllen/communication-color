; (function () {
    angular.module("commColor", [])
        .component("quizComponent", {
            templateUrl: "app/components/quiz/quizform.html",
            controller: QuizController,
            controllerAs: "qc",
        })
    QuizController.$inject = ["QandAService"]
    function QuizController(QandAService) {
        const qc = this;
        qc.quiz = QandAService.questions();
        qc.answers = {
            B: 0,
            G: 0,
            R: 0,
            Y: 0
        };

        qc.quizTally = function (qz) {
            for (let i = 0; i < qz.length; i++) {
                let block = qz[i]
                qc.answers[block.answer] = qc.answers[block.answer] ? qc.answers[block.answer] + 1 : 1;
            }

            console.log(qc.answers);
            qz.push({"email": qz.email});
            qz.push({ "name": qz.name });
            localStorage.setItem(qz.email, JSON.stringify(qz));
            qc.answers.ready = true;
            QandAService.setAnswers(qc.answers);

        }

        qc.confirm = function (name, email) { 
            getMail = JSON.parse(localStorage.getItem(email));
            // console.log(getMail)
            // for(thing in getMail){ console.log(getMail[thing])}
            if (!getMail) { return }
            // debugger;
            if (email == getMail[24].email && name == getMail[25].name){
                qc.quiz = getMail;
                qc.answers.ready = true;
                qc.quizTally(qc.quiz);
                return;
            }
            else { alert("That's not a valid email, please enter a different one.") }
            return;
        }
    }


} ());