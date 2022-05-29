function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    let encodeButton = buttons[0].textContent == 'Encode and send it' ? buttons[0] : buttons[1];
    let decodeButton = buttons[0].textContent == 'Encode and send it' ? buttons[1] : buttons[0];

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode(event) {
        let input = event.target.parentNode.querySelector('textarea');
        let text = input.value;
        let encodedText = '';

        for (let i = 0; i < text.length; i++) {
            let ascii = text[i].charCodeAt(0) + 1;
            let letter = String.fromCharCode(ascii);
            encodedText += letter;
        }

        let decodeTextArea = decodeButton.parentNode.querySelector('textarea');
        decodeTextArea.value = encodedText;
        event.target.parentNode.querySelector('textarea').value = '';
    };

    function decode(event) {
        let input = event.target.parentNode.querySelector('textarea');
        let text = input.value;
        let encodedText = '';

        for (let i = 0; i < text.length; i++) {
            let ascii = text[i].charCodeAt(0) - 1;
            let letter = String.fromCharCode(ascii);
            encodedText += letter;
        }

        let decodeTextArea = decodeButton.parentNode.querySelector('textarea');
        decodeTextArea.value = encodedText;
    };
};