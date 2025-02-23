// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded ✅");

    // Attach event listeners to all upload buttons
    document.querySelectorAll(".upload-btn").forEach(button => {
        button.addEventListener("click", function () {
            let inputField = this.previousElementSibling;
            inputField.click();
        });
    });

    // Handle file selection
    document.querySelectorAll(".upload-input").forEach(input => {
        input.addEventListener("change", function (event) {
            let file = event.target.files[0];
            let previewContainer = this.nextElementSibling;

            if (file) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    if (file.type.startsWith("image/")) {
                        previewContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" class="preview-img">`;
                    } else if (file.type.startsWith("video/")) {
                        previewContainer.innerHTML = `<video controls class="preview-video"><source src="${e.target.result}" type="${file.type}">Your browser does not support videos.</video>`;
                    } else {
                        previewContainer.innerHTML = `<p class="file-name">Uploaded: ${file.name}</p>`;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    });
});
