const renderBackground = () => {
    const backgroundSection = document.getElementById('background-section');
    const img = new Image();
    img.src = '/cinema.jpg'; // Adjust the file path to match the location of your image
    img.alt = 'Cinema Background'; // Add alt text for accessibility

    img.onload = () => {
        backgroundSection.style.backgroundImage = `url("${img.src}")`;
        backgroundSection.style.width = '100%'; // Set the width to 100% of its container
        backgroundSection.style.height = '600px'; // Set a fixed height (adjust as needed)
        backgroundSection.style.backgroundSize = 'cover'; // Set the background size to cover
        backgroundSection.style.backgroundRepeat = 'no-repeat'; // Prevent background image from repeating
    };
};

renderBackground();
