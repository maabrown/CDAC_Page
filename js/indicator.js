// JavaScript Document
	var loadComplete = 0;
	var txt;
	//var txtLegend = '<div id="dashboard-legend"><ul><li><span>*</span>Â change not statistically significant</li><li><span>Âº</span>Â significance not reported/applicable</li></ul></div>';
	jQuery.ajax({
		url: '/sites/all/themes/icompany/includes/cross_domain.php?action=fullcensus',
		type: "POST",
		timeout:9000,
		success: function(dat) {
			var txt = jQuery(dat).find('[id~="indicator-table"]').html();	
			if(txt){		
				var txt = txt.replace(/<img .*?>|\&nbsp;|<br>|\\/gm,"").replace(/\s/gm," ");
			} 
			else{
				errorhandling();
				}
			var xsl=loadXMLDoc("/sites/all/themes/icompany/includes/Indicator.xsl?"+getTimeString());
			applyXsltToXML(txt,xsl,"#indicator1");
			manageLoadComplete();										
		}
		,error: function (error) {
				errorhandling(); 
              }
	});
	 function errorhandling() {
		var txt = '<lo class="item" classname="Advance Monthly Sales for Retail and Food Services"><h4><span class="color">Advance Monthly Sales for Retail and Food Services</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Advance Report on Durable Goods Manufacturers Shipments, Inventories, and Orders "><h4><span class="color">Advance Report on Durable Goods Manufacturers Shipments, Inventories, and Orders</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Construction Spending "><h4><span class="color">Construction Spending</span> </h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Homeownership Rate"><h4><span class="color">Homeownership Rate</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Manufacturers Shipments, Inventories, and Orders"><h4><span class="color">Manufacturers Shipments, Inventories, and Orders</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Manufacturing and Trade Inventories and Sales "><h4><span class="color">Manufacturing and Trade Inventories and Sales</span> </h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Monthly Wholesale Trade "><h4><span class="color">Monthly Wholesale Trade</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="New Residential Construction"><h4><span class="color">New Residential Construction</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="New Residential Sales"><h4><span class="color">New Residential Sales</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Quarterly Financial Report - Manufacturing, Mining, Wholesale Trade, and Selected Service Industries"><h4><span class="color">Quarterly Financial Report - Manufacturing, Mining, Wholesale Trade, and Selected Service Industries</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Quarterly Financial Report - Retail Trade"><h4><span class="color">Quarterly Financial Report - Retail Trade</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Quarterly Services Survey"><h4><span class="color">Quarterly Services Survey</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="Rental Vacancy Rate"><h4><span class="color">Rental Vacancy Rate</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo><lo class="item" classname="U.S. International Trade in Goods and Services"><h4><span class="color">U.S. International Trade in Goods and Services</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.census.gov">visit Census.gov for this information</a>.</div></lo>';
		jQuery(txt).appendTo('#indicator1');	
		manageLoadComplete();
		}
	// BEA data for Indicators Page
	jQuery.ajax({
		url: '/sites/all/themes/icompany/includes/cross_domain.php?action=bearss',
		type: "POST",
		timeout:9000,
		contentType: "application/xml",
		processData: false,
		success: function(tes) {		
			var xsl=loadXMLDoc("/sites/all/themes/icompany/includes/Bea-Indicators.xsl?"+getTimeString());
			applyXsltToXML(tes,xsl,"#indicator2");
			manageLoadComplete();
		},
		error: function(){
				var txt = '<lo class="item" classname="Gross Domestic Product"><h4><span class="color">Gross Domestic Product</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.bea.gov">visit Bea.gov for this information</a>.</div></lo><lo class="item" classname="Personal Income and Outlays"><h4><span class="color">Personal Income and Outlays</span></h4><div class="alert alert-danger" role="alert">Could not retrieve data. Please <a href="http://www.bea.gov">visit Bea.gov for this information</a>.</div></lo>';
				jQuery(txt).appendTo('#indicator2');	
				manageLoadComplete();
			}
	});
	
