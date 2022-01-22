$(function(){
    $("#contact-save").submit(function( e ) {
        e.preventDefault();


        let fsname = $("input[name=firstname]").val(); 
        let laname = $("input[name=lastname").val(); 
        let email  = $("input[name=email]").val(); 

        $("p#test").html(`fsname: ${fsname} / last: ${laname} / email: ${email}`)
        
    });
});