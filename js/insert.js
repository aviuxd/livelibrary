// This javascript inserts all the nav links. Each page has the snippet of code to highlight the active link

  $(document).ready(function(){

   var htmlVar;

    htmlVar = '<li style="display:none; text-align:initial;"><a href="inlineelementstest.html">Inline Elements Test</a></li>';
    htmlVar += '<li style="display:none; text-align:initial;"><a href="inlineelementstest-2.html">Inline Elements Test (option 2)</a></li>';
    htmlVar += '<li style="display:none; text-align:initial;"><a href="codeblocktest.html">Codeblock Tests</a></li>';
    htmlVar += '<li style="display:none; text-align:initial;"><a href="codeblocktest-2.html">Codeblock Tests (option 2)</a></li>';
    htmlVar += '<li style="display:none; text-align:initial;"><a href="figureswithdescription.html">Figures With Description</a></li>';
    htmlVar += '<li style="display:none; text-align:initial;"><a href="tableswithdescriptions.html">Tables With Descriptions</a></li>';



    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="index.html">Home</a></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="landing.html">Landing Page</a></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="protectpiadmin.html">Protect piadmin</a></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="piconfigcommand.html">Options for the piconfig command</a></li></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="signupforpiupdate.html">SignUpForPIUpdates method</a></li></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="servererror.html">Server error in PI Web Services application</a></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="exploreevents.html">Explore events related to an element</a></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="heatpumptemplate.html">Create the heat pump templates</a></li>');

    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="inlineelementstest.html">OSIsoft DITA Test Publication Map</a><ul id="sub-elements" class="nav"></u></li>');

    $('#sub-elements').append(htmlVar);

    // $(html).appendTo('.bs-docs-sidenav'); 
  }
  );
  
