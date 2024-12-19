document.getElementById('service-form').addEventListener('submit', function(event) {
	event.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

	if (name && email && message) {
		const url = `thankyou.html?name=${encodeURIComponent(name)}`;
		window.location.href = url;
	} else {
		document.getElementById('response-message').textContent = 'Please fill out all fields.';
	}
});