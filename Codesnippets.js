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



************************To Delete old table and enter new table in place of that***********************************
	IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'CCTransactions')
BEGIN
	/****** Object:  Table [dbo].[CCTransactions]    Script Date: 5/15/2017 5:39:02 PM ******/
	DROP TABLE [dbo].[CCTransactions]
END

/****** Object:  Table [dbo].[CCTransactions]    Script Date: 5/15/2017 5:39:02 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CCTransactions](
	[CCTransactionID] [int] IDENTITY(1,1) NOT NULL,
	[ContextID] [int] NOT NULL,
	[ContextTypeID] [tinyint] NOT NULL,
	[Amount] [money] NOT NULL,
	[TransactionType] [tinyint] NOT NULL,
	[PayStatus] [tinyint] NOT NULL,
	[CardCustomerID] [int] NULL,
	[CardPayAuthorizeID] [nvarchar](100) NULL,
	[CardPayMethodToken] [nvarchar](100) NULL,
	[CardLastFour] [varchar](4) NULL,
	[CardType] [varchar](20) NULL,
	[CardExpires] [varchar](10) NULL,
	[CheckRoutingNumber] [varbinary](100) NULL,
	[CheckAccountNumber] [varbinary](100) NULL,
	[CheckAccountType] [varchar](20) NULL,
	[CheckFirstName] [nvarchar](100) NULL,
	[CheckLastName] [nvarchar](100) NULL,
	[CheckPayTransactionID] [nvarchar](100) NULL,
	[CheckPayAuthorizeID] [nvarchar](100) NULL,
	[ErrorMessage] [nvarchar](255) NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[OwnedByOrgID] [int] NOT NULL,
 CONSTRAINT [PK_CCTransactions] PRIMARY KEY CLUSTERED 
(
	[CCTransactionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[CCTransactions] ADD  CONSTRAINT [DF_CCTransactions_CreatedBy]  DEFAULT ((1)) FOR [CreatedBy]
GO

ALTER TABLE [dbo].[CCTransactions] ADD  CONSTRAINT [DF_CCTransactions_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[CCTransactions] ADD  CONSTRAINT [DF_CCTransactions_OwnedByOrgID]  DEFAULT ((2)) FOR [OwnedByOrgID]
GO

ALTER TABLE [dbo].[CCTransactions]  WITH NOCHECK ADD  CONSTRAINT [FK_CCTransactions_Users] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[Users] ([EntityID])
GO

ALTER TABLE [dbo].[CCTransactions] NOCHECK CONSTRAINT [FK_CCTransactions_Users]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ListID=6808' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'CCTransactions', @level2type=N'COLUMN',@level2name=N'TransactionType'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ListID=6809' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'CCTransactions', @level2type=N'COLUMN',@level2name=N'PayStatus'
GO


