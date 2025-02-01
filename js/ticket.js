// function toggleSeat(seat) {
//     seat.classList.toggle('selected');
// }
let totalSeats = 40; // Total seats available
let selectedSeats = 0; // Counter for selected seats
const selectedSeatsLabel = [];
const seatPrice = 550; // Price per seat

function toggleSeat(seat) {
    console.log(seat);

    const seatName = seat.innerText;
    const totalPriceElement = document.getElementById('totalPrice');
    // Check if the seat is already selected
    if (seat.classList.contains('selected')) {
        // Deselect the seat
        seat.classList.remove('selected');
        selectedSeats--;
        const seatIndex = selectedSeatsLabel.indexOf(seatName);
        if (seatIndex !== -1) {
            selectedSeatsLabel.splice(seatIndex, 1);
        }
        seat.classList.remove('selectedSeatsLabel')
        const id = `seat` + seatName;
        document.getElementById(id).remove();
    }
    else {
        if (selectedSeats >= 4) {
            return
        }
        // Select the seat
        seat.classList.add('selected');
        selectedSeats++;
        selectedSeatsLabel.push(seatName);
        // document.createElement('div')
        const containers = document.getElementById('seatContainer');
        const seatRow = document.createElement('div')
        seatRow.classList = 'flex justify-between items-center pb-1'
        seatRow.id = `seat` + seatName;
        seatRow.innerHTML = `<p class="font-inter text-base text-[#03071299] min-w-20">${seatName}</p>
                            <p class="font-inter text-base text-[#03071299]">Economy</p>
                            <p class="font-inter text-base text-[#03071299]">550</p>`;
        containers.appendChild(seatRow);


    }
    console.log(selectedSeatsLabel);

    // Update the counters dynamically
    const availableSeats = totalSeats - selectedSeats;
    document.getElementById('availableSeats').textContent = availableSeats;
    document.getElementById('selectedSeats').textContent = selectedSeats;

    // update total price 
    const totalPrice = selectedSeats * seatPrice;
    totalPriceElement.textContent = ` ${totalPrice}`;
    const finalPriceElement = document.getElementById('discountPrice');
    finalPriceElement.innerText = totalPrice;

}

function applyCoupon() {
    const totalPriceElement = document.getElementById('totalPrice');
    const finalPriceElement = document.getElementById('discountPrice');
    const couponInput = document.getElementById("coupon").value.trim();
    let totalPrice = parseInt(totalPriceElement.textContent);
    let discount = 0;

    const coupons = {
        "NEW15": 15,
        "Couple 20": 20
    };

    if (couponInput in coupons) {
        discount = (totalPrice * coupons[couponInput]) / 100;
    } else {
        document.getElementById("discount-message").textContent = "Invalid coupon code!";
    }

    finalPriceElement.innerText = totalPrice - discount;
}
function next() {
    hideElementById('main');
    showElementById('success')
}







