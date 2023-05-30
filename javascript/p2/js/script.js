let input = document.getElementById("text_field");
let guessBtn = document.getElementById("guess_btn");
let div = document.getElementById("result");
let low = 1;
let high = 50;
let gameover = false;

let correct_ans = Math.floor(Math.random() * (high - low + 1) + low);
let step = 0;
console.log("number: " + correct_ans);

function guessNumber() {
    let guessAns = parseInt(input.value);

    if (isNaN(guessAns)) {
        alert('Field is empty');
    } else {
        step++;
        while (step <= 3 && !gameover) {
            if (guessAns == correct_ans) {
                // showMessage("success", 0);
                alert("You win");
                gameover = true;
                break;
            } else if (guessAns > correct_ans) {
                alert("Correct answer is smaller");
                break;
            } else {
                alert("Correct answer is greater");
                break;
            }

        }

        input.value = ""
        if (step <= 3 && !gameover) {
            console.log("step: " + step)
            showMessage('primary', step)
        }

        if (gameover) {
            console.log("step: " + step)
            showMessage('success', step)
            return
        }

    }

}

function showMessage(className, i) {
    div.className = i == 3 && !gameover ? `alert alert-danger` : `alert alert-${className}`;
    if (i <= 3 && !gameover) {
        div.innerHTML = ""
        div.appendChild(
            i == 3 ? document.createTextNode("You lose!") :
            document.createTextNode(i < 2 ? `${3 - i} chances left ` : `${3 - i} chance left`)
        );
    }
    if (gameover) {
        div.innerHTML = ""
        div.appendChild(document.createTextNode('You win!'))
        input.disabled = true
        guessBtn.disabled = true
    }

    if (i == 3) {
        input.disabled = true
        guessBtn.disabled = true
    }

}

function playAgain() {
    correct_ans = Math.floor(Math.random() * (high - low + 1) + low);
    step = 0
    gameover = false
    div.remove()
    input.disabled = false
    guessBtn.disabled = false
    div = document.createElement('div');
    document.querySelector('.mainContainer').insertBefore(div, document.querySelector('.subContainer'))

}
