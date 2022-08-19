


            // *------------ SHOW MENU ------------*/

            const toggleBtn = document.querySelector("#nav-toggle");
            const navMenu = document.querySelector("#nav-menu");
            function menu() {
                if (divPalette.classList.contains('show')) {
                    theme();
                }
                navMenu.classList.toggle('show');
                toggleBtn.classList.toggle('bx-menu');
                toggleBtn.classList.toggle('bx-left-arrow-alt');
            }




            /*------------ COUNTER ------------*/
            const scoreLab = document.querySelector("#score-lab");
            const titleDiv = document.querySelector("#title-div");
            const navItem = document.querySelectorAll(".nav_item");
            const navTitle = document.querySelectorAll(".nav_title");
            const scoreNav = document.querySelectorAll(".score_lab");
            var num = localStorage.getItem('selected-num');
            var scoreArray = JSON.parse(localStorage.getItem('score-array'));

            if (num === null) {
                scoreArray = [0, 0, 0, 0, 0];
                num = 0;
                localStorage.setItem('selected-num', num);
                localStorage.setItem('score-array', JSON.stringify(scoreArray));
                scoreLab.innerHTML = scoreArray[num];
                titleDiv.innerHTML = navTitle[num].textContent;
            }

            for (var i = 0; i < navItem.length; i++) {
                if (scoreArray[i] === null) {
                    scoreArray[i] = 0;
                    scoreNav[i].innerHTML = 0;
                } else {
                    scoreNav[i].innerHTML = scoreArray[i];
                }
            }

            localStorage.setItem('selected-num', num);

            navItem.forEach(n => n.addEventListener("click", function act(n) {
                var y = this.textContent;
                for (var i = 0; i < navItem.length; i++) {
                    var x = navItem[i].textContent;
                    if (x === y) {
                        num = i;
                        menu();
                        scoreLab.innerHTML = scoreArray[num];
                        titleDiv.innerHTML = navTitle[num].textContent;
                        localStorage.setItem('selected-num', num);
                    }
                }
            }));

            /*------------ SHOW SCORE ------------*/
            const selectedScore = scoreArray[num];

            scoreLab.innerHTML = scoreArray[num];
            titleDiv.innerHTML = navTitle[num].textContent;

            function incre_score() {
                const selectedScore = scoreArray[num];
                var score = selectedScore;
                score++;
                scoreLab.innerHTML = score;
                scoreArray[num] = score;
                scoreNav[num].innerHTML = score;
                localStorage.setItem('score-array', JSON.stringify(scoreArray));
            }

            function reset_score() {
                score = 0;
                scoreLab.innerHTML = score;
                scoreArray[num] = score;
                scoreNav[num].innerHTML = score;
                localStorage.setItem('score-array', JSON.stringify(scoreArray));
            }
/*-----------------------------------*/










