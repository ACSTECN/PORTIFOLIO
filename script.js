function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
  
    const selected = document.getElementById(sectionId);
    if (selected) {
      selected.classList.add('active');
    }
  }

  