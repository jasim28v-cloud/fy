// 💖 ZHARE 2026 - Pink Rose Glass Configuration
// Firebase: dokf-33e47 | Cloudinary: go29_gm
// ✨ PREMIUM: Notifications + Compact Grid + Delete Videos

const firebaseConfig = {
    apiKey: "AIzaSyCpsELZB_QUxVspsw-leit7t4zIzco4AKA",
    authDomain: "dokf-33e47.firebaseapp.com",
    databaseURL: "https://dokf-33e47-default-rtdb.firebaseio.com",
    projectId: "dokf-33e47",
    storageBucket: "dokf-33e47.firebasestorage.app",
    messagingSenderId: "259177277381",
    appId: "1:259177277381:web:fedfdd27aef84fa1b4cdac",
    measurementId: "G-B89W16NXQB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Cloudinary Configuration
const CLOUD_NAME = "go29_gm";
const UPLOAD_PRESET = "qlathl0k";

// 💖 ZHARE Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #be185d, #db2777, #ec4899)",
    "linear-gradient(135deg, #9d174d, #be185d, #db2777)",
    "linear-gradient(135deg, #831843, #9d174d, #be185d)",
    "linear-gradient(135deg, #f472b6, #ec4899, #db2777)",
    "linear-gradient(135deg, #fbcfe8, #f472b6, #ec4899)",
    "linear-gradient(135deg, #1a0a14, #2d0f24, #f472b6)"
];

// 💖 App Info
const APP_NAME = "ZHARE";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#ec4899";
const SECONDARY_COLOR = "#f472b6";

console.log('💖 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #ec4899; font-size: 16px; font-weight: bold;');
