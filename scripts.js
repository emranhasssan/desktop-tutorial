
        // Get all the words in the list
    const words = document.querySelectorAll('li');
        
        // Add a click event listener to each word
    words.forEach(word => {
    word.addEventListener('click', function() {
                // Get the translation of the clicked word
    const translation = this.getAttribute('data-translation');
                
    // Display the translation on the page
    document.querySelector('#translation').innerHTML = translation;
 });
 });
// Get all the letters of the alphabet
const letters = document.querySelectorAll('td');

// Add a click event listener to each letter
letters.forEach(letter => {
    letter.addEventListener('click', function() {
        // Get the pronunciation of the clicked letter
        const pronunciation = this.getAttribute('data-pronunciation');
        
        // Use the Web Audio API to play the pronunciation
        const audioContext = new AudioContext();
        const audioSource = audioContext.createBufferSource();
        audioSource.buffer = pronunciation;
        audioSource.connect(audioContext.destination);
        audioSource.start(0);
    });
});