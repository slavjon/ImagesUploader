import { upload } from './upload.js';

upload('#file', {
    multi: true, // param to add many images
    accept: ['.png', '.jpg', '.jpeg', '.webp'] //allow to images format
});