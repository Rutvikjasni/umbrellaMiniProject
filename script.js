function changeColor(color, element, bgColor) {
    const loader = document.getElementById("loader");
    const loaderImage = document.getElementById("loaderImage");
    const umbrella = document.getElementById("umbrella");
    const logo = document.getElementById("logo");


    // Change loader image & background
    loader.style.display = "block";
    loaderImage.src = `./images/${color} umbrella.png`;
    loader.style.backgroundColor = bgColor;

    // Hide umbrella
    umbrella.style.opacity = "0";
    logo.style.opacity = "0";


    // Remove selected class from all options
    document.querySelectorAll(".color-option").forEach(el => el.classList.remove("selected"));
    element.classList.add("selected");

    // Simulate loading time of 2 seconds
    setTimeout(() => {
        document.body.style.backgroundColor = bgColor;
        umbrella.src = `./images/${color} umbrella.png`;

        // Hide loader & show umbrella
        loader.style.display = "none";
        umbrella.style.opacity = "1";
        logo.style.opacity = "1";

    }, 2000);
}


function uploadLogo() {
    const file = document.getElementById('logoUpload').files[0];
    const errorMessage = document.getElementById('error-message');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInfo = document.getElementById('fileInfo');

    if (file) {
        const fileSize = file.size / 1024 / 1024;
        const fileType = file.type;

        if (!['image/png', 'image/jpeg'].includes(fileType)) {
            errorMessage.textContent = 'Only .png and .jpg files are allowed!';
            return;
        }

        if (fileSize > 5) {
            errorMessage.textContent = 'File size must be 5MB or less!';
            return;
        }

        errorMessage.textContent = '';
        const reader = new FileReader();
        reader.onload = function(e) {
            const logo = document.getElementById('logo');
            logo.src = e.target.result;
            logo.style.display = 'block';
            uploadBtn.textContent = file.name;
            fileInfo.style.display = 'flex';
        };
        reader.readAsDataURL(file);
    }
}

function removeLogo() {
    document.getElementById('logo').style.display = 'none';
    document.getElementById('uploadBtn').textContent = 'UPLOAD LOGO';
    document.getElementById('fileInfo').style.display = 'none';
    document.getElementById('logoUpload').value = '';
}
