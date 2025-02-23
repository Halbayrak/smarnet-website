document.addEventListener("DOMContentLoaded", function () {
    // Select all file input fields
    const fileInputs = document.querySelectorAll(".file-upload");

    fileInputs.forEach(input => {
        input.addEventListener("change", function (event) {
            const file = event.target.files[0];
            if (!file) return;

            const previewContainer = event.target.parentElement.querySelector(".preview");

            // Clear previous preview
            previewContainer.innerHTML = "";

            // Create an element to display the file
            const fileType = file.type.split("/")[0]; // Get file type (image/video)
            let mediaElement;

            if (fileType === "image") {
                mediaElement = document.createElement("img");
                mediaElement.classList.add("uploaded-image");
            } else if (fileType === "video") {
                mediaElement = document.createElement("video");
                mediaElement.setAttribute("controls", "true");
                mediaElement.classList.add("uploaded-video");
            } else {
                alert("Only image and video files are supported.");
                return;
            }

            // Create URL and set as source
            const fileURL = URL.createObjectURL(file);
            mediaElement.src = fileURL;

            // Append media to the preview container
            previewContainer.appendChild(mediaElement);
        });
    });
});
