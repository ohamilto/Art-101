/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   02.18.2020
 *
 * (c) Copyright by Blub Corp.
 **/
 $(document).ready(function(){
   $("#c").click(function(){
     $("#challenge").hide();
   });
   $("#c-open").click(function(){
     $("#challenge").show();
   });
 });

 $(document).ready(function(){
   $("#p").click(function(){
     $("#problems").hide();
   });
   $("#p-open").click(function(){
     $("#problems").show();
   });
 });

 $(document).ready(function(){
   $("#r").click(function(){
     $("#results").hide();
   });
   $("#r-open").click(function(){
     $("#results").show();
   });
 });
