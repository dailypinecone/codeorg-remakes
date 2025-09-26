// Script for Badminton Lineup Creator

function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    for (let i = 0; i < screens.length; i++){
        screens[i].classList.remove('active');
    }

    // Show selected screen
    document.getElementById(screenId).classList.add('active');
}