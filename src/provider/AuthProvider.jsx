import React, { createContext, useEffect, useState } from "react";
import "sal.js/dist/sal.css";
import swal from "sweetalert";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { postPublicData } from "../BcckendConnection/postData";
import Swal from "sweetalert2";
import {
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth/web-extension";
import useAdmin from "../hook/useAdmin";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [logoutTimer, setLogoutTimer] = useState(null); // Track logout timer
  const subscription = 100;

  // Create user
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential; // Return the user credential object
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Propagate the error to the caller
    } finally {
      setLoading(false);
    }
  };
  // if there is server problem while login remove user from firebase

  const deleteCurrentUser = async () => {
    setLoading(false);
    if (auth.currentUser) {
      try {
        await deleteUser(auth.currentUser);
        console.log("User deleted successfully.");
      } catch (error) {
        console.error("Error deleting user:", error.message);
      }
    } else {
      console.log("No user is currently logged in.");
    }
  };
  // Sign in user
  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential; // Return the UserCredential object
    } catch (error) {
      console.error("Error signing in:", error);
      throw error; // Propagate the error to the caller
    } finally {
      setLoading(false);
    }
  };

  // Update user
  const updateUser = async (name, photo) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logoutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } finally {
      setLoading(false);
    }
  };
  const handleLogOut = async () => {
    // Check if the user is connected to the internet
    if (!navigator.onLine) {
      swal(
        "Network Error",
        "Please check your internet connection and try again.",
        "error"
      );
      return;
    }

    try {
      // Call the backend logout route (replace with your API function)
      const response = await postPublicData("/users/logout-user");
      console.log(response);

      if (response.statusCode === 200) {
        // Call the logout function locally
        logoutUser().then(async (res) => {
          console.log(res);
        });
      }
    } catch (error) {
      // Handle network or server errors
      console.error("Logout failed:", error);
      if (error.message.includes("NetworkError")) {
        swal(
          "Network Error",
          "Unable to reach the server. Please try again later.",
          "error"
        );
      } else {
        swal("Error", "An unexpected error occurred during logout.", "error");
      }
    }
  };
  // Sign in with Google
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Get the credential from the result
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("Google Access Token:", token);

        const user = result.user;
        setUser(user);

        // Return the user data and token for further use
        return { user, token };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(
          "Error during Google sign-in:",
          errorCode,
          errorMessage,
          email,
          credential
        );

        // Return error details in case of failure
        return { error: { errorCode, errorMessage, email } };
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //Sign in with apple
  const appleProvider = new OAuthProvider("apple.com");

  const signInWithApple = () => {
    setLoading(true);
    return signInWithPopup(auth, appleProvider)
      .then((result) => {
        // Get the credential from the result
        const credential = OAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("Apple Access Token:", token);

        const user = result.user;
        setUser(user);

        // Return the user data and token for further use
        return { user, token };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = OAuthProvider.credentialFromError(error);

        console.error(
          "Error during Apple sign-in:",
          errorCode,
          errorMessage,
          email,
          credential
        );

        // Return error details in case of failure
        return { error: { errorCode, errorMessage, email } };
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //Sign in with facebook
  const facebookProvider = new FacebookAuthProvider();
  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // Get the credential from the result
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("Facebook Access Token:", token);

        const user = result.user;
        setUser(user);

        // Return the user data and token for further use
        return { user, token };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.error(
          "Error during Facebook sign-in:",
          errorCode,
          errorMessage,
          email,
          credential
        );

        // Return error details in case of failure
        return { error: { errorCode, errorMessage, email } };
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const resetPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      return {
        success: true,
        message: "Password reset email sent! Please check your inbox.",
      };
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during password reset:", errorCode, errorMessage);
      return {
        success: false,
        message:
          "Error sending reset email. Please check the email address and try again.",
      };
    } finally {
      setLoading(false);
    }
  };
  // Monitor user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("current user:", currentUser);

      if (currentUser) {
        // Set a 5-hour (18000 seconds) timeout for automatic logout
        const timer = setTimeout(() => {
          handleLogOut(); // Log the user out after 5 hours
        }, 18000000); // 5 hours in milliseconds

        // Store the logout timer ID so we can clear it if the user logs out manually
        setLogoutTimer(timer);
      }
    });

    return () => {
      unSubscribe();
      if (logoutTimer) {
        clearTimeout(logoutTimer);
        setUser(null);
      }
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logoutUser,
    updateUser,
    subscription,
    signInWithGoogle,
    resetPassword,
    signInWithFacebook,
    signInWithApple,
    deleteCurrentUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
