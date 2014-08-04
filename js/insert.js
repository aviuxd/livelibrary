// This javascript inserts all the nav links. Each page has the snippet of code to highlight the active link

  $(document).ready(function(){
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="index.html">Home</a></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="protectpiadmin.html">Protect piadmin</a></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="piconfigcommand.html">Options for the piconfig command</a></li></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="signupforpiupdate.html">SignUpForPIUpdates method</a></li></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="servererror.html">Server error in PI Web Services application</a></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="exploreevents.html">Explore events related to an element</a></li>');
    $('.bs-docs-sidenav').append('<li style="display:none;    text-align:initial;"><a href="heatpumptemplate.html">Create the heat pump templates</a></li>');
  }
  );
