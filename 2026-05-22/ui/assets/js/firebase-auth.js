import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDc1Zttri2OlgkmLkgs47pDH5PJvAwrbik",
  authDomain: "fpg-s-project.firebaseapp.com",
  projectId: "fpg-s-project",
  storageBucket: "fpg-s-project.firebasestorage.app",
  messagingSenderId: "678264749558",
  appId: "1:678264749558:web:b6cddad808d2741c28dbd7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

let currentUser = null;
let requestInProgress = false;
const persistenceReady = setPersistence(auth, browserLocalPersistence).catch(() => {});

const emitAuthState = (state, user = currentUser) => {
  document.documentElement.dataset.authState = state;
  window.profileAuthUser = user
    ? {
        uid: user.uid,
        displayName: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || "",
        emailVerified: Boolean(user.emailVerified),
      }
    : null;
  window.dispatchEvent(new CustomEvent("profile-auth-change"));
};

const emitToast = (key) => {
  window.dispatchEvent(new CustomEvent("profile-auth-toast", { detail: key }));
};

const runAuthAction = async () => {
  if (requestInProgress) return;
  requestInProgress = true;
  emitAuthState("loading");

  try {
    await persistenceReady;
    if (currentUser) {
      await signOut(auth);
      currentUser = null;
      emitToast("auth.signedOut");
    } else {
      const credential = await signInWithPopup(auth, provider);
      currentUser = credential.user;
      emitToast("auth.signedIn");
    }
  } catch (error) {
    const errorKey =
      error?.code === "auth/popup-blocked"
        ? "auth.popupBlocked"
        : error?.code === "auth/popup-closed-by-user"
          ? "auth.popupClosed"
          : "auth.error";
    emitToast(errorKey);
  } finally {
    requestInProgress = false;
    emitAuthState(currentUser ? "signed-in" : "signed-out");
  }
};

window.addEventListener("profile-auth-request", runAuthAction);
document.addEventListener("click", (event) => {
  if (!event.target.closest?.("[data-profile-auth-action]")) return;
  event.preventDefault();
  runAuthAction();
});

emitAuthState("loading", null);
onAuthStateChanged(
  auth,
  (user) => {
    currentUser = user;
    emitAuthState(user ? "signed-in" : "signed-out", user);
  },
  () => {
    currentUser = null;
    emitAuthState("signed-out", null);
    emitToast("auth.error");
  },
);
