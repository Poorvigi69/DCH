document.getElementById('symptom-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the symptom input
  const symptomInput = document.getElementById('symptom-input').value;
  
  // Display AI analysis message
  document.getElementById('ai-message').innerText = "AI analysis coming soon! Stay tuned.";
  
  // Optional: Clear the input field
  document.getElementById('symptom-input').value = "";
});
