import { supabase } from "./config.js";

const imageInput = document.getElementById("imageInput");
const chooseBtn = document.getElementById("chooseImageBtn");
const uploadBtn = document.getElementById("uploadBtn");

const preview = document.getElementById("previewImage");
const imageUrl = document.getElementById("imageUrl");

const progressBar = document.getElementById("progressBar");
const uploadStatus = document.getElementById("uploadStatus");

const copyBtn = document.getElementById("copyBtn");
const getApiKeyBtn = document.getElementById("getApiKeyBtn");

/* Choose Image */

chooseBtn.addEventListener("click", () => {
    imageInput.click();
});

/* Preview */

imageInput.addEventListener("change", async () => {

    const file = imageInput.files[0];
    if (!file) return;

    uploadStatus.textContent = "Uploading...";
    progressBar.style.width = "20%";

    const fileName =
        Date.now() +
        "_" +
        file.name.replace(/\s+/g, "_");

    const { error } = await supabase.storage
        .from("NovaBox")
        .upload(fileName, file);

    if (error) {
        uploadStatus.textContent = error.message;
        progressBar.style.width = "0%";
        return;
    }

    progressBar.style.width = "70%";

    const { data } = supabase.storage
        .from("NovaBox")
        .getPublicUrl(fileName);


    progressBar.style.width = "100%";

    preview.src = data.publicUrl;

    imageUrl.value =
        `${location.origin}/i/${code}`;

    uploadStatus.textContent = "Upload success.";

});
/* Upload */

uploadBtn.addEventListener("click", async () => {

    const file = imageInput.files[0];

    if (!file) {
        alert("Choose an image first.");
        return;
    }

    uploadBtn.disabled = true;

    uploadStatus.textContent = "Uploading...";

    progressBar.style.width = "20%";

    const fileName =
        Date.now() +
        "_" +
        file.name.replace(/\s+/g, "_");

    progressBar.style.width = "50%";

    const { error } = await supabase.storage
        .from("NovaBox")
        .upload(fileName, file);

    if (error) {

        alert(error.message);

        uploadStatus.textContent = "Upload failed.";

        progressBar.style.width = "0%";

        uploadBtn.disabled = false;

        return;

    }

    progressBar.style.width = "100%";

    const { data } = supabase.storage
        .from("NovaBox")
        .getPublicUrl(fileName);

    imageUrl.value = data.publicUrl;

    uploadStatus.textContent = "Upload success.";

    uploadBtn.disabled = false;

});

/* Copy URL */

copyBtn.addEventListener("click", async () => {

    if (!imageUrl.value) return;

    await navigator.clipboard.writeText(imageUrl.value);

    alert("URL copied.");

});

/* API Key */

getApiKeyBtn.addEventListener("click", () => {

    location.href = "loginapikey.html";

});
