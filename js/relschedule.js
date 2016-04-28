/*	function isLink(relDate)
	{
		var cdate = new Date();
		var relDate = new Date(relDate);
		if(cdate.getTime() > relDate.getTime())
		{
			return true;
		}
		return false;				
	}*/
	(function ($) {
	$( document ).ready(function() {
		var cdd = 'table_id_'+ new Date().getFullYear();
		$('#table_id_2016  tbody  tr').each(function(i,e) {
			var errorMessage = 'Archived document does not exist, please visit ';
			var period = $(e).children("td:eq(1)").text();
			var md = $(e).find("td:eq(2)").text().split(" ");
			var m = md[0];
			var d = md[1];
			var t = $(e).find("td:eq(3)").text().split(':');
			var h = t[0].trim();
			if(h < 10 ){
				var h = '0' + h;
			  }
			var n = t[1].substr(0,2);
			var cd = new Date();

			var year = cd.getFullYear();
			var newyear = year.toString().substr(2,2);
			var newmmm = period.toLowerCase().substr(0,3);
			//var newmonth = new Date(period+'-1-01').getMonth()+1;
			var newmonth = moment().month(period).format('MM');
			var m_to_compare = moment().month(m).format('MM');
			var relDate =  moment(cd.getFullYear()+"-"+m_to_compare+"-"+d+"T"+h+":"+n);

			if(m_to_compare < 10 && (period == 'November' || period == 'December')){
				newdat = cd.getFullYear() -1;
				var newyear = newdat.toString().substr(2,2);
				var linkyearmarts = newyear;
				var linkyearMSI = newdat+'/'+newmmm+newyear;
				var linkyeartrade = cd.getFullYear()+ '/' +'trad'+newmonth+newyear;
				var linkyearpi = cd.getFullYear()+ '/' +'pi'+newmonth+newyear;
				}
			else{
				newdat = cd.getFullYear();
				var linkyearMSI = newdat+'/'+newmmm+newyear;
				var linkyeartrade = year+ '/' +'trad'+newmonth+newyear;
				var linkyearmarts = newyear;
				var linkyearpi = year+ '/' +'pi'+newmonth+newyear;
				}
			  
			if(period.search('Q4') != -1){
				var newdat = cd.getFullYear() -1;
				var newyear = newdat.toString().substr(2,2);
				var linkyear = 'qtr4'+newyear;
				var linkyeargdp = year+ '/' +'gdp4'+'q'+newyear;
				var qrt = 'q4';
				}
			else if(period.search('Q1') != -1){
				var linkyear = 'qtr1'+newyear;
				var linkyeargdp = year+ '/' +'gdp1'+'q'+newyear;
				var qrt = 'q1';
				}
			else if(period.search('Q2') != -1){
				var linkyear =  'qtr2'+newyear;
				var linkyeargdp = year+ '/' +'gdp2'+'q'+newyear;
				var qrt = 'q2';
				}
			else {
				var linkyear =  'qtr3'+newyear;
				var linkyeargdp = year+ '/' +'gdp3'+'q'+newyear;
				var qrt = 'q3';
				}
			var qt = qrt.toString().substr(1,1);
			var titlefull = $(e).find('td:eq(0)').text().split('(');
			var titlefirst = titlefull[0];
			var titlethird = '';
			if(titlefull[2]) {
				var titlethird = '('+titlefull[2];
				}
			var titlesecond = titlefull[1]+' ' + titlethird;
		if(relDate < moment()){
			 if ($(e).find('td:eq(0)').text() =="Gross Domestic Product (Advance) (BEA)" ||  $(e).find('td:eq(0)').text() =="Gross Domestic Product (Second) (BEA)" 
						|| $(e).find('td:eq(0)').text() =="Gross Domestic Product (Third) (BEA)" ){				  
					if($(e).find('td:eq(0)').text() =="Gross Domestic Product (Advance) (BEA)"){
							var newlink = 'http://www.bea.gov/newsreleases/national/gdp/'+ linkyeargdp +'_adv.htm';
							var brokenlink = 'http://www.Bea.gov';
						}
		
					else if ($(e).find('td:eq(0)').text() =="Gross Domestic Product (Second) (BEA)"){
							var newlink = 'http://www.bea.gov/newsreleases/national/gdp/'+ linkyeargdp +'_2nd.htm';
							var brokenlink = 'http://www.Bea.gov';
						}
					else {
							var newlink = 'http://www.bea.gov/newsreleases/national/gdp/'+ linkyeargdp +'_3rd.htm';
							var brokenlink = 'http://www.Bea.gov';
						}
			}
			else if ($(e).find('td:eq(0)').text() =='U.S. International Trade in Goods and Services (BEA and Census)'){				  
					var newlink = 'http://www.bea.gov/newsreleases/international/trade/'+ linkyeartrade +'.htm';
					var brokenlink = 'http://www.Bea.gov';
			}
			else if ($(e).find('td:eq(0)').text() =='Personal Income and Outlays (BEA)'){		  
					var newlink = 'http://www.bea.gov/newsreleases/national/pi/'+ linkyearpi +'.htm';
					var brokenlink = 'http://www.Bea.gov';
			}
			else if ($(e).find('td:eq(0)').text() =="International Transactions (BEA)"){
					var newlink = 'http://www.bea.gov/newsreleases/international/transactions/'+ cd.getFullYear()+'/trans'+qt+newyear +'.htm';
					var brokenlink = 'http://www.Bea.gov';
				}
			else if ($(e).find('td:eq(0)').text() =='Construction Spending (Census)'){								  
				var newlink = 'http://www.census.gov/construction/c30/pdf/pr' + newdat + newmonth +'.pdf';
				var brokenlink = 'http://www.census.gov/construction/c30/c30index.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Monthly Wholesale Trade (Census)'){				  
				var newlink = 'http://www2.census.gov/wholesale/pdf/mwts/historic/mwts_' + newdat + newmonth +'.pdf';
				var brokenlink = 'http://www.census.gov/wholesale/index.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Homeownership Rate (Census)'){				  
					var newlink = 'http://www.census.gov/housing/hvs/files/'+ linkyear +'/currenthvspress.pdf';
					var brokenlink = 'http://www.census.gov/housing/hvs/index.html';
			}			  
			else if($(e).find('td:eq(0)').text() =="Manufacturers' Shipments, Inventories, and Orders (Census)"){
							var newlink = 'http://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/'+ linkyearMSI +'prel.pdf';
							var brokenlink = 'http://www.census.gov/manufacturing/m3/historical_data/index.html';
						}
			else if($(e).find('td:eq(0)').text() =="Manufacturing and Trade Inventories and Sales (Census)"){
							var newlink = 'http://www2.census.gov/mtis/historical/mtis'+ newyear + newmonth +'.pdf';
							var brokenlink = 'http://www.census.gov/manufacturing/m3/historical_data/index.html';
						}		
			else if ( $(e).find('td:eq(0)').text() =="Advance Report on Durable Goods Manufacturers' Shipments, Inventories, and Orders (Census)"){
							var newlink = 'http://www.census.gov/manufacturing/m3/historical_data/pressreleases/adv/'+ linkyearMSI +'adv.pdf';
							var brokenlink = 'http://www.census.gov/manufacturing/m3/historical_data/index.html';
						}
			
			else if ($(e).find('td:eq(0)').text() =='Advance Monthly Sales for Retail and Food Services (Census)'){				  
					var newlink = 'http://www2.census.gov/retail/releases/historical/marts/adv'+ linkyearmarts + newmonth +'.pdf';
					var brokenlink = 'http://www.census.gov/retail/index.html';
			}
			
			else if ($(e).find('td:eq(0)').text() =='New Residential Construction (Census)'){				  
					var newlink = 'http://www.census.gov/construction/nrc/pdf/newresconst_'+ newdat + newmonth +'.pdf';
					var brokenlink = 'http://www.census.gov/construction/nrc/historical_data/historic_releases.html';
			}
			else if ($(e).find('td:eq(0)').text() =='New Residential Sales (Census)'){				  
					var newlink = 'http://www.census.gov/construction/nrs/pdf/newressales_'+ newdat + newmonth +'.pdf';
					var brokenlink = 'http://www.census.gov/construction/nrs/historical_data/historic_releases.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Quarterly Services (Census)'){				  
					var newlink = 'http://www2.census.gov/econ/qfr/pubs/qfr'+ newyear+qrt +'.pdf';
					var brokenlink = 'http://www.census.gov/services/index.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Quarterly Financial Report - Retail Trade (Census)'){				  
					var newlink = 'http://www2.census.gov/econ/qfr/press/qfr'+ newyear+ qt +'rt.pdf';
					var brokenlink = 'http://www.census.gov/services/index.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Quarterly Financial Report/Manufacturing, Mining and Wholesale Trade (Census)'){				  
					var newlink = 'http://www2.census.gov/econ/qfr/pubs/qfr'+ newyear+ qrt +'.pdf';
					var brokenlink = 'http://www.census.gov/services/index.html';
			}
			
			if (titlesecond.indexOf("BEA") >= 0){
				var errormsg = '<span id="error">' + errorMessage +' <a href="' + brokenlink + '">Bea.gov</a>.</span>';
				}
			else{
				var errormsg = '<span id="error">' + errorMessage +' <a href="' + brokenlink + '">Census.gov</a>.</span>';
				}
			var url = '/sites/all/themes/icompany/includes/cross_domain.php?action=checkurl&urlcheck='+newlink;
			$.ajax({
					type: 'POST',
					url: url,
					timeout:9000,
					success: function(tes) {
						if(tes == ''){
							var links = $('<a>',{text:titlefirst,href:brokenlink});
							$(e).find('td:eq(0)').text('').append(links,'(',titlesecond,errormsg);
						}
						else{
							var newlink = tes;
							var links = $('<a>',{text:titlefirst,href:newlink});
							$(e).find('td:eq(0)').text('').append(links,'(',titlesecond);
						}
							},
					error: function(){
							var links = $('<a>',{text:titlefirst,href:brokenlink});
							$(e).find('td:eq(0)').text('').append(links,'(',titlesecond,errormsg);
					}
				});			
		}
	});		
});	
$( document ).ready(function() {
		$("#table_id_2015  tbody tr").each(function(i,e) {
			var errorMessage = 'Archived document does not exist, please visit ';
			var period = $(e).children("td:eq(1)").text();
			var md = $(e).find("td:eq(2)").text().split(" ");
			var m = md[0];
			var d = md[1];
			var t = $(e).find("td:eq(3)").text().split(':');
			var h = t[0].trim();
			if(h < 10 ){
				var h = '0' + h;
			  }
			var n = t[1].substr(0,2);
			var cd = new Date();

			var year = cd.getFullYear()-1;
			var newyear = year.toString().substr(2,2);
			var newmmm = period.toLowerCase().substr(0,3);
			//var newmonth = new Date(period+'-1-01').getMonth()+1;
			var newmonth = moment().month(period).format('MM');
			var m_to_compare = moment().month(m).format('MM');
			//var relDate =  moment(cd.getFullYear()+"-"+m_to_compare+"-"+d+"T"+h+":"+n);

			if(m_to_compare < 10 && (period == 'November' || period == 'December')){
				newdat = cd.getFullYear() -2;
				var newyear = newdat.toString().substr(2,2);
				var linkyearmarts = newyear;
				var linkyearMSI = newdat+'/'+newmmm+newyear;
				var linkyeartrade = cd.getFullYear()-1+ '/' +'trad'+newmonth+newyear;
				var linkyearpi = cd.getFullYear()-1+ '/' +'pi'+newmonth+newyear;
				}
			else{
				newdat = cd.getFullYear()-1;
				var linkyearMSI = newdat+'/'+newmmm+newyear;
				var linkyeartrade = year+ '/' +'trad'+newmonth+newyear;
				var linkyearmarts = newyear;
				var linkyearpi = year+ '/' +'pi'+newmonth+newyear;
				}
			  
			if(period.search('Q4') != -1){
				var newdat = cd.getFullYear() -2;
				var newyear = newdat.toString().substr(2,2);
				var linkyear = 'qtr4'+newyear;
				var linkyeargdp = year+ '/' +'gdp4'+'q'+newyear;
				var qrt = 'q4';
				}
			else if(period.search('Q1') != -1){
				var linkyear = 'qtr1'+newyear;
				var linkyeargdp = year+ '/' +'gdp1'+'q'+newyear;
				var qrt = 'q1';
				}
			else if(period.search('Q2') != -1){
				var linkyear =  'qtr2'+newyear;
				var linkyeargdp = year+ '/' +'gdp2'+'q'+newyear;
				var qrt = 'q2';
				}
			else {
				var linkyear =  'qtr3'+newyear;
				var linkyeargdp = year+ '/' +'gdp3'+'q'+newyear;
				var qrt = 'q3';
				}
			var qt = qrt.toString().substr(1,1);
			var titlefull = $(e).find('td:eq(0)').text().split('(');
			var titlefirst = titlefull[0];
			var titlethird = '';
			if(titlefull[2]) {
				var titlethird = '('+titlefull[2];
				}
			var titlesecond = titlefull[1]+' ' + titlethird;
		//if(relDate < moment()){
			 if ($(e).find('td:eq(0)').text() =="Gross Domestic Product (Advance) (BEA)" ||  $(e).find('td:eq(0)').text() =="Gross Domestic Product (Second) (BEA)" 
						|| $(e).find('td:eq(0)').text() =="Gross Domestic Product (Third) (BEA)" ){				  
					if($(e).find('td:eq(0)').text() =="Gross Domestic Product (Advance) (BEA)"){
							var newlink = 'http://www.bea.gov/newsreleases/national/gdp/'+ linkyeargdp +'_adv.htm';
							var brokenlink = 'http://www.Bea.gov';
						}
		
					else if ($(e).find('td:eq(0)').text() =="Gross Domestic Product (Second) (BEA)"){
							var newlink = 'http://www.bea.gov/newsreleases/national/gdp/'+ linkyeargdp +'_2nd.htm';
							var brokenlink = 'http://www.Bea.gov';
						}
					else {
							var newlink = 'http://www.bea.gov/newsreleases/national/gdp/'+ linkyeargdp +'_3rd.htm';
							var brokenlink = 'http://www.Bea.gov';
						}
			}
			else if ($(e).find('td:eq(0)').text() =='U.S. International Trade in Goods and Services (BEA and Census)'){				  
					var newlink = 'http://www.bea.gov/newsreleases/international/trade/'+ linkyeartrade +'.htm';
					var brokenlink = 'http://www.Bea.gov';
			}
			else if ($(e).find('td:eq(0)').text() =='Personal Income and Outlays (BEA)'){		  
					var newlink = 'http://www.bea.gov/newsreleases/national/pi/'+ linkyearpi +'.htm';
					var brokenlink = 'http://www.Bea.gov';
			}
			else if ($(e).find('td:eq(0)').text() =="International Transactions (BEA)"){
					var newlink = 'http://www.bea.gov/newsreleases/international/transactions/'+year+'/trans'+qt+newyear +'.htm';
					var brokenlink = 'http://www.Bea.gov';
				}
			else if ($(e).find('td:eq(0)').text() =='Construction Spending (Census)'){								  
				var newlink = 'http://www.census.gov/construction/c30/pdf/pr' + newdat + newmonth +'.pdf';
				var brokenlink = 'http://www.census.gov/construction/c30/c30index.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Monthly Wholesale Trade (Census)'){				  
				var newlink = 'http://www2.census.gov/wholesale/pdf/mwts/historic/mwts_' + newdat + newmonth +'.pdf';
				var brokenlink = 'http://www.census.gov/wholesale/index.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Homeownership Rate (Census)'){				  
					var newlink = 'http://www.census.gov/housing/hvs/files/'+ linkyear +'/currenthvspress.pdf';
					var brokenlink = 'http://www.census.gov/housing/hvs/index.html';
			}			  
			else if($(e).find('td:eq(0)').text() =="Manufacturers' Shipments, Inventories, and Orders (Census)"){
							var newlink = 'http://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/'+ linkyearMSI +'prel.pdf';
							var brokenlink = 'http://www.census.gov/manufacturing/m3/historical_data/index.html';
						}
			else if($(e).find('td:eq(0)').text() =="Manufacturing and Trade Inventories and Sales (Census)"){
							var newlink = 'http://www2.census.gov/mtis/historical/mtis'+ newyear + newmonth +'.pdf';
							var brokenlink = 'http://www.census.gov/manufacturing/m3/historical_data/index.html';
						}		
			else if ( $(e).find('td:eq(0)').text() =="Advance Report on Durable Goods Manufacturers' Shipments, Inventories, and Orders (Census)"){
							var newlink = 'http://www.census.gov/manufacturing/m3/historical_data/pressreleases/adv/'+ linkyearMSI +'adv.pdf';
							var brokenlink = 'http://www.census.gov/manufacturing/m3/historical_data/index.html';
						}
			
			else if ($(e).find('td:eq(0)').text() =='Advance Monthly Sales for Retail and Food Services (Census)'){				  
					var newlink = 'http://www2.census.gov/retail/releases/historical/marts/adv'+ linkyearmarts + newmonth +'.pdf';
					var brokenlink = 'http://www.census.gov/retail/index.html';
			}
			
			else if ($(e).find('td:eq(0)').text() =='New Residential Construction (Census)'){				  
					var newlink = 'http://www.census.gov/construction/nrc/pdf/newresconst_'+ newdat + newmonth +'.pdf';
					var brokenlink = 'http://www.census.gov/construction/nrc/historical_data/historic_releases.html';
			}
			else if ($(e).find('td:eq(0)').text() =='New Residential Sales (Census)'){				  
					var newlink = 'http://www.census.gov/construction/nrs/pdf/newressales_'+ newdat + newmonth +'.pdf';
					var brokenlink = 'http://www.census.gov/construction/nrs/historical_data/historic_releases.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Quarterly Services (Census)'){				  
					var newlink = 'http://www2.census.gov/econ/qfr/pubs/qfr'+ newyear+qrt +'.pdf';
					var brokenlink = 'http://www.census.gov/services/index.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Quarterly Financial Report - Retail Trade (Census)'){				  
					var newlink = 'http://www2.census.gov/econ/qfr/press/qfr'+ newyear+ qt +'rt.pdf';
					var brokenlink = 'http://www.census.gov/services/index.html';
			}
			else if ($(e).find('td:eq(0)').text() =='Quarterly Financial Report/Manufacturing, Mining and Wholesale Trade (Census)'){				  
					var newlink = 'http://www2.census.gov/econ/qfr/pubs/qfr'+ newyear+ qrt +'.pdf';
					var brokenlink = 'http://www.census.gov/services/index.html';
			}
			
			if (titlesecond.indexOf("BEA") >= 0){
				var errormsg = '<span id="error">' + errorMessage +' <a href="' + brokenlink + '">Bea.gov</a>.</span>';
				}
			else{
				var errormsg = '<span id="error">' + errorMessage +' <a href="' + brokenlink + '">Census.gov</a>.</span>';
				}
			var url = '/sites/all/themes/icompany/includes/cross_domain.php?action=checkurl&urlcheck='+newlink;
			$.ajax({
					type: 'POST',
					url: url,
					timeout:9000,
					success: function(tes) {
						if(tes == ''){
							var links = $('<a>',{text:titlefirst,href:brokenlink});
							$(e).find('td:eq(0)').text('').append(links,'(',titlesecond,errormsg);
						}
						else{
							var newlink = tes;
							var links = $('<a>',{text:titlefirst,href:newlink});
							$(e).find('td:eq(0)').text('').append(links,'(',titlesecond);
						}
							},
					error: function(){
							var links = $('<a>',{text:titlefirst,href:brokenlink});
							$(e).find('td:eq(0)').text('').append(links,'(',titlesecond,errormsg);
					}
				});			
//		}
	});		
});	
})(jQuery);