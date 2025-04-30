let selectedRole = '';  

function showPasswordInput(role) {  
  selectedRole = role;  
  document.getElementById('passwordDiv').style.display = 'block';  
}  

// Here, you can set your desired passwords for each role  
const passwords = {  
  'customer': 'cust123', // Example password, you can change  
  'admin': 'admin123'  
};  

function submitLogin() {  
  const enteredPassword = document.getElementById('passwordInput').value;  
  if (enteredPassword === passwords[selectedRole]) {  
    // Successful login  
    document.getElementById('loginOverlay').style.display = 'none';  

    if (selectedRole === 'customer') {  
      showSection('shop');  
    } else if (selectedRole === 'admin') {  
      showSection('admin');  
      loadOrders();  
    }  
  } else {  
    alert('Incorrect password. Please try again.');  
  }  

  // Reset password input  
  document.getElementById('passwordInput').value = '';  
  document.getElementById('passwordDiv').style.display = 'none';  
}  