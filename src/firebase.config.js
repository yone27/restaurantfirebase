import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAPwifMcIWSguJ1ChQTQRj_iDzFLaaC1KU',
  authDomain: 'deliveryapp-3f047.firebaseapp.com',
  databaseURL: 'https://deliveryapp-3f047-default-rtdb.firebaseio.com',
  projectId: 'deliveryapp-3f047',
  storageBucket: 'deliveryapp-3f047.appspot.com',
  messagingSenderId: '240780140126',
  appId: '1:240780140126:web:9d408ae061289b1c139ecf',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage}