document.addEventListener('DOMContentLoaded', function() {
    const ticketForm = document.getElementById('ticket-form');
    const ticketList = document.getElementById('ticket-list');

    // Function to render tickets
    function renderTickets(tickets) {
        ticketList.innerHTML = '';
        tickets.forEach(ticket => {
            const li = document.createElement('li');
            li.textContent = `${ticket.title}: ${ticket.description}`;
            ticketList.appendChild(li);
        });
    }

    // Fetch and render tickets on page load
    fetch('/api/tickets?userId=123') // Replace with actual user ID
        .then(response => response.json())
        .then(data => renderTickets(data))
        .catch(error => console.error('Error fetching tickets:', error));

    // Handle ticket form submission
    ticketForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('ticket-title').value;
        const description = document.getElementById('ticket-description').value;

        // Send new ticket to the server
        fetch('/api/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, userId: '123' }) // Replace with actual user ID
        })
        .then(response => response.json())
        .then(ticket => {
            // Add the new ticket to the list
            renderTickets([...tickets, ticket]);
            ticketForm.reset();
        })
        .catch(error => console.error('Error creating ticket:', error));
    });
});
