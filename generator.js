function showSection(sectionId) {
    const sections = document.querySelectorAll('.generator-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

// Barcode Generator
function generateBarcode() {
    const barcodeInput = document.getElementById('barcodeInput').value;
    const barcodeCanvas = document.getElementById('barcodeCanvas');
    const downloadButton = document.getElementById('downloadBarcode');

    if (barcodeInput.trim() === '') {
        alert('Please enter text for the barcode');
        return;
    }

    JsBarcode(barcodeCanvas, barcodeInput, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 50,
        displayValue: true
    });

    downloadButton.style.display = 'inline';
}

function downloadBarcode() {
    const barcodeCanvas = document.getElementById('barcodeCanvas');
    const downloadLink = document.createElement('a');
    downloadLink.href = barcodeCanvas.toDataURL("image/png");
    downloadLink.download = 'barcode.png';
    downloadLink.click();
}

// Password Generator
function generatePassword() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const passwordDiv = document.getElementById('passwordValue');
    const copyButton = document.getElementById('copyPassword');
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    if (isNaN(length) || length < 6 || length > 20) {
        alert('Please enter a valid password length between 6 and 20');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    passwordDiv.textContent = password;
    copyButton.style.display = 'inline';
}

function copyPassword() {
    const passwordValue = document.getElementById('passwordValue').textContent;
    navigator.clipboard.writeText(passwordValue).then(() => {
        alert('Password copied to clipboard');
    }).catch(err => {
        alert('Failed to copy password');
    });
}

// OTP Generator
function generateOTP(length) {
    const otpDiv = document.getElementById('otpValue');
    const copyButton = document.getElementById('copyOtp');
    let otp = '';

    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    otpDiv.textContent = otp;
    copyButton.style.display = 'inline';
}

function copyOTP() {
    const otpValue = document.getElementById('otpValue').textContent;
    navigator.clipboard.writeText(otpValue).then(() => {
        alert('OTP copied to clipboard');
    }).catch(err => {
        alert('Failed to copy OTP');
    });
}




