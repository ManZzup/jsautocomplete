/**
 * Autocomplete plugin built on JQyery framework
 * Built for wooroll.com
 * @author  manujith pallewatte [manujith.nc@gmail.com]
 * @date    30/12/13
 * Usage:
 *  var jsac = new JsAutoComplete("jqyery-selector-string",no-of-items-per-result)
 */
function JsAutoComplete(txtSearch,limit){
    //variable holding the list of items for the auto complete
    //your implementation to get the list items should go here
    
    /**** USER IMPLEMENTATION GOES HERE****/
    var list = [
        "Software engineer", "mobile engineer", "mobile developer", "software android"    
    ];
    /**************************************/
    
    //inistialize the search box
    txtSearch = $(txtSearch);    
    
    //setup the main div for showing the auto complete results
    var au_div = document.createElement("div");
    
    //adjusting the results div to the search bar
    $(au_div).attr('id','jsac-results');
    $(au_div).css('width',$('#search').outerWidth());
    $(au_div).css('top',$('#search').offset().top+$('#search').outerHeight()+'px');
    $(au_div).css('left',$('#search').offset().left)
    
    //append it
    $('body').append(au_div);
    
    //binding the search box
    $(txtSearch).keyup(function(){
        var txt = $(this).val().toLowerCase();
        var count = 0;
        
        if(txt != ""){                                 
            $(au_div).html('').css('visibility','visible');
            var re= new RegExp("(" + txt + ")", 'gi');
            
            list.forEach(function(e){
                if(e.toLowerCase().toString().indexOf(txt) != -1 && count < limit){                    
                        var res = e.replace(re,"<b>$1</b>")
                        
                        var item = document.createElement("li");
                        $(item).html(res);
                        $(item).click(function(){
                            $(txtSearch).val(e);
                            $(au_div).html('').css('visibility','hidden');
                        });
                        $(au_div).append(item);
                        count++;                   
                }
            });
        }else{
            $(au_div).html('').css('visibility','hidden');
        }
    });
}

