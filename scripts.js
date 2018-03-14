   var site;
   var primoSiteFacet;
   
   function initialise(){ 
  		document.getElementById("searchurl").value = "https://ljmu-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=44JMU_VU1&amp;sortby=rank&amp;query=any,contains,{search}";
    	site = window.location.search;
    	site = site.substring(1);
    	switch(site) {
    		case "aldham":
    	     	 primoSiteFacet="&amp;mfacet=library,include,44JMU_ALD_LIB,1";
    	    break;
    		case "avril":
    	     	 primoSiteFacet="&amp;mfacet=library,include,44JMU_AVR_LIB,1";
    	    break;
    	    case "marsh":
    	    	 primoSiteFacet="&amp;mfacet=library,include,44JMU_MAR_LIB,1";
    		default:
    			site = "marsh";
    			primoSiteFacet="&amp;mfacet=library,include,44JMU_MAR_LIB,1";
		}
     	siteTitle = site.charAt(0).toUpperCase() + site.substr(1).toLowerCase();
    	document.getElementById("siteonly-sitename").innerHTML = siteTitle;
    	return false;
  } 


  function goSearch(){ 
  		var t=encodeURIComponent(jQuery("#searchtext").val()); 
  		var booksonly =
  			document.getElementById("booksonly").checked; 
  		var siteonly =
  			document.getElementById("siteonly").checked; 
  		if (""==t) return false; 
  		var e=jQuery("#searchtarget").val(); 
  		var i=document.easysearch.searchurl.value; 
  		if ( booksonly ) { 
  			i = i.concat("&amp;facet=rtype,include,books"); 
  		} 
  		if ( siteonly ) { 
  			i = i.concat(primoSiteFacet.valueOf()); 
  		} 
  		alert(i);
  		i=i.replace(/&amp;/g,"&"),window.open(i.replace("{search}",t)) 
  		return false; 
  	}
