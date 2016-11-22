$(function(){
	// Table styling
	$("table.BandedColumns tr :even").addClass("Shaded");
	$("table.BandedRows tr:even").addClass("Shaded");
	
	$("blockquote").wrapInner("<div class='quote'></div>");
	$(".twoCols").append("<div class='clearDiv'></div>");
	
	// Adjust banner padding according to window size
	
	$bannerOrignalWidth = $(".cs-ultimate-banner-item-link, img.banner").width();
	$bannerOrignalHeight = $(".cs-ultimate-banner-item-link, img.banner").height();
	function AdjustBannerPadding()
	{
		$windowWidth = $(window).width();
		//console.log("Window width:", $windowWidth);
		$maxWidth = 1400;
		if ($windowWidth < $maxWidth) // if window width is less than designed width
		{
			padding = ($maxWidth - $windowWidth)/2; // find out how much need to be hidden
			$(".bannerPane").width($windowWidth+padding).css("margin-left", "-"+padding+"px");
			//console.log("Banner padding adjusted");
		}
		else // if window width is equal or more
		{
			$(".bannerPane").width($maxWidth).css("margin", "0 auto"); // use designed width and use auto margin
		}
	}
	AdjustBannerPadding();
	
	$( window ).resize(function() { // whenever window is resized
		AdjustBannerPadding(); // adjust banner padding to hide or show content
	})
	
	// Minor adjustings
	
	$(".sf-menu li>a").each(function(){
		if($(this).html()=="Blog")
		{
			$(this).attr("target", "_blank");
		}
	})
	
	
	// Lock overflow container width then display the hidden table
	//$("#overflow_container").width($("#overflow_container").width()).find("table").show();
	
	if ($("#CenterContentArea").height() <= 0)
	{
		$("#CenterContentArea").hide();
		//$("#LowerContentArea").hide();
		$("#LowerContentArea").css("padding-top", 0);
	}
	
	
	
	
	
})
