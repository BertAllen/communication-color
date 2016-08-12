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

            console.log(qc.answers)
            qc.answers.ready = true;
            QandAService.setAnswers(qc.answers);

        }

    }


} ());