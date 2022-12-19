function viewLogin() {
    let overlay = document.getElementById("overlay");
    let loginWindow = document.getElementById("login-window");
    let signupWindow = document.getElementById("signup-window");
    overlay.style.display = "block";
    loginWindow.style.display = "block";
    fadeTo(overlay, 1, 250);
    fadeTo(loginWindow, 1, 250);
}

function viewLoginBack() {
    let overlay = document.getElementById("overlay");
    let loginWindow = document.getElementById("login-window");
    let signupWindow = document.getElementById("signup-window");
    overlay.style.display = "block";
    fadeTo(signupWindow, 0, 250);
    setTimeout(() => {
        signupWindow.style.display = "none";
    }, 500);
    setTimeout(() => {
        loginWindow.style.display = "block";
    }, 500);
    setTimeout(() => {
        fadeTo(loginWindow, 1, 250);
    }, 500);
}

function viewSignup() {
    let overlay = document.getElementById("overlay");
    let loginWindow = document.getElementById("login-window");
    let signupWindow = document.getElementById("signup-window");
    overlay.style.display = "block";
    fadeTo(loginWindow, 0, 250);
    setTimeout(() => {
        loginWindow.style.display = "none";
    }, 500);
    setTimeout(() => {
        signupWindow.style.display = "block";
    }, 500);
    setTimeout(() => {
        fadeTo(signupWindow, 1, 250);
    }, 500);
}

function hideAll() {
    hideLogin();
    hideSignup();
}

function hideLogin() {
    let overlay = document.getElementById("overlay");
    let loginWindow = document.getElementById("login-window");
    fadeTo(overlay, 0, 250);
    fadeTo(loginWindow, 0, 250);
    setTimeout(() => {
        overlay.style.display = "none";
    }, 500);
    setTimeout(() => {
        loginWindow.style.display = "none";
    }, 500);
}

function hideSignup() {
    let overlay = document.getElementById("overlay");
    let signupWindow = document.getElementById("signup-window");
    fadeTo(overlay, 0, 250);
    fadeTo(signupWindow, 0, 250);
    setTimeout(() => {
        overlay.style.display = "none";
    }, 500);
    setTimeout(() => {
        signupWindow.style.display = "none";
    }, 500);
}

function fadeTo(element, toValue = 1, duration = 500) {
    let fromValue = parseFloat(element.style.opacity) || 0;
    let startTime = Date.now();
    let framerate = 1000 / 60; // 60fps
    let interval = setInterval(() => {
	    let currentTime = Date.now();
        let timeDiff = (currentTime - startTime) / duration;
        let value = fromValue - (fromValue - toValue) * timeDiff;
        if (timeDiff >= 1) {
            clearInterval(interval);
            interval = 0;
        }
        element.style.opacity = value.toString();
    }, framerate)
}