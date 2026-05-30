import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDApiD62ZobtpOkoutak1SGwuXlwW0GDuo",
    
    authDomain: "creatorhub-9fc3d.firebaseapp.com",
    
    projectId: "creatorhub-9fc3d",
    
    storageBucket: "creatorhub-9fc3d.firebasestorage.app",
    
    messagingSenderId: "578610723202",
    
    appId: "1:578610723202:web:b38098afdd75c7268f779b"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// SIGNUP PAGE

const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {

  signupBtn.addEventListener("click", () => {

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    .then(() => {

      alert("Account Created");

      window.location.href = "login.html";

    })

    .catch((error) => {

      alert(error.message);

    });

  });

}


// LOGIN PAGE

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

  loginBtn.addEventListener("click", () => {

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    signInWithEmailAndPassword(
      auth,
      email,
      password
    )

    .then(() => {

      window.location.href = "dashboard.html";

    })

    .catch((error) => {

      alert(error.message);

    });

  });

}


// DASHBOARD PROTECTION

const userEmail =
  document.getElementById("userEmail");

if (
  userEmail ||
  window.location.pathname.includes("ai.html")
) {

  onAuthStateChanged(auth, (user) => {

    if (user) {

      if (userEmail) {
        userEmail.innerText = user.email;
      }

    }

    else {

      window.location.href = "login.html";

    }

  });

}


// LOGOUT

const logoutBtn =
  document.getElementById("logoutBtn");

if (logoutBtn) {

  logoutBtn.addEventListener("click", () => {

    signOut(auth);

  });

}
// AI SCRIPT GENERATOR

const generateBtn =
  document.getElementById("generateBtn");

if (generateBtn) {

  generateBtn.addEventListener("click", () => {

    const topic =
      document.getElementById("topicInput").value;

    const output =
      document.getElementById("scriptOutput");

    if (!topic) {

      output.innerText =
        "Please enter a topic.";

      return;
    }

    output.innerText =
`🔥 Hook:
Nobody talks about ${topic}, but they should.

🎬 Script:
Today I'm going to show you how ${topic} can help creators grow faster.

Step 1: Understand the basics.
Step 2: Apply it consistently.
Step 3: Track results and improve.

📢 CTA:
Follow for more creator tips.`;

  });

}