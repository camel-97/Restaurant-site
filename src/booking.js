export function loadBookings() {
    
    const main = document.getElementById("content");
    main.innerHTML = "";

    const header = document.createElement("div");
    header.classList.add("bookings-header");
    header.textContent = "Bookings";
    main.appendChild(header);

    const timesCont = document.createElement("div");
    timesCont.classList.add("opening-container");
    main.appendChild(timesCont);

    const timesHead = document.createElement("div");
    timesHead.classList.add("opening-header");
    timesHead.textContent = "Opening Hours";
    timesCont.appendChild(timesHead);

    const openingTimes = [
        {day: "Monday", time: "Closed"},
        {day: "Tuesday", time: "Closed"},
        {day: "Wednesday", time: "1800 - 2230"},
        {day: "Thursday", time: "1800 - 2230"},
        {day: "Friday", time: "1800 - 2330"},
        {day: "Saturday", time: "1800 - 2330"},
        {day: "Sunday", time: "1600 - 2230"}
    ]
    openingTimes.forEach(({day, time}) => {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = `${day} | ${time}`;
        dayDiv.classList.add("day-div");
        timesCont.appendChild(dayDiv); 
    });

    const makeABooking = document.createElement("div");
    makeABooking.classList.add("make-a-booking-head");
    makeABooking.textContent = "Make a Booking";
    main.appendChild(makeABooking);

    const makeABookingContent = document.createElement("div");
    makeABookingContent.classList.add("make-a-booking-content");
    makeABookingContent.textContent = `All bookings are made over the phone by reaching
    out to us on 0784985729. We have a small selection of tables that are kept for walk-ins,
    however we highly recommend booking in advance to avoid disappointment.`
    main.appendChild(makeABookingContent);
}
