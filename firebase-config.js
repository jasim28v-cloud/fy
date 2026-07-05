// ⚡ SPARK 2026 - Premium Configuration
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

// ⚡ SPARK Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #ff6b35, #f7931e, #f7b733)",
    "linear-gradient(135deg, #c2410c, #ea580c, #f97316)",
    "linear-gradient(135deg, #f59e0b, #d97706, #b45309)",
    "linear-gradient(135deg, #f97316, #fb923c, #fdba74)",
    "linear-gradient(135deg, #431407, #7c2d12, #ea580c)",
    "linear-gradient(135deg, #1a0a00, #2d1600, #ff6b35)"
];

// ⚡ App Info
const APP_NAME = "SPARK";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#ff6b35";
const SECONDARY_COLOR = "#f7b733";

console.log('⚡ %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #ff6b35; font-size: 16px; font-weight: bold;');
