// 🌷 ZHARE 2026 - Pink Blossom Configuration
// Firebase: dokf-33e47 | Cloudinary: qlathl0k
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
const CLOUD_NAME = "qlathl0k";
const UPLOAD_PRESET = "go29_gm";

// 🌷 ZHARE Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #fbcfe8, #f9a8d4, #f472b6)",
    "linear-gradient(135deg, #fce7f3, #fbcfe8, #f9a8d4)",
    "linear-gradient(135deg, #fdf2f8, #fce7f3, #fbcfe8)",
    "linear-gradient(135deg, #ec4899, #db2777, #be185d)",
    "linear-gradient(135deg, #f472b6, #ec4899, #db2777)",
    "linear-gradient(135deg, #fdf2f8, #fbcfe8, #ec4899)"
];

// 🌷 App Info
const APP_NAME = "ZHARE";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#f472b6";
const SECONDARY_COLOR = "#f9a8d4";

console.log('🌷 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #f472b6; font-size: 16px; font-weight: bold;');
