- Using any javascript framework, build a webpage that parses json from http://reddit.com/r/javascript.json
2. Your parsed json should generally reproduce the look and feel of reddit, but with an emphasis on unique ways to navigate and style the pages through any or none of the following - be creative. These are just ideas:

  - Horizontally slide in the next page when scrolled to the end of the current set of reddit submissions, likewise slide out the current page to reveal the previous page if scrolling to the top

  - In a second column apart from the main content, generate a lightly styled tagmap based on words in the title of each submissions. Clicking the word should seek through reddit "pages" in an interesting way to highlight the matching submissions

- Use a sharp, sans serif font, with a general bright color palette found by experimenting with https://color.adobe.com/create/color-wheel/

- After 20 seconds of inactivity, blur the window with a "frosted glass" effect, transitioning it back to normal when you show activity
  - Performance is nice, cache json ahead of time to make page loads seem instant
  - Implement login with oAuth, show the current user somewhere on a second column
- Limit the width of the pages you render, around 80-100 characters per line is acceptable