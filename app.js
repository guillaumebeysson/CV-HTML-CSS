
// Inverser le background left et right
const colorbannerLeft = document.querySelector('.bannerLeft');
const colorbannerRight = document.querySelector('.bannerRight');

window.addEventListener('scroll', () => {
    if(window.scrollY > 1) {
        colorbannerLeft.classList.add('scroll');
        colorbannerRight.classList.add('scroll');
    }
    else{
        colorbannerLeft.classList.remove('scroll');
        colorbannerRight.classList.remove('scroll');
    }
});


// Inverser les couleurs des h1 h2 h3
window.onscroll = function() {
    myFunction();
};

  function myFunction() {
          if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          document.getElementById("h1").classList.add('scroll');
          document.getElementById("h2").classList.add('scroll');
          document.getElementById("h3LeftContact").classList.add('scroll');
          document.getElementById("h3LeftFormation").classList.add('scroll');
          document.getElementById("h3LeftLangues").classList.add('scroll');
          document.getElementById("h3RightProfil").classList.add('scroll');
          document.getElementById("h3RightExperiences").classList.add('scroll');
          document.getElementById("h3RightLangages").classList.add('scroll');
          document.getElementById("h3RightQualites").classList.add('scroll');
          document.getElementById("h3RightInterets").classList.add('scroll');
          document.getElementById("linkImage").classList.add('scroll');
          } else {
          document.getElementById("h1").classList.remove('scroll');
          document.getElementById("h2").classList.remove('scroll');
          document.getElementById("h3LeftContact").classList.remove('scroll');
          document.getElementById("h3LeftFormation").classList.remove('scroll');
          document.getElementById("h3LeftLangues").classList.remove('scroll');
          document.getElementById("h3RightProfil").classList.remove('scroll');
          document.getElementById("h3RightExperiences").classList.remove('scroll');
          document.getElementById("h3RightLangages").classList.remove('scroll');
          document.getElementById("h3RightQualites").classList.remove('scroll');
          document.getElementById("h3RightInterets").classList.remove('scroll');
          document.getElementById("linkImage").classList.remove('scroll');
          }
      }

