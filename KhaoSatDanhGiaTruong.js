function tickElement(element) {
    if (element) {
        var event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });

        element.dispatchEvent(event);
        console.log('Element ticked:', element);
    } else {
        console.log('Element not found');
    }
}

function randomizeInputValues() {
    // Tìm tất cả các input có class 'form-control'
    var inputs = document.querySelectorAll('input.form-control');
    inputs.forEach(input => {
        if (input.type === "text") {
            // Random số từ 2 đến 4
            var randomValue = Math.floor(Math.random() * 3) + 2;
            input.value = randomValue;
            console.log('Input set to:', randomValue, 'for element:', input);
        }
    });
}

// Tìm và tick các phần tử iCheck-helper
var elements = document.querySelectorAll('ins.iCheck-helper');
elements.forEach(tickElement);

// Random giá trị cho các input có class 'form-control'
randomizeInputValues();
