document.addEventListener('DOMContentLoaded', function() {
    const ticketList = document.getElementById('ticket-list');

    // Load existing tickets from localStorage
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];

    // Function to render tickets
    function renderTickets() {
        ticketList.innerHTML = '';
        tickets.forEach((ticket, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${ticket.title}: ${ticket.description}</span>
                <div>
                    <button onclick="closeTicket(${index})">Close Ticket</button>
                    <button onclick="replyToTicket(${index})">Reply</button>
                </div>
            `;
            ticketList.appendChild(li);
        });
    }

    // Render tickets on page load
    renderTickets();

    // Function to close a ticket
    window.closeTicket = function(index) {
        tickets.splice(index, 1); // Remove the ticket from the array
        localStorage.setItem('tickets', JSON.stringify(tickets)); // Update localStorage
        renderTickets(); // Re-render the ticket list
    };

    // Function to reply to a ticket
    window.replyToTicket = function(index) {
        const ticket = tickets[index];
        alert(`Replying to ticket: ${ticket.title}`);
        // Implement reply functionality here
    };
});

