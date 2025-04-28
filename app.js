document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      

      this.classList.toggle('active');
    });
});


document.addEventListener('click', function(event) {

    if (!event.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        dropdown.classList.remove('active');
      });
    }
});
