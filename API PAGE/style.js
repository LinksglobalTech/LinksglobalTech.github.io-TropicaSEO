document.getElementById('seo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('inputField').value;
    document.getElementById('result').textContent = `You entered: ${input}`;
    // Add your API call here
});
