function scheduleTask() {
    const task = document.getElementById('task').value;
    const deadline = new Date(document.getElementById('deadline').value).getTime();
    const currentTime = new Date().getTime();
    const Email = document.getElementById('Email').value;

    if (task === '' || isNaN(deadline) || deadline <= currentTime) {
        alert('Please enter a valid task and future deadline.');
        return;
    }

    const timeUntilDeadline = deadline - currentTime;

    // For demonstration purposes, simulate sending a notification after the deadline passes
    setTimeout(() => {
        sendNotification(task);
    }, timeUntilDeadline);
}

function sendNotification(task,Email) {
    // For demonstration purposes, alert is used to simulate a notification
    alert('Task "${task}" is due now!');
    // In a real-world application, you would send an email or push notification here
}