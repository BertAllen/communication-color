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
        qc.answers = QandAService.answers;

        qc.quizTally = function (qz) {
            for (let i = 0; i < qz.length; i++) {
                let block =qz[i]
                QandAService.answers[block.answer]++;
            }
            console.log(qc.answers)
            qc.answers.ready = true;
             QandAService.percent = {
            b: Math.round(QandAService.answers.B * 4.1666),
            g: Math.round(QandAService.answers.G * 4.1666),
            r: Math.round(QandAService.answers.R * 4.1666),
            y: Math.round(QandAService.answers.Y * 4.1666)
        }
        }

    }


} ());