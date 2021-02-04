import firebase from 'firebase/app';
import 'firebase/storage';

import { upload } from './upload.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "your config",
    authDomain: "your config",
    projectId: "your config",
    storageBucket: "your config",
    messagingSenderId: "your config",
    appId: "your config"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

upload('#file', {
    multi: true, // param to add many images
    accept: ['.png', '.jpg', '.jpeg', '.webp'], //allow to images format
    onUpload(files, blocks) {
        files.forEach((file, index) => {
            const ref = storage.ref(`img/${file.name}`);
            const task = ref.put(file);

            task.on('state_changed', snapshot => {
                const percentage = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
                const block = blocks[index].querySelector('.preview__info-progress');
                block.textContent = percentage + "%";
                block.style.width = percentage + "%";
            }, error => {
                console.log(error);
            }, () => {
                console.log('Complite');
                //Get downloaded images URL:
                // task.snapshot.ref.getDownloadURL().then(url => {
                //     console.log('Download URL', url)
                // })
            });
        });
    }
});