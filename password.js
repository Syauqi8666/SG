// Show login overlay on page load  
window.onload = () => {  
  document.getElementById('loginOverlay').style.display = 'flex';  
  // Hide sections until logged in  
  showSection('none');  
}  

// Login function  
function loginAs(role) {  
  // Hide login overlay  
  document.getElementById('loginOverlay').style.display = 'none';  
  // Show relevant section  
  if(role === 'customer') {  
    showSection('shop');  
  } else if(role === 'admin') {  
    showSection('admin');  
    loadOrders(); // refresh orders list  
  }  
}  