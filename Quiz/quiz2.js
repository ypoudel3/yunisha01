
function selectOption(button,questionName) {
    // Deselect all buttons
    const buttons = document.querySelectorAll(`button[name='${questionName}']`);
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Select the clicked button
    button.classList.add('selected');
}
function calculateScore() {
    let score = 0;
    const form = document.getElementById('quizForm');
    const selectedButtons = form.querySelectorAll('.option-button.selected');

    selectedButtons.forEach(button => {
        score += parseInt(button.value);
    });

    let scoreText = '';

    if (score <= 6) {
        scoreText = 'Your score is ' + score + '/24. You seem to be doing well mentally. Keep maintaining a positive outlook!';
    } else if (score >6  && score<=12 ) {
        scoreText = 'Your score is ' + score + '/24 You may be experiencing early mental health issues. Consider implying preventive measures, lifestyle changes or short term counseling.';
    } 
    else if (score>12 && score<= 18) {
        scoreText = 'Your score is ' + score + '/24 You may be experiencing moderate mental health issues. Consider talking to a professional.';
    } else {
        scoreText = 'Your score is ' + score + '/24 You might be struggling with mental health. It\'s important to seek support from a mental health professional.';
    }

    document.getElementById('scoreText').innerText = scoreText;
    document.getElementById('scoreRange').style.display = 'block';
}