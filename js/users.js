document.addEventListener('DOMContentLoaded', function(){

    //... your code is here

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");

    // compile the template
    var userDataHTML = userTemplate({
        username : 'lindani',
        firstName : 'Lindani',
        lastName : 'Pani',
        email : 'lindani@pani.com'
    });
    userDataElem.innerHTML = userDataHTML;
})
