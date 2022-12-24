// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', 'GITHUB_API_TOKEN'); // put API token here
});

// Put your campus prefix here
window.CAMPUS = 'FILL_ME_IN'; // put campus info here 'rfp'


// check LEARN, this might be a fake example and we have to create a new one
