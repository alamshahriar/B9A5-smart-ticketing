// function toggleSeat(seat) {
//     seat.classList.toggle('selected');
// }
let totalSeats = 40; // Total seats available
let selectedSeats = 0; // Counter for selected seats

function toggleSeat(seat) {
    // Check if the seat is already selected
    if (seat.classList.contains('selected')) {
        // Deselect the seat
        seat.classList.remove('selected');
        selectedSeats--;
    } else {
        // Select the seat
        seat.classList.add('selected');
        selectedSeats++;
    }

    // Update the counters dynamically
    const availableSeats = totalSeats - selectedSeats;
    document.getElementById('availableSeats').textContent = availableSeats;
    document.getElementById('selectedSeats').textContent = selectedSeats;
}



