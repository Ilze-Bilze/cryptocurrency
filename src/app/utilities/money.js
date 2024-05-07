import { init } from './init.js';

// start the app!
const app = document.querySelector('form');

app.addEventListener('mouseenter', init, { once: true });
