$(document).ready(function() {
    Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content')); //gets the stripe key from application.html.erb
    
    $("#form-submit-btn").click(function(event) { //watchout for the form-submit-btn to click
        event.preventDefault(); //prevent whatever else was supposed to happen on pressing this button
        $('input[type=submit]').prop('disabled', true);
        var error = false; //because we're not dealing with errors right now
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
        
        if (!error) {
            //get stripe token
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
            }, stripeResponsehandler);
        }
        return false;
    }); //form submitted
    //params obtained from stripe
    function stripeResponsehandler(status, response) {
        // Get a reference to the form:
        var f = $("new_user");
        
        // Get a token from the response:
        var token = response.id;
        
        // Add the token to the form:
        f.append('<input type = "hidden" name = "user[stripe_card_token]" value = "' + token + '" />');
        
        // Submit the form:
        f.get(0).submit();
    }
});