export async function submitFeedback(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const isPositive = document.querySelector('input[name="feedback"]:checked').value === 'positive';

  try {
    const response = await fetch('http://localhost:3000/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, comment, isPositive }),
    });
    const result = await response.json();
    if (response.ok) {
      alert(result.message);
    } else {
      alert(result.error);
    }
  } catch (error) {
    console.error('Error submitting feedback:', error);
    alert('Failed to submit feedback.');
  }
}
