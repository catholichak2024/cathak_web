import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Authentication 서비스 가져오기
import { getFirestore } from 'firebase/firestore'; // Firestore 서비스 가져오기
import { getStorage } from 'firebase/storage'; // Cloud Storage 서비스 가져오기


console.log("API Key:", process.env.REACT_APP_API_KEY);
console.log("Auth Domain:", process.env.REACT_APP_AUTH_DOMAIN);
console.log("Project ID:", process.env.REACT_APP_PROJECT_ID);
console.log("Storage Bucket:", process.env.REACT_APP_STORAGE_BUCKET);
console.log("Messaging Sender ID:", process.env.REACT_APP_MESSAGING_SENDER_ID);
console.log("App ID:", process.env.REACT_APP_APP_ID);

// Firebase 설정 (환경 변수에서 가져오기)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY, // 환경 변수에서 API Key 가져오기
  authDomain: process.env.REACT_APP_AUTH_DOMAIN, // 환경 변수에서 Auth 도메인 가져오기
  projectId: process.env.REACT_APP_PROJECT_ID, // 환경 변수에서 Project ID 가져오기
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET, // 환경 변수에서 Storage Bucket 가져오기
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID, // 환경 변수에서 Messaging Sender ID 가져오기
  appId: process.env.REACT_APP_APP_ID, // 환경 변수에서 App ID 가져오기
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 필요한 서비스 초기화
const auth = getAuth(app); // Authentication 초기화
const firestore = getFirestore(app); // Firestore 초기화
const storage = getStorage(app); // Cloud Storage 초기화

// 필요한 서비스 내보내기
export { auth, firestore, storage };
export default app;