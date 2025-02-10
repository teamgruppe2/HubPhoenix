//View.js
function updateView(page) {
  model.app.currentPage = page;

  switch (model.app.currentPage) {
    case "MainPage":
      mainPageView();
      break;
    case "AboutPage":
      aboutPageView();
      break;
    case "BookingPage":
    //   bookingPageView();
      break;
    case "ContactPage":
    //   contactPageView();
      break;
    case "FacebookFeedPage":
    //   facebookFeedPage();
      break;
    case "NewsFeedPage":
    //   newsfeedPage();
      break;
    case "ResourcePage":
    //   resourcePageView();
      break;
    case "ServiceAndActivityPage":
        serviceAndActivityPageView();
      break;
    default:
        return "Failed to load page"
  }
}

