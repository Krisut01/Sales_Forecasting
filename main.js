// JavaScript for toggling the mobile menu
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });
}

// Example Chart.js code
document.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('sales-trend-chart').getContext('2d');
    const salesTrendChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Sales Trend',
                data: [12, 19, 3, 5, 2],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
        }
    });

    const ctx2 = document.getElementById('forecast-vs-actual-chart').getContext('2d');
    const forecastVsActualChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Forecast',
                data: [10, 20, 30, 40],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Actual',
                data: [12, 22, 28, 37],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
        }
    });

    const ctx3 = document.getElementById('sales-by-region-chart').getContext('2d');
    const salesByRegionChart = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['North', 'South', 'East', 'West'],
            datasets: [{
                label: 'Sales by Region',
                data: [30, 20, 25, 25],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
        }
    });
});

// Handle file upload and input processing
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('data-upload');
    const inputTextarea = document.getElementById('input-variables');
    const generateButton = document.querySelector('button[type="submit"]');

    if (fileInput && inputTextarea && generateButton) {
        generateButton.addEventListener('click', (event) => {
            event.preventDefault();

            const file = fileInput.files[0];
            const variables = inputTextarea.value;

            if (file) {
                // Handle file upload
                const reader = new FileReader();
                reader.onload = (e) => {
                    const fileContent = e.target.result;
                    console.log('File content:', fileContent);
                    // Process the file content
                };
                reader.readAsText(file);
            }

            if (variables) {
                console.log('Input Variables:', variables);
                // Process the input variables
            }
        });
    }
});

// Real-time data updates using WebSocket (replace with actual WebSocket URL)
document.addEventListener('DOMContentLoaded', () => {
    const websocketUrl = 'wss://your-websocket-url'; // Replace with your WebSocket URL
    const socket = new WebSocket(websocketUrl);

    socket.onopen = () => {
        console.log('Connected to WebSocket');
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Real-Time Data:', data);
        // Update the real-time data section with the received data
        const realTimeDataContainer = document.querySelector('#real-time-data');
        if (realTimeDataContainer) {
            realTimeDataContainer.innerHTML = `<p>${data.message}</p>`;
        }
    };

    socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
    };

    socket.onclose = () => {
        console.log('WebSocket Connection Closed');
    };
});

