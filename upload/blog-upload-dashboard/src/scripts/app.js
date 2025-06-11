// This file contains the JavaScript code for the upload dashboard. It handles the functionality for file uploads, form validation, and any dynamic interactions on the page.

document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const submitButton = document.getElementById('submit-button');
    const messageBox = document.getElementById('message-box');

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const files = fileInput.files;

        if (files.length === 0) {
            messageBox.textContent = 'Please select a file to upload.';
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files[]', files[i]);
        }

        // Simulate a file upload
        messageBox.textContent = 'Uploading...';
        setTimeout(() => {
            messageBox.textContent = 'Files uploaded successfully!';
            fileInput.value = ''; // Clear the input
        }, 2000);
    });
});