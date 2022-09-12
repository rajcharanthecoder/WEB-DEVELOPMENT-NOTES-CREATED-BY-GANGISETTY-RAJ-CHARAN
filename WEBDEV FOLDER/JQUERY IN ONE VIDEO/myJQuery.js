// console.log($); booth the lines same
// console.log(jQuery);

console.log("We are using Jquery");

// $('selector').action() syntax

// $('p').click() // this will select all the p tags and will perform click action on them 
// // $('p').hide() // this will select all the p tags and will hide them
// // $('p').show() // this will select all the p tags and will show them
// // $('p').toggle() // this will select all the p tags and will toggle them 
// $('p').dblclick() // this will select all the p tags and will perform double click action on them
// // $('p').mouseenter() // this will select all the p tags and will perform mouse enter action on them
// $('p').mouseleave() // this will select all the p tags and will perform mouse leave action on them
// $('p').mousedown() // this will select all the p tags and will perform mouse down action on them    
// $('p').mouseup() // this will select all the p tags and will perform mouse up action on them
// $('p').hover() // this will select all the p tags and will perform hover action on them
// $('p').focus() // this will select all the p tags and will perform focus action on them
// $('p').blur() // this will select all the p tags and will perform blur action on them
// $('p').keydown() // this will select all the p tags and will perform key down action on them
// $('p').keyup() // this will select all the p tags and will perform key up action on them
// $('p').keypress() // this will select all the p tags and will perform key press action on them
// $('p').submit() // this will select all the p tags and will perform submit action on them
// $('p').change() // this will select all the p tags and will perform change action on them$
// $('p').select() // this will select all the p tags and will perform select action on them
//$('p').animate() // this will select all the p tags and will perform animate action on them

$('p').click(function () {
    console.log("You clicked on the paragraph");
})

// $('p').click(function () {
//     $(this).animate({
//         opacity: 0.5,
//         height: '+=100px',
//         width: '+=100px'
//     });
// })


// $('*').click(function () {
//     console.log("You clicked on the paragraph", this);
//     // console.log($(this).text());
// })

// console.log("We are using Jquery pushparaj");



// //EVENTS IN JQUERY//

// // Mouse events = click,dblclick,mouseenter,mouseleave,mouseup,mousedown,
// // KeyboardEvents = keypress,keydown,keyup,MediaKeyStatusMap
// // Form Events = submit,change,select,focus,blur
// // Document/Window Events = load,resize,scroll,unload;


// $('p').dblclick(function () {
//     console.log("YOU DOUBLE CLICKED ON P",this);
// });

// $('p').mouseenter(function(){
//     console.log("YOU ENTERED ",this);
// });

// $('p').mousedown(function(){
//     console.log("YOU MOUSEDOWN ",this);
// });

// $('p').mouseup(function(){
//     console.log("YOU MOUSEUP ",this);
// });

// $('p').mouseleave(function(){
//     console.log("YOU MOUSELEAVE ",this);
// });

// $('p').hover(function(){
//     console.log("YOU HOVER ",this);
// },
// function(){
//     console.log("YOU HOVER OUT ",this);
// });

//demo of on method//

// $('*').on('click',function(){
//     console.log("Thanks for coming bro!!!",this);
// });

// $('*').on(
//     {
//         click:function(){
//             console.log('Thanks for clicking');
//         },
//         mouseleave:function(){
//             console.log('Thanks for leaving');
//         }
        


//     });

// $('#wiki').hide(1000,function(){
//     console.log("Wiki is hidden",this);
// });

// $('wiki').show(1000,function(){
//     console.log("Wiki content is visible",this);
// });

// $('#but').click(function(){
//     $('#wiki').toggle(1000,function(){
//         console.log("Wiki is hidden",this);
//     });
// });

// //Animation in Jquery//
// $('#but').click(function(){
//     // $("#wiki").fadeOut(1000,function(){
//     //     console.log("Wiki is faded out",this);
//     // }),
//     // $("#wiki").fadeIn(1000,function(){
//     //     console.log("Wiki is faded in",this);
//     // })
//     // $('#wiki').fadeToggle(1000,function(){
//     //     console.log("Wiki is faded in",this);
//     // })
//     // $('#wiki').fadeTo(1000,0.5,function(){
//     //     console.log("I love you Pushpita",this);
//     // })
// });

//sliding effects in JQuery//

// $('#wiki').slideUp(10000)//content moves up
// $('#wiki').slideDown(10000)//content moves down
//$('#wiki').slideToggle(10000)//content moves up and down


//Animation in JQuery//

// $('#wiki').animate({
//     opacity:0.3,
//     height:'150px',
//     width:'150px'

// },2000)

// $('#wiki').animate({
//     opacity:0.3,
//     height:'150px',
//     width:'150px'

// },"slow")

// $('#wiki').stop();

//Html and jquery together DOM manipulation//

// $('#wiki').html("<b>Pushparaj</b>")

// $('body').html() // displays html

//Forms in JQuery//

// $("#ta").val();//display value 

// $("#inp").val("Setting value");//setting value

//$("#inp").empty();//empties //

// $("#inp").remove();//removes

//$('#wiki').addClass('MyClass')
//$('#wiki).removeClass('MyClass')

//CSS in JQuery//

//AJAX IN JQUERY//

$.get("https://code.jquery.com/jquery-3.6.1.js",function(data,status){alert(data);})//status like successs

$.get("https://code.jquery.com/jquery-3.6.1.js",function(data,status){alert(data);})//data

$.post("https://code.jquery.com/jquery-3.6.1.js",{name:'harry',chname:"codeiwthharry"},function(data,status){alert(status)});//post request