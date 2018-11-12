const navButtons = document.querySelectorAll('#navbar ul li');
const navBar = document.querySelector('#navbar');

function wrapper() {

  const changeColor = () => {
  	navbar.classList.toggle('red');
  };

  const loopThrough = () => {


    for (let i = 0; i < thisButtonLength; i++) {
    	changeColor();
    }

  };
  loopThrough();
};

for(let i = 0; i < navButtons.length; i++) {

};
