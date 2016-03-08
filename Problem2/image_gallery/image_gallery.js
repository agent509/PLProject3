$(document).ready(function(){
    $("li > a").each(function(){

        //loads every image and then hides them
        //constitutes "preloading"? inspect element on Chrome suggests
        //that all the images are inserted into the cache.
        //not sure what else preloading could mean.

        $('<img />').attr("src",this).appendTo('body').hide()

        //store values of title and href
        $(this).attr("ttl", $(this).attr("title"));
        $(this).attr("img", $(this).attr("href"));

        $(this).click(function(evt){
            evt.preventDefault();

            //I recognize that this is redundant,
            //and that I might as well have taken the values from the attributes
            //"title" and "href" directly, but the directions explicitly instruct
            //me to store the values before the on-click event is defined,
            //and this was the easiest way to do it for each object in the loop.

            $("#caption").html($(this).attr("ttl"));
            $("#image").attr("src", $(this).attr("img"));

        })
    })
    //finds the first a element in the document and focuses on it
    $(document).find("a").first().focus();

})