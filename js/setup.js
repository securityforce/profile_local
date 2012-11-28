
/*-------------------------------------------------------------------------

Theme Name: Studio 8 - version 1.0

For any questions concerning this theme please contact us through our 
profile page at themeforest.

-------------------------------------------------------------------------*/

//THEME SETUP//////////////////////////////////////////////////////////////

/*init-------------------------------------------------------------------*/

var startPage = "1"						//page to display upon loading
var ss_raster =  0						//raster image 0/1 - on/off

/*supersized-------------------------------------------------------------*/

var ss_interval = 3000					// Length between transitions
var ss_transitionType = 3				// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
var ss_transitionSpeed = 700			// Speed of transition

/*toggle but title--------------------------------------------------------*/

var launchButTitle ='menu'				//title of launch content button
var closeButTitle = 'close'				//title of close content button
 
/*twitter details--------------------------------------------------------*/

var tweetUsers = ['udfrance'];    		// Your twitter accs, for multiple set ['account1, account2, account3'].Loads max 50 tweets from the last 7 days.
var noTweets ="3"					    //Number of tweets to load
var TweetsDisp = 3					    //Number of tweets to display at a time, possible values 1,2, or 3. 

/*folio details----------------------------------------------------------*/

var folio_items_per_page =  1			//Number of folio pages visible at once
var folio_start_page = 0				//What page to load by default
var lightboxTransition = 'elastic'		//Set lightbox transition type

/*blog details-----------------------------------------------------------*/

var blog_items_per_page =  1			//Number of blog pages visible at once

/*toggle/fade speeds-----------------------------------------------------*/

var hoverFadeSpeed = 'normal'  			//Portfolio/icons hover speed - Possible values: 'slow', 'normal', 'fast', or in milliseconds
var pageFadeSpeed = 400					//Page fade speed
var sideBarToggleSpeed ='slow'			//Sidebar toggle speed
var menuEase = 'easeInCubic'			//Ease type
var contentToggleSpeed = 'slow'			//Content toggle speed
var pageEase = 'easeInCubic'			//Ease type

/*Social network ids - only fill out the ids, not the full url-------------*/

var facebookPageID =""
var twitterID = ""
var myspaceID = ""
var flickrID =""
var youtubeID =""

/*Contact from messages----------------------------------------------------*/

var formError="There was an error sending your email. Please try again."
var formWarning ="Verify fields, and try again!"
var formSuccess ="Thanks, we got your mail and will get back to you in 48h!"
var formSuccessTitle ="Message sent"
var formReload ="Send us a mail and we will get back to you in 48 hours."
var formReloadTitle ="Got something to say..."



