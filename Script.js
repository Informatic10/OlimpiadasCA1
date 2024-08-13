document.addEventListener('DOMContentLoaded', () => {
    fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('match-table');
            data.matches.forEach(match => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${match.time}</td>
                    <td>${match.team1} vs. ${match.team2}</td>
                    <td>${match.score}</td>
                `;
                tableBody.appendChild(row);
            });
        });
});
