# Code-Snippets
********************************TO CHECK CURRENT BROWSER VERSION*********************************************************
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

****************************onemore code snippet to check the browser version******************************************

private void Button1_Click(object sender, System.EventArgs e)
{
    System.Web.HttpBrowserCapabilities browser = Request.Browser;
    string s = "Browser Capabilities\n"
        + "Type = "                    + browser.Type + "\n"
        + "Name = "                    + browser.Browser + "\n"
        + "Version = "                 + browser.Version + "\n"
        + "Major Version = "           + browser.MajorVersion + "\n"
        + "Minor Version = "           + browser.MinorVersion + "\n"
        + "Platform = "                + browser.Platform + "\n"
        + "Is Beta = "                 + browser.Beta + "\n"
        + "Is Crawler = "              + browser.Crawler + "\n"
        + "Is AOL = "                  + browser.AOL + "\n"
        + "Is Win16 = "                + browser.Win16 + "\n"
        + "Is Win32 = "                + browser.Win32 + "\n"
        + "Supports Frames = "         + browser.Frames + "\n"
        + "Supports Tables = "         + browser.Tables + "\n"
        + "Supports Cookies = "        + browser.Cookies + "\n"
        + "Supports VBScript = "       + browser.VBScript + "\n"
        + "Supports JavaScript = "     + 
            browser.EcmaScriptVersion.ToString() + "\n"
        + "Supports Java Applets = "   + browser.JavaApplets + "\n"
        + "Supports ActiveX Controls = " + browser.ActiveXControls 
              + "\n"
        + "Supports JavaScript Version = " +
            browser["JavaScriptVersion"] + "\n";

    TextBox1.Text = s;
}


********************************************TO GET OR SET COOKIES**********************************************************

function createCookie(name, value, days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
function eraseCookie(name)
{
	createCookie(name, "", -1);
}

*******************************TO GET VALUES INSIDE THE QUERY STRING******************************************
function getParameterByName(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
//TO RETRIVE THE VALUES FROM THE QUERY STRING
var variable_name=getParameterbyName(name);



**********************To send values from child form to parent form*********************************
	SignaturePadPopup = ModalLessWindowByScreenPercent('SignaturePadScriptel.html?DatabaseID=' + GetTWin().DatabaseID + '&DefaultRoleTitle=' + event.target.getAttribute("data-DefaultRoleTitle") + '&RowID=' + rowID + '&ElementID=' + elementID + '&ListID=' + listID + '&StoreSignature=' + isStoreSignature, 99, 99, "CaseWorthy Scriptel Signature Pad", "yes");
 window.opener.document.getElementById("EI-" + rowID + "-" + elementID).value = event.nonce;
