function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth', // płynne przewijanie
            block: 'start'      // wyrównanie do góry strony
        });
    }
}
