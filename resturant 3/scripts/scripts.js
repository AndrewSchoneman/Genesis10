function validate(){
    const email = document.getElementById("email");
    console.log(email.value);
    const emailValid = new RegExp(/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/);
    const phoneNum = document.getElementById("phone");
    const validNum = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    const name = document.getElementById("name");
    const info = document.getElementById("info")
    if(!emailValid.test(email.value)) alert("Please enter a valid email address");
    if(!phoneNum.value === "") alert("Please enter a phone number");
    if(name.value === "") alert("Please enter your name");
    else alert("Thanks for contacting us someone will get back to you soon");
    return false;
}