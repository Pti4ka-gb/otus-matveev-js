function updateButtonState(input, button) {
    if (input.value.trim() === '') {
        button.classList.add('hidden');
    } else {
        button.classList.remove('hidden');
    }
}

function addParagraph(input, button, container, counter) {
    const text = input.value.trim();
    
    if (text === '') return;
    
    const newParagraph = document.createElement('p');
    newParagraph.className = 'paragraph';
    newParagraph.textContent = text;
    
    container.appendChild(newParagraph);
    
    const paragraphs = container.querySelectorAll('.paragraph');
    if (paragraphs.length > 3) {
        container.removeChild(paragraphs[0]);
    }
    
    input.value = '';
    
    updateButtonState(input, button);
    
    if (counter) {
        counter.textContent = container.querySelectorAll('.paragraph').length;
    }
    
    input.focus();
}

function initApp() {
    const textInput = document.getElementById('textInput');
    const addButton = document.getElementById('addButton');
    const paragraphsContainer = document.getElementById('paragraphsContainer');
    const paragraphCount = document.getElementById('paragraphCount');
    
    textInput.addEventListener('input', function() {
        updateButtonState(textInput, addButton);
    });
    
    addButton.addEventListener('click', function() {
        addParagraph(textInput, addButton, paragraphsContainer, paragraphCount);
    });
    
    textInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter' && !addButton.classList.contains('hidden')) {
            addParagraph(textInput, addButton, paragraphsContainer, paragraphCount);
        }
    });
    
    updateButtonState(textInput, addButton);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateButtonState, addParagraph };
}