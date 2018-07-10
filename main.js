window.onload = (function(){

	let link = "https://api.github.com/repos/joeyklee/hyperlinks-with-friends/issues"
	$.getJSON( link, function( data ) {
	  
	  console.log(data)
	  let $links;
	  $links = data.map(link => {
	  	return (`<div><a href="${link.title}">${link.title}</a> from ${link.user.login}</div>`)
	  })

	  $("#links").html($links)
	});

})();