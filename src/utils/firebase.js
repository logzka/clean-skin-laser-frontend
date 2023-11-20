/* eslint-disable */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc, setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1KWWw6yg_w28PcmVhQu0GYfsJmtjmne4",
    authDomain: "d-aesthetic-studio.firebaseapp.com",
    projectId: "d-aesthetic-studio",
    storageBucket: "d-aesthetic-studio.appspot.com",
    messagingSenderId: "204812457568",
    appId: "1:204812457568:web:72c1b208959e22dc205505",
    measurementId: "G-02JFQHW0DZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();

/**
 * Add new Collection
 * @param {*} collectionKey
 * @param {*} objectsToAdd
 * @param {string} field
 */
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = 'name') => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd
        .forEach((obj) => {
            console.log(obj);
            const docRef = doc(collectionRef, obj[field].toLowerCase());
            batch.set(docRef, obj);
        });

    console.log('objectsToAdd', objectsToAdd);

    await batch.commit();
};

/**
 * Get Collection
 * @param {string} collectionKey
 */
export const getCollection = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    return await querySnapshot.docs
        .map((snapShot) => snapShot.data());
};

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

/**
 * Create User Doc. From Auth
 * @param {*} userAuth
 * @returns user doc. ref.
 */
export const createUserDocFromAuth = async (userAuth, userInfo) => {
    if (!userAuth) return;

    const {
        displayName,
        email,
    } = userAuth;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    const isUserExist = userSnapShot.exists();
    const createdAt = new Date();

    if (!isUserExist) {
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...userInfo,
            });
        } catch (error) {
            console.error(error);
        }
    }

    return userDocRef;
};

/**
 * Create Auth User With Email And Password
 * @param {*} email
 * @param {*} password
 * @returns response
 */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign In Auth User With Email And Password
 * @param {*} email
 * @param {*} password
 * @returns response
 */
 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

/**
 * Sign Out
 * @returns
 */
export const signOutUser = async () => await signOut(auth);

/**
 * Listen onAuthStateChanged
 * @param {*} callback
 * @returns
 */
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
