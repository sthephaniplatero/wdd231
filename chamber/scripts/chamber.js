function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); 
}

document.addEventListener('DOMContentLoaded', () => {
    const memberContainer = document.getElementById('member-container');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');

    // Fetch members data from JSON file
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayGridView(data); // Show grid view by default
            gridViewBtn.addEventListener('click', () => displayGridView(data));
            listViewBtn.addEventListener('click', () => displayListView(data));
        })
        .catch(error => console.error('Error loading JSON:', error));

    // Display members in grid view
    function displayGridView(members) {
        memberContainer.className = 'grid-view';
        memberContainer.innerHTML = ''; // Clear existing content
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');
            memberDiv.innerHTML = `
                <h4>${member.name}</h4>
                <p><strong>Industry:</strong> ${member.industry}</p>
                <p><strong>Founded:</strong> ${member.foundedYear}</p>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            `;
            memberContainer.appendChild(memberDiv);
        });
    }

    // Display members in list view
    function displayListView(members) {
        memberContainer.className = 'list-view';
        memberContainer.innerHTML = ''; // Clear existing content

        // Add header row
        const headerRow = document.createElement('div');
        headerRow.classList.add('member', 'member-header');
        headerRow.innerHTML = `
            <div>Name</div>
            <div>Industry</div>
            <div>Founded</div>
            <div>Membership Level</div>
            <div>Address</div>
            <div>Phone</div>
            <div>Website</div>
        `;
        memberContainer.appendChild(headerRow);

        // Add member rows
        members.forEach(member => {
            const memberRow = document.createElement('div');
            memberRow.classList.add('member');
            memberRow.innerHTML = `
                <div>${member.name}</div>
                <div>${member.industry}</div>
                <div>${member.foundedYear}</div>
                <div>${member.membershipLevel}</div>
                <div>${member.address}</div>
                <div>${member.phone}</div>
                <div><a href="${member.website}" target="_blank">Visit</a></div>
            `;
            memberContainer.appendChild(memberRow);
        });
    }
});