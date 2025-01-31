//your code here
 document.addEventListener("DOMContentLoaded", () => {
            const imageContainer = document.getElementById("image-container");
            const resetButton = document.getElementById("reset");
            const verifyButton = document.getElementById("verify");
            const message = document.getElementById("para");
            const header = document.getElementById("h");

            let images = ["img1", "img2", "img3", "img4", "img5"];
            let selectedImages = [];
            let repeatedImage = images[Math.floor(Math.random() * images.length)];
            images.push(repeatedImage);
            images = images.sort(() => Math.random() - 0.5);

            images.forEach((imgClass, index) => {
                const img = document.createElement("img");
                img.classList.add(imgClass);
                img.dataset.class = imgClass;
                img.addEventListener("click", () => handleImageClick(img));
                imageContainer.appendChild(img);
            });

            function handleImageClick(img) {
                if (selectedImages.includes(img) || selectedImages.length >= 2) return;
                selectedImages.push(img);
                resetButton.style.display = "block";

                if (selectedImages.length === 2) {
                    verifyButton.style.display = "block";
                }
            }

            resetButton.addEventListener("click", () => {
                selectedImages = [];
                verifyButton.style.display = "none";
                resetButton.style.display = "none";
                message.innerHTML = "";
            });

            verifyButton.addEventListener("click", () => {
                if (selectedImages[0].dataset.class === selectedImages[1].dataset.class) {
                    message.innerHTML = "You are a human. Congratulations!";
                } else {
                    message.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
                }
                verifyButton.style.display = "none";
            });
        });