function manageLoadComplete()
{
 	loadComplete++;  
	if(loadComplete == 2)
	{
		jQuery("#indicator2 lo").appendTo("#indicator1" );
		jQuery("#indicator2").remove();
		jQuery("#indicator1").html(jQuery("#indicator1 lo").toArray().sort(function(a,b){return jQuery(a).attr("classname").localeCompare(jQuery(b).attr("classname"))}));
		jQuery('#indicator1').children().appendTo('.indicators-injector');
		jQuery('.indicators-injector').hide().fadeIn(1000)
		jQuery(".fetcher").remove();
	}  
}
	// Census data for right blue dashboard
	var loadCompletes = 0;
	jQuery.ajax({
		url: '/sites/all/themes/icompany/includes/cross_domain.php?action=fullcensus',
		type: "POST",
		timeout:9000,
		success: function(dat) {	
			var txt = jQuery(dat).find('[id~="indicator-table"]').html();	
			if(txt){		
				var txt = txt.replace(/<img .*?>|\&nbsp;|<br>|\\/gm,"").replace(/\s/gm," ");
			}
						else{
				errorhandle();
				}  
			var xsl=loadXMLDoc("/sites/all/themes/icompany/includes/BlueWidget.xsl?"+getTimeString());//		
			applyXsltToXML(txt,xsl,"#feed1");
			manageLoadCompletes();										
		},
		error: function(error){
				errorhandle();
			} 
	});
	function errorhandle() {
				var txt = '<lo classattr="March 02,2000"><a class="indicator-item unavailable" href="http://www.census.gov/foreign-trade/" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">U.S. International Trade in Goods and Services</td></tr><tr><td class="timeframe">Could not retrieve data.</td></td><td  rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Census.gov for this information</span>.</td></tr></tbody></table></a></lo><lo classattr="February 27,2000"><a class="indicator-item unavailable" href="http://www.census.gov/retail/" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">Advance Monthly Sales for Retail and Food Services</td></tr><tr><td class="timeframe">Could not retrieve data.</td><td class="data-point" rowspan="2"></td><td rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Census.gov for this information</span>.</td></tr></tbody></table></a></lo>';
		jQuery(txt).appendTo('#feed1');	
		manageLoadCompletes();
			}		
	jQuery.ajax({
	url: '/sites/all/themes/icompany/includes/cross_domain.php?action=fullcensus',
	type: "POST",
	timeout:9000,
	success: function(drat) {	
		var txt = jQuery(drat).find('[id~="indicator-table"]').html();	
			if(txt){		
				var txt = txt.replace(/<img .*?>|\&nbsp;|<br>|\\/gm,"").replace(/\s/gm," ");
			}
			else{
				errorhandle2();
				} 
		var xsl=loadXMLDoc("/sites/all/themes/icompany/includes/Blu-Indicators.xsl?"+getTimeString());//
		applyXsltToXML(txt,xsl,"#feed2");
		manageLoadCompletes();
	},
	error: function(){
			errorhandle2();
		}
	});
		function errorhandle2() {
			var txt = '<lo classattr="March 02,2000"><a class="indicator-item unavailable" href="http://www.census.gov/manufacturing/m3/" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">Manufacturers Shipments, Inventories, and Orders</td></tr><tr><td class="timeframe">Could not retrieve data.</td></td><td  rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Census.gov for this information</span>.</td></tr></tbody></table></a></lo><lo classattr="February 27,2000"><a class="indicator-item unavailable" href="http://www.census.gov/wholesale/index.html" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">Monthly Wholesale Trade</td></tr><tr><td class="timeframe">Could not retrieve data.</td><td class="data-point" rowspan="2"></td><td rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Census.gov for this information</span>.</td></tr></tbody></table></a></lo>';
		jQuery(txt).appendTo('#feed2');	
		manageLoadCompletes();
			}
	 /// DOL Data for right blue dashboard///
