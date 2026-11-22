import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function loginWithEmail(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
}
