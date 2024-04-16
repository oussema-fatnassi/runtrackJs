// progress bar

// function scroll() {
//     let body = document.querySelector('body');
//     let footer = document.getElementById('footer_bar');
//     let scroll = document.documentElement.scrollTop;
//     let height = body.scrollHeight - window.innerHeight;
//     let percent = (scroll / height) * 100;
//     footer.style.width = percent + '%';
// }

function scroll() {
    let body = document.querySelector('body');
    let footer = document.querySelector('footer');
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = body.scrollHeight;
    let height = documentHeight - windowHeight;
    
    // Calculate the scroll percentage from 0 to 100
    let percent = (scrollPosition / height) * 100;

    // Ensure the percentage is within the range of 0 to 100
    percent = Math.min(100, Math.max(0, percent));

    // Apply styles based on the scroll percentage
    if (percent >= 0 && percent < 25) {
        footer.style.backgroundColor = "#944b94";
    } else if (percent >= 25 && percent < 50) {
        footer.style.backgroundColor = "#d75a88";
    } else if (percent >= 50 && percent < 75) {
        footer.style.backgroundColor = "#ff7e71";
    } else if (percent >= 75 && percent <= 100) {
        footer.style.backgroundColor = "#ffb25f";
    }

    console.log(percent);
}

window.addEventListener('scroll', scroll);
