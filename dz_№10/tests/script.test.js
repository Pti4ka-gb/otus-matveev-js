const { updateButtonState, addParagraph } = require('../script.js');

describe('updateButtonState', () => {
    test('скрывает кнопку, если поле ввода пустое', () => {
        const mockInput = { value: '' };
        const mockButton = { classList: { add: jest.fn(), remove: jest.fn() } };
        
        updateButtonState(mockInput, mockButton);
        
        expect(mockButton.classList.add).toHaveBeenCalledWith('hidden');
        expect(mockButton.classList.remove).not.toHaveBeenCalled();
    });
    
    test('показывает кнопку, если поле ввода не пустое', () => {
        const mockInput = { value: 'Текст' };
        const mockButton = { classList: { add: jest.fn(), remove: jest.fn() } };
        
        updateButtonState(mockInput, mockButton);
        
        expect(mockButton.classList.remove).toHaveBeenCalledWith('hidden');
        expect(mockButton.classList.add).not.toHaveBeenCalled();
    });
    
    test('скрывает кнопку, если в поле только пробелы', () => {
        const mockInput = { value: '   ' };
        const mockButton = { classList: { add: jest.fn(), remove: jest.fn() } };
        
        updateButtonState(mockInput, mockButton);
        
        expect(mockButton.classList.add).toHaveBeenCalledWith('hidden');
    });
});

describe('addParagraph', () => {
    let mockInput, mockButton, mockContainer, mockCounter;
    
    beforeEach(() => {
        mockInput = { value: '', focus: jest.fn() };
        mockButton = { classList: { add: jest.fn() } };
        mockContainer = {
            appendChild: jest.fn(),
            querySelectorAll: jest.fn(),
            removeChild: jest.fn()
        };
        mockCounter = { textContent: '' };
    });
    
    test('не добавляет параграф, если текст пустой', () => {
        mockInput.value = '';
        
        addParagraph(mockInput, mockButton, mockContainer, mockCounter);
        
        expect(mockContainer.appendChild).not.toHaveBeenCalled();
    });
    
    test('добавляет параграф с правильным текстом', () => {
        mockInput.value = 'Тестовый параграф';
        mockContainer.querySelectorAll.mockReturnValue([]);
        
        addParagraph(mockInput, mockButton, mockContainer, mockCounter);
        
        expect(mockContainer.appendChild).toHaveBeenCalled();
        const newParagraph = mockContainer.appendChild.mock.calls[0][0];
        expect(newParagraph.tagName).toBe('P');
        expect(newParagraph.textContent).toBe('Тестовый параграф');
    });
    
    test('очищает поле ввода после добавления', () => {
        mockInput.value = 'Текст';
        mockContainer.querySelectorAll.mockReturnValue([]);
        
        addParagraph(mockInput, mockButton, mockContainer, mockCounter);
        
        expect(mockInput.value).toBe('');
    });
    
    test('скрывает кнопку после добавления', () => {
        mockInput.value = 'Текст';
        mockContainer.querySelectorAll.mockReturnValue([]);
        
        addParagraph(mockInput, mockButton, mockContainer, mockCounter);
        
        expect(mockButton.classList.add).toHaveBeenCalledWith('hidden');
    });
    
    test('обновляет счетчик параграфов', () => {
        mockInput.value = 'Текст';
        mockContainer.querySelectorAll.mockReturnValue([{}, {}, {}]);
        
        addParagraph(mockInput, mockButton, mockContainer, mockCounter);
        
        expect(mockCounter.textContent).toBe('3');
    });
    
    test('удаляет первый параграф, если их больше 3', () => {
        mockInput.value = 'Четвертый параграф';
        
        const mockParagraphs = [
            { textContent: 'Первый' },
            { textContent: 'Второй' },
            { textContent: 'Третий' },
            { textContent: 'Четвертый' }
        ];
        
        mockContainer.querySelectorAll.mockReturnValue(mockParagraphs);
        
        addParagraph(mockInput, mockButton, mockContainer, mockCounter);
        
        expect(mockContainer.removeChild).toHaveBeenCalledWith(mockParagraphs[0]);
    });
    
    test('не удаляет параграфы, если их 3 или меньше', () => {
        mockInput.value = 'Текст';
        
        mockContainer.querySelectorAll.mockReturnValue([
            { textContent: 'Первый' },
            { textContent: 'Второй' },
            { textContent: 'Третий' }
        ]);
        
        addParagraph(mockInput, mockButton, mockContainer, mockCounter);
        
        expect(mockContainer.removeChild).not.toHaveBeenCalled();
    });
});