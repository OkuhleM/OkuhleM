---
Layout:
Title:	"Daily Report about Responsiveness"
Date:	2021-03-31
Categories:

---

# Introduction
My topic for today will be responsiveness.

# Body
## What is responsiveness?

Responsive web design makes your web page look nice on all screens.
You can only use HTML and CSS to make a responsive web design.
Responsive web design is not a program or a JavaScript.
It is called responsive web design because you use CSS and HTML to resize, 
hide, shrink, enlarge, or move the content to make it look good on any screen.

Since web pages can be viewed using many different devices: desktops, tablets, and phones. 
Your web page should look nice, and be easy to use it shouldn't be complicated, regardless of the device.
Your Web page should not leave out information to fit smaller devices, but it should adapt its content to fit any device

## Media Queries

Media Queries allow us to run a series of tests (e.g. whether the user's screen is greater than a certain width, or a certain resolution) and apply CSS selectively to style the page appropriately for the user's needs.
You can add multiple media queries within a stylesheet, tweaking your whole layout or parts of it to best suit the various screen sizes. 
Breakpoint are the points at which a media query is introduced, and the layout changed.

A common approach when using Media Queries is to create a simple single-column layout for narrow-screen devices (e.g mobile phones), then check for larger screens and implement a multiple-column layout when you know that you have enough screen width to handle it.

## Flexible grid

A flexible grid means that you don't need to target every possible device size that there is, and build a pixel perfect layout for it. 
By using a flexible grid, you only need to add in a breakpoint and change the design at the point where the content starts to look bad. 

## Flexbox

Flex items will shrink and distribute space between the items according to the space in their container, as their initial behavior. By changing the values for flex-grow and flex-shrink you can indicate how you want the items to behave when they encounter more or less space around them.

## CSS grid
In CSS Grid Layout the fr unit allows the distribution of available space across grid tracks.

# The viewport meta tag

If you look at the HTML source of a responsive page, you will usually see the following <meta> tag in the <head> of the document.

<meta name="viewport" content="width=device-width,initial-scale=1">
This meta tag tells mobile browsers that they should set the width of the viewport to the device width, and scale the document to 100% of its intended size, which shows the document at the mobile-optimized size that you intended.
this is neede because mobile browsers tend to lie about their viewport width.

# Conclusion

the important tag that you have to use when setting your website to be responsive is the <meta> tag.

