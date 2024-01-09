document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('input[name="display"]');

    function appendValue(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastChar() {
        display.value = display.value.toString().slice(0, -1);
    }

    function calculateResult() {
        display.value = eval(display.value);
    }

    //Event Listeners for numbers and operator button
    document.querySelectorAll('.calculator input[type="button"]').forEach(function (button) {
        button.addEventListener('click', function() {
            const buttonValue = this.value;

            switch (buttonValue) {
                case 'AC':
                    clearDisplay();
                    break;
                
                case 'DE':
                    deleteLastChar();
                    break;

                case '=':
                    calculateResult();
                    break;

                default:
                    appendValue(buttonValue);
                    break;
            }
        });
    });
});
