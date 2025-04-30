// Update showSection to handle hiding all when role not selected  
function showSection(sectionId) {  
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));  
  if(sectionId !== 'none') {  
    document.getElementById(sectionId).classList.remove('hidden');  
  }  
}  