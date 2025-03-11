const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'doughnut',
    data: {
        labels: ['Multimedia', 'Design', 'Marketing', 'IT'],
        datasets: [{
            data: [10, 20, 30, 60],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56','#4bc0c0'],
        }]
    }
});

const lineCtx = document.getElementById('barChart').getContext('2d');
new Chart(lineCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mac', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Sales by Month',
            data: [3, 10, 5, 8, 12, 50, 25, 1, 10, 30, 16,45],
            borderColor: '#0E304E',
            backgroundColor: '#0E304E',
            fill: false
        }]
    }
});

