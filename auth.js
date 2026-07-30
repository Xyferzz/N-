import { supabase } from "./config.js";

const emailInput = document.getElementById("email");
const sendBtn = document.getElementById("sendMagicLinkBtn");
const status = document.getElementById("statusMessage");

sendBtn.addEventListener("click", async () => {

    const email = emailInput.value.trim();

    if (!email) {
        status.textContent = "Please enter your email.";
        status.className = "status-error";
        return;
    }

    sendBtn.disabled = true;
    status.textContent = "Sending Magic Link...";
    status.className = "";

    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: window.location.origin + "/getapikey.html"
        }
    });

    if (error) {
        status.textContent = error.message;
        status.className = "status-error";
        sendBtn.disabled = false;
        return;
    }

    status.textContent = "Magic Link sent! Check your email.";
    status.className = "status-success";
    sendBtn.disabled = false;

});
