import { submitFeedback } from './form.js';
import { getClient } from './seedInit.js';

document.getElementById('feedback-form').addEventListener('submit', submitFeedback);

console.log('seedClient:', getClient())