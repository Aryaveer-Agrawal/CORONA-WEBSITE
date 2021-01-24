
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBJI9Mc9Fs5esksg1keYvQu89bW2df4fUg",
    authDomain: "corona-7f956.firebaseapp.com",
    databaseURL: "https://corona-7f956-default-rtdb.firebaseio.com",
    projectId: "corona-7f956",
    storageBucket: "corona-7f956.appspot.com",
    messagingSenderId: "444223727730",
    appId: "1:444223727730:web:60e6041eded31b0f05faeb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var UserInputsRef=firebase.database().ref('UserInputs')

  document.getElementById('testForm').addEventListener('submit',submitForm);
  function submitForm(event)
  {
    event.preventDefault();
    var fname=getInputVal("firstname")
    var lname =getInputVal('lastname');
    var mobile =getInputVal('mobile');
    var state =getInputVal('state');
    var email =getInputVal('email');
    var profession =getInputVal('profession');
    var dateofbirth =getInputVal('dateofbirth');
    var symptomsList =getSelectedCheckboxValues('symptoms');
    var selectedOption = document.querySelector('input[name = option]:checked').value;
    state=state.toLowerCase();
    var emailstatus=validateEmail();
    if(emailstatus)
    saveMessages(lname+ " " +fname,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList);
  }
  function saveMessages(name,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList){
    var newuserInputsRef = UserInputsRef.push();
    newuserInputsRef.set({
        name:name,
        mobile:mobile,
        email:email,
        profession:profession,
        dateofbirth:dateofbirth,
        selectedOption:selectedOption,
        state:state, 
        symptomsList:symptomsList
    })
    alert("Thank you, find the list of centers nearby!  ");
}
  function getInputVal(id){
    return document.getElementById(id).value;
}
function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = [];
  checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
  });
  return values;
}
function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)

}
