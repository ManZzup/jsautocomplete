Javascript Auto Complete
========================

This is a highly portable, lightweight and minimalist auto complete plugin written on top of JQuery library. Very easy to implement. Just one line of code to initialize but user must specify the implementation of retrieving auto complete list from a dynamic or static source.

USAGE
-----

1.  Add a reference to **jsautocomplete.js** and **jsautocomplete.css** in your header section
2.  Edit the **jsautocomplete.js** and find the section marked as "USER IMPLEMENTATION GOES HERE"
3.  Add your implementation to retrieve list of auto complete items to the `list` array
4.  Initialize the auto complete in your document ready 

***NOTE: This plugin requires JQuery***

```html
<!DOCTYPE html>
<html>
    <head>
        <title>JS Auto Complete for JQuery</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="../front/js/jquery.js"></script>
        <script type="text/javascript" src="jsautocomplete.js"></script>
        <link rel="stylesheet" type="text/css" href="jsautocomplete.css" />
        <script>
            $(document).ready(function(){
                var jsac = new JsAutoComplete("#search",4);
            });
        </script>
    </head>
    <body>
        <input type="text" id="search" size="50" autocomplete="off" />               
    </body>
</html>
```

In the above code "#search" is the JQuery identifier for the textbox while "4" is the no of list items to be shown in auto complete. You can edit the css file to pimp up your search results :D

That's it, you now have a perfectly functioning auto complete with some work on your own !

Please do report bugs, comments and suggestions
twitter   @\_manzzup\_
mail      manujith.nc[at]gmail[dot]com

 
