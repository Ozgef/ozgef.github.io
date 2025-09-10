document.addEventListener('DOMContentLoaded', () => {
    const fontSizeSlider = document.getElementById('font-size');
    const contrastToggle = document.getElementById('contrast');
    
    // Zmiana wielkości czcionki
    fontSizeSlider.addEventListener('input', () => {
        document.body.style.fontSize = `${fontSizeSlider.value}px`;
    });

    // Zmiana kontrastu
    contrastToggle.addEventListener('change', () => {
        if (contrastToggle.checked) {
            document.body.style.backgroundColor = '#000';
            document.body.style.color = '#fff';
            document.querySelector('header').style.backgroundColor = '#222';
            document.querySelector('footer').style.backgroundColor = '#222';
        } else {
            document.body.style.backgroundColor = '#f0f0f0';
            document.body.style.color = '#333';
            document.querySelector('header').style.backgroundColor = '#333';
            document.querySelector('footer').style.backgroundColor = '#333';
        }
    });
});
