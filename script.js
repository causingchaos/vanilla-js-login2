const checkMark = '\u2713'
const lowerCaseRegex = new RegExp('^(?=.*[a-z])(?=.{1,})');
const upperCaseRegex = new RegExp('^(?=.*[A-Z])(?=.{1,})');
const containsNumberRegex = new RegExp('^(?=.*[0-9])(?=.{1,})');
const specialCharacterRegex = new RegExp('^(?=.*[!@#$%^&*])(?=.{1,})');
const eightCharacterRegex = new RegExp('^(?=.{8,})');

const checkValidity = () => {
  const password = document.getElementById('passwordInput').value;
  const confirmPassword = document.getElementById('confirmPasswordInput').value;

  const fullfilled = [];
  const unfullfilled = [];

  lowerCaseRegex.test(password) ? 
    fullfilled.push(document.getElementById('lowerCaseRequirement')) :
    unfullfilled.push(document.getElementById('lowerCaseRequirement'));

  upperCaseRegex.test(password) ? 
    fullfilled.push(document.getElementById('upperCaseRequirement')) :
    unfullfilled.push(document.getElementById('upperCaseRequirement'));

  containsNumberRegex.test(password) ? 
    fullfilled.push(document.getElementById('numberRequirement')) :
    unfullfilled.push(document.getElementById('numberRequirement'));

  specialCharacterRegex.test(password) ? 
    fullfilled.push(document.getElementById('specialCharacterRequirement')) :
    unfullfilled.push(document.getElementById('specialCharacterRequirement'));

  eightCharacterRegex.test(password) ? 
    fullfilled.push(document.getElementById('lengthRequirement')) :
    unfullfilled.push(document.getElementById('lengthRequirement'));
    
  //password exists & password = confirmPassword  
  password && password === confirmPassword ?
    fullfilled.push(document.getElementById('passwordsMatchRequirement')) :
    unfullfilled.push(document.getElementById('passwordsMatchRequirement'));

  //console.log(fullfilled,unfullfilled);

  fullfilled.forEach( el => {
    el.classList.remove('unfullfilled');
    el.classList.add('fullfilled');
  })
  unfullfilled.forEach( el => {
    el.classList.remove('fullfilled');
    el.classList.add('unfullfilled');
  })
  
  fullfilled.length === 6 ?  
    document.getElementById('submitBtn').disabled = false :
    document.getElementById('submitBtn').disabled = true ;
}

Array.from(document.getElementsByClassName('input-listener')).forEach( input => {
  //input.addEventListener('keyup', (event) => console.log(event.target.value));
  input.addEventListener('keyup', checkValidity);
})