/*	jQuery(function(){	
		var dat = jQuery.trim(jQuery('#dom-target').html());	
		if (dat){
			jQuery('#feed3').append(dat);
				}
		else{
			var txt = '<lo classattr="March 06, 2000"><a class="indicator-item unavailable" href="http://www.bls.gov/bls/newsrels.htm#OEUS" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">Unemployment Rate</td></tr><tr><td class="timeframe">Could not retrieve data.</td><td class="data-point" rowspan="2"></td><td  rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Bls.gov for this information</span>.</td></tr></tbody></table></a></lo>'
			jQuery(txt).appendTo('#feed3');
			}
		manageLoadCompletes(); 	
	});  */
	/// BEA data for right blue dashboard /// 
		jQuery.ajax({
		url: '/sites/all/themes/icompany/includes/cross_domain.php?action=unemployment',
		type: "POST",
		timeout:9000,
		contentType: "application/xml",
		success: function(tes) {
				var xsl=loadXMLDoc("/sites/all/themes/icompany/includes/unemployment.xsl?"+getTimeString());
				applyXsltToXML(tes,xsl,"#feed3");
				manageLoadCompletes();
		},
		error: function(){
			var txt = '<lo classattr="March 06, 2000"><a class="indicator-item unavailable" href="http://www.bls.gov/bls/newsrels.htm#OEUS" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">Unemployment Rate</td></tr><tr><td class="timeframe">Could not retrieve data.</td><td class="data-point" rowspan="2"></td><td  rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Bls.gov for this information</span>.</td></tr></tbody></table></a></lo>'
				jQuery(txt).appendTo('#feed3');	
				manageLoadCompletes();
			}
	});
	jQuery.ajax({
		url: '/sites/all/themes/icompany/includes/cross_domain.php?action=bearss',
		type: "POST",
		timeout:9000,
		contentType: "application/xml",
		success: function(tes) {
				var xsl=loadXMLDoc("/sites/all/themes/icompany/includes/BeaBlueWidget.xsl?"+getTimeString());
				applyXsltToXML(tes,xsl,"#feed4");				
				manageLoadCompletes();
		},
		error: function(){
				var txt = '<lo classattr="March02,1999"><a class="indicator-item unavailable" href="http://www.bea.gov/newsreleases/national/pi/2015/pi0115.htm" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">Personal Income and Outlays</td></tr><tr><td class="timeframe">Could not retrieve data.</td></td><td  rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Bea.gov for this information</span>.</td></tr></tbody></table></a></lo><lo classattr="February27,2000"><a class="indicator-item unavailable" href="http://www.bea.gov/newsreleases/national/gdp/2015/gdp4q14_2nd.htm" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">Gross Domestic Product</td></tr><tr><td class="timeframe">Could not retrieve data.</td><td class="data-point" rowspan="2"></td><td rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Bea.gov for this information</span>.</td></tr></tbody></table></a></lo>';
				jQuery(txt).appendTo('#feed4');	
				manageLoadCompletes();
			}
	}); 
	
	/// BEA data for right blue dashboard /// 
	jQuery.ajax({
		url: '/sites/all/themes/icompany/includes/cross_domain.php?action=bearss',
		type: "POST",
		timeout:9000,
		contentType: "application/xml",
		success: function(tes) {
				var xsl=loadXMLDoc("/sites/all/themes/icompany/includes/Bea-Blue-Second.xsl?"+getTimeString());
				var vlus = applyXsltToXML(tes,xsl,"#feed5");				
				manageLoadCompletes();
		},
		error: function(){
				var txt = '<lo classattr="March02,2000"><a class="indicator-item unavailable" href="http://www.bea.gov/newsreleases/regional/spi/2015/spi0315.htm" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">State Quarterly Personal Income</td></tr><tr><td class="timeframe">Could not retrieve data.</td></td><td  rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Bea.gov for this information</span>.</td></tr></tbody></table></a></lo><lo classattr="February27,2000"><a class="indicator-item unavailable" href="http://www.bea.gov/newsreleases/international/transactions/2015/trans414.htm" target="_blank" style="opacity: 1;"><table><tbody><tr><td class="title" colspan="3">U.S. International Transactions</td></tr><tr><td class="timeframe">Could not retrieve data.</td><td class="data-point" rowspan="2"></td><td rowspan="2"></td></tr><tr><td class="release-date">Please <span>visit Bea.gov for this information</span>.</td></tr></tbody></table></a></lo>';
				jQuery(txt).appendTo('#feed5');	
				manageLoadCompletes();
			}
	}); 
	
	function manageLoadCompletes()
		{
			// alert(a)
		loadCompletes++;  
		if(loadCompletes == 5)
		{	
			var blah = jQuery("#feed5 lo,#feed2 lo").appendTo("#nv-target"); 
			jQuery("#nv-target").html(jQuery("#nv-target lo").toArray().sort(function(a,b){
			  return moment(new Date(jQuery(b).attr("classattr"))) - moment(new Date(jQuery(a).attr("classattr")))}
				));	
			jQuery("#feed1 lo,#feed3 lo,#feed4 lo,#nv-target lo:nth-child(n+1):nth-child(-n+2)").appendTo("#nvisible-target"); 
			jQuery("#feed1,#feed2,#feed3,#feed4,#feed5,#nv-target").remove();
			
			jQuery("#nvisible-target").html(jQuery("#nvisible-target lo").toArray().sort(function(a,b){
			  return moment(new Date(jQuery(b).attr("classattr"))) - moment(new Date(jQuery(a).attr("classattr")))}
				));			
			if(moment(new Date(jQuery("#nvisible-target lo:nth-child(1)").attr('classattr'))) - moment(new Date(jQuery("#nvisible-target lo:nth-child(2)").attr('classattr'))) == 0){	
				jQuery("#nvisible-target lo:nth-child(2)").after('<div class="divider">Key Indicators</div>');
				jQuery('#nvisible-target').prepend('<div class="title">Current Releases</div>');
				}
			else{
				jQuery("#nvisible-target lo:nth-child(1)").after('<div class="divider">Key Indicators</div>');
				jQuery('#nvisible-target').prepend('<div class="title">Current Release</div>');
				}
			jQuery('#nvisible-target').children().appendTo('#feed');
			jQuery('#feed').hide().fadeIn(1000);
			jQuery("#showspin").remove();
			jQuery("#dashboard-legend").show();
			jQuery("#feed lo a, .region-social ul li a, .simplenews-subscribe a,#dashboard-legend ul li").hover(function(e) {
				jQuery(this).css({ opacity: 0.5 });
				jQuery(this).stop().animate({ opacity: 1 }, 250);
			});	
			
		  } 
		     		
		}	
		
	function getTimeString(){return (new Date()).getTime();}

	function loadXMLDoc(dname)
		{
			if (window.XMLHttpRequest)
					xhttp=new XMLHttpRequest();
			else
					xhttp=new ActiveXObject("Microsoft.XMLHTTP");
			xhttp.open("GET",dname,false);
			//fix for ie 10. doesn't affect other viersions/browsers
			try { xhttp.responseType = "msxml-document"; }catch (e) {};
			xhttp.send("");
			return xhttp.responseXML;
		}
	
	function applyXsltToXML(xml,xsl,docid)
		{	
			var ex,resultDocument;
			var doc = jQuery(docid);
			// code for IE
			if (window.ActiveXObject || xhttp.responseType == "msxml-document") {       
			   var xslt = new ActiveXObject("Msxml2.XSLTemplate"); 
			   var xmlDoc = new ActiveXObject("Msxml2.DOMDocument"); 
			   var xslDoc = new ActiveXObject("Msxml2.FreeThreadedDOMDocument"); 
			   xmlDoc.loadXML(xml); 
			   xslDoc.loadXML(xsl.xml); 
			   xslt.stylesheet = xslDoc; 
			   var xslProc = xslt.createProcessor(); 
			   xslProc.input = xmlDoc; 
			   xslProc.transform(); 
			   ex=xslProc.output;
				if(doc.length > 0)
				doc.html("").append(jQuery(ex));
			} 
			// code for Mozilla, Firefox, Opera, etc.
			else if (document.implementation && document.implementation.createDocument)
			{
				xsltProcessor=new XSLTProcessor();
				xsltProcessor.importStylesheet(xsl);
				ex = xsltProcessor.transformToFragment(jQuery.parseXML(xml),document);
				if(doc.length > 0){
					doc.html("").append(jQuery(ex));
				}
			}
		}