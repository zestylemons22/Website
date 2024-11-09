// document.addEventListener('DOMContentLoaded', function() {
//     alert('Welcome to my webpage!');
// });

//when you tap a button, the alert will pop up
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function() {
        alert('Button was clicked!');
    });
});
