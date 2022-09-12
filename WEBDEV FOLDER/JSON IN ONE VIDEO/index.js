$(document).ready(function () {
    $("#driver").click(function (event) {
        $.getJSON('first.json', function (jd) {
            $('#stage').html('<p> Name: ' + jd.name + '</p>');
            $('#stage').append('<p> Age : ' + jd.score + '</p>');
            $('#stage').append('<p> isAdmin: ' + jd.isAdmin + '</p>');
            $('#stage').append('<p> friends: ' + jd.friends + '</p>');
            $('#stage').append('<p> License: ' + jd.License + '</p>');
            $('#stage').append('<p> Address: ' + jd.address.street + '</p>');
            $('#stage').append('<p> Address: ' + jd.address.city + '</p>');
            $('#stage').append('<p> Address: ' + jd.address.state + '</p>');
            $('#stage').append('<p> Address: ' + jd.address.zip + '</p>');
        });
    });

    jQuery.ajax({
        url: 'first.json',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });

    jQuery.ajaxSetup({
        async: true
    });

    // jQuery.get('first.json', function(data,status){
    //     console.log(data);
    //     console.log(status);
    // },'json');

    jQuery.getScript('first.json', function(data,status){
        console.log(data);
        console.log(status);
    },'json');

    jQuery.serializeJSON = function (obj) {
        var json = [];
        for (var i = 0; i < obj.length; i++) {
            json.push(JSON.stringify(obj[i]));
        }
        return '[' + json.join(',') + ']';
    };

    
});

jQuery.ajax({
    url: 'first.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
    }
});

//Jquery Ajax events//

Jquery.ajax(url,{
    beforeSend: function(){
        //do something
    },
    complete: function(){
        //do something
    },
    error: function(){
        //do something
    },
    success: function(){
        //do something
    },
    statusCode: {
        404: function(){
            //do something
        },
        500: function(){
            //do something
        },
        200: function(){
            //do something
        },
    }
});


//ajax Events//
// ajaxComplete
// ajaxError
// ajaxSend
// ajaxStart
// ajaxStop
// ajaxSuccess

//ajax Methods//

// ajax()
// get()
// getJSON()
// getScript()
// post()
// serialize()
// serializeArray()
// serializeJSON()




