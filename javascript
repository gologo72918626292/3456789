function toggleAdminPanel() {
    var adminPanel = document.getElementById("adminPanel");
    adminPanel.style.display = adminPanel.style.display === "none" ? "block" : "none";
}

function uploadImage() {
    var imageUpload = document.getElementById("imageUpload");
    var uploadStatus = document.getElementById("uploadStatus");
    
    if (imageUpload.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function(event) {
            var img = new Image();
            img.src = event.target.result;
            document.body.appendChild(img); // Display uploaded image on the page
            uploadStatus.innerHTML = "Image uploaded successfully!";
        };
        reader.readAsDataURL(imageUpload.files[0]);
    } else {
        uploadStatus.innerHTML = "Please select an image.";
    }
}
