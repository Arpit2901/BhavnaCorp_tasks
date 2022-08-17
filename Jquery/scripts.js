
//draggable widget
  $(function() {  
    $( "#draggable" ).draggable();  
  });  
//accordion widget
  $(function() {  
    $( "#accordion-5" ).accordion({  
       disabled: false  
    });  
    $("input").each(function () {  
       $(this).change(function () {  
          if ($(this).attr("id") == "disableaccordion") {  
             $("#accordion-5").accordion("option", "disabled", true);  
          } else {  
             $("#accordion-5").accordion("option", "disabled", false);  
          }  
       });  
    });  
 });  
 //Date picker Widget
 $(function() {  
    $( "#datepicker-1" ).datepicker();  
 });  
 
 //UI menu
 $(function() {  
    $( "#menu-1" ).menu();  
 });  

 //Autocomplete widget
 $(function() {  
    var availableTags = [  
      "ActionScript",  
      "AppleScript",  
      "Asp",  
      "BASIC",  
      "C",  
      "C++",  
      "Clojure",  
      "COBOL",  
      "ColdFusion",  
      "Erlang",  
      "Fortran",  
      "Groovy",  
      "Haskell",  
      "Java",  
      "JavaScript",  
      "Lisp",  
      "Perl",  
      "PHP",  
      "Python",  
      "Ruby",  
      "Scala",  
      "Scheme"  
    ];  
    $( "#tags" ).autocomplete({  
      source: availableTags  
    });  
  });  