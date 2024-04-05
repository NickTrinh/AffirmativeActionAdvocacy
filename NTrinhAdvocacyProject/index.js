let themeButton = document.getElementById("theme-button");
let signNowButton = document.getElementById("sign-now-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

const addSignature = () => {
  const name = document.getElementById("sign-petition").elements["name"].value;

  const hometown = document.getElementById("sign-petition").elements["hometown"].value;

  const emailaddress = document.getElementById("sign-petition").elements["email"].value

  // Format the new signature
  const newSignature = document.createElement("p");
  newSignature.innerText = "🖊️ " + name + " from " + hometown + " supports this."

  // Remove old count of signatures
  const oldCounter = document.getElementById("counter");
  oldCounter.remove();

  const signaturesSection = document.querySelector(".signatures");

  signaturesSection.appendChild(newSignature);

  let count = document.querySelectorAll(".signatures p").length;

  const newCounter = document.createElement("p");
  newCounter.id = "counter";
  newCounter.innerText = "🖊️ " + count + " people have signed this petition and support this cause.";

  signaturesSection.appendChild(newCounter);
}


signNowButton.addEventListener("click", addSignature);
themeButton.addEventListener("click", toggleDarkMode);