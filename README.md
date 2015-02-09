# Lightbox Demo
This is a demonstration of lightbox using HTML, CSS, and jQuery. The demo was inspired by http://webdesign.tutsplus.com/articles/super-simple-lightbox-with-css-and-jquery--webdesign-3528

Some notes
* The lightbox is simply a div that covers the entire screen with a semi-transparent black overlay
* The lightbox has properties `position: fixed;`, `top: 0;`, `left: 0;`, `width: 100%`, and `height: 100%` to ensure that the div covers the entire window
* The image is shown within the lightbox to a) Draw the viewers' eyes to the image b) Promote clean presentation
* The lightbox div is initialized as `display: none`, and appears upon clicking a link
* Once the lightbox div is shown through `$("#lightbox").show()`, a click handler listens for a click to hide the div once again

[Live Demo](http://lightbox-minsoo.divshot.io/)
