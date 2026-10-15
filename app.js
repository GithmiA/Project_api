const BASE_URL = "https://api.freeprojectapi.com"; 

const loginFrom = document.getElementById("loginFrom");
const message = document.getElementById("message");
loginFrom.addEventListener("submit",async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
         message.textContent = "Please enter username and password";
         return;
    }
    try {
        const response = await fetch(`${BASE_URL}/api/BankLoan/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body: JSON.stringify({
                    username:username,
                    password:password
                })
            }
        );
        const data = await response.json();

        console.log("Response status :",response.status);
        console.log("Response data :",data);

        if (!response.ok || data.results !==true) {
            message.textContent = "Login failed";
            return;
        }
        message.textContent = "Login Successful!";
    }catch (error) {
        console.log("Error :",error);
        message.textContent = "Could not connect";
    } 
});