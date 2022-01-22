$(function(){
    $("#contact-save").submit(function( e ) {
        e.preventDefault();


        let fsname = $("input[name=firstname]").val(); 
        let laname = $("input[name=lastname").val(); 
        let email  = $("input[name=email]").val(); 

        $("p#test").html(`fsname: ${fsname} / last: ${laname} / email: ${email}`); 


        $.ajax({
            type:"POST",
            url:"./data.php",
            data: `firstname=${fsname}&lastname=${laname}&email=${email}`,
            success: function(response){ // le serveur a bien repondu (meme si les donnees sont pas passees)
                let res = $.parseJSON(response);
                //console.log("subbccess server side:  result :: ", res); 
                $(".hidden").css({"display":"none"});
                //$("p#test").html(res); // show response from the php script.
                if(res.status === 200){
                    $(".hidden").css({"display":"none"});
                    $(".success").css({"display":"block"}); 
                }else if(res.status===403){
                    $(".hidden").css({"display":"none"});
                    $(".error").css({"display":"block"}); 
                }
            },
            error:function(result){
                $(".hidden").css({"display":"none"});
                //console.log("erbbror ", result, typeof result);
                $("div.error").css({"display":"initial"}); 
                console.log( "erreur code serveur", result ); 
            }
        })
        
    });
});