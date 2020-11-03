// Contact Form Validation

function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");
  
    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextForm = parent.nextElementSibling;
  
        // check for validation
  
        if (input.type === "text" && validateUser(input)) {
          nextSlide(parent, nextForm);
        } else if (input.type === 'email' && validateEmail(input)) {
          nextSlide(parent, nextForm);
        } else if (input.type === 'text' && validateUser(input)) {
          nextSlide(parent, nextForm);
        }
      });
    });
  }
  
  function validateUser(user){
      if(user.value.length < 5){
        alert('not enough characters');
        error('rgb(189, 87, 87)');
      } else {
        return true;
      }
  }
  
  function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
      return true;
    } else {
      error('rgb(189, 87, 87)');
    }
  }
  
  function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
  }
  
  
  
  function error(color){
    document.body.style.backgroundColor = color;
  }
  
  animatedForm();
  