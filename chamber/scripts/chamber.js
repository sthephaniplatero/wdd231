function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggles the 'active' class to show/hide the menu
}

// Función para cargar datos del archivo JSON
async function fetchMembers() {
    try {
      const response = await fetch('data/members.json'); // Carga el archivo JSON
      if (!response.ok) {
        throw new Error('Error al cargar los datos del JSON');
      }
      const members = await response.json(); // Convierte los datos en un objeto de JavaScript
      displayMembers(members); // Muestra los datos en la página
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Función para mostrar los datos en la página
  function displayMembers(members) {
    const membersContainer = document.getElementById('members');
    members.forEach(member => {
      const memberDiv = document.createElement('div');
      memberDiv.className = `member ${getMembershipClass(member.membershipLevel)}`;
  
      memberDiv.innerHTML = `
        <div class="member-content">
          <img src="${member.imageFile}" alt="${member.name} logo">
          <div class="member-details">
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Industry:</strong> ${member.industry}</p>
            <p><strong>Founded:</strong> ${member.foundedYear}</p>
          </div>
        </div>
      `;
  
      membersContainer.appendChild(memberDiv);
    });
  }
  
  // Determina la clase CSS según el nivel de membresía
  function getMembershipClass(level) {
    switch (level) {
      case 3: return 'gold';
      case 2: return 'silver';
      default: return 'member-level-1';
    }
  }
  
  // Llama a la función para cargar los datos al cargar la página
  fetchMembers();
