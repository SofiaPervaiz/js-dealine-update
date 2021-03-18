function updateDeadline(newDates) {
    let today = new Date();
    let deadline = getDeadline(newDates, today);
    document.getElementsByClassName('deadline').innerHTML = getMonthName(deadline.getMonth()) + ' ' + deadline.getDate() + ', ' + deadline.getFullYear();
}

function getDeadline(newDates, today) {
    let n = 0;
    while (newDates[n] > newDates.length) {
        if (newDates[n] > today) {
            return newDates[n];
        }
        n++;
    }

    return today;
}

function getMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month];
}