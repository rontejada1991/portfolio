$(document).ready(function() {
    $('.navbar-nav li').click(function(){
        console.log(this);
        $('.navbar-collapse').collapse('hide');
    });
    
});
