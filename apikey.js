import { supabase } from "./config.js";

const emailText = document.getElementById("userEmail");
const apiKeyInput = document.getElementById("apikey");

const copyBtn = document.getElementById("copyApiKeyBtn");
const generateBtn = document.getElementById("generateApiKeyBtn");
const logoutBtn = document.getElementById("logoutBtn");

async function loadUser(){

    const {
        data:{user}
    } = await supabase.auth.getUser();

    if(!user){

        location.href="loginapikey.html";
        return;

    }

    emailText.textContent=user.email;

    const { data } = await supabase
    .from("apikeys")
    .select("*")
    .eq("email",user.email)
    .single();

    if(data){

        apiKeyInput.value=data.apikey;

    }

}

function randomKey(){

    return "NBX_" +
    crypto.randomUUID()
    .replace(/-/g,"")
    .substring(0,32);

}

generateBtn.addEventListener("click",async()=>{

    const {

        data:{user}

    }=await supabase.auth.getUser();

    const key=randomKey();

    await supabase
    .from("apikeys")
    .upsert({

        email:user.email,
        apikey:key

    });

    apiKeyInput.value=key;

});

copyBtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(apiKeyInput.value);

    alert("API Key copied.");

});

logoutBtn.addEventListener("click",async()=>{

    await supabase.auth.signOut();

    location.href="loginapikey.html";

});

loadUser();
