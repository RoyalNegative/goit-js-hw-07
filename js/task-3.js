
// input#name-input öğesinde input olayı dinlenir
// Input'ta metin yazarken, mevcut değer span#name-output içine bir selamlama adı olarak yerleştirilir
// Input içindeki değer, kenarlardaki boşluklardan temizlenmiştir
// Input boşsa veya yalnızca boşluklar içeriyorsa, span içinde ad yerine "Anonymous" metni yerleştirilmelidir


const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const inputValue = nameInput.value.trim();
    
    if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputValue;
    }
});