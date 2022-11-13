let options = document.querySelectorAll('.changeType');
let form = document.getElementById('form');
let bgactive = document.getElementById('bg-active');
var rotatedeg = 0;



options.forEach(val => {
    val.addEventListener('click', function(event){
        if(this.classList.contains('active')){
            return;
        }
        form.classList.remove('login');
        form.classList.remove('register');
        form.classList.add(this.id);
        bgactive.style.left = this.offsetLeft + 'px';
        options.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');

         rotatedeg = rotatedeg + 200;
         document.getElementById('rotate').style.transform = 'translate(-50%) rotate(' + rotatedeg + 'deg)';
    })
})
//Google Sign-in
var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
    attachSignin(document.getElementById('customBtn'));
  });
};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        document.getElementById('name').innerText = "Signed in: " +
            googleUser.getBasicProfile().getName();
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}