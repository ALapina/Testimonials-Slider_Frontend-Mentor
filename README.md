# Frontend Mentor - Coding Bootcamp Testimonials Slider

![Design preview for the Coding Bootcamp Testimonials Slider coding challenge](./design/desktop-preview.jpg)

This is [Frontend Mentor](https://www.frontendmentor.io) challenge allows you to improve your skills in a real-life workflow.

## The challenge

Build out this testimonial slider and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to: 

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as font-size, padding and margin. This should help train your eye to perceive differences in spacings and sizes.
_____________________________

## Used technologies

- Scss
- Vanilla JS with simple event listeners
- CSS Grid
- Flexbox

## Challenging parts

### Scaling and reordering images on different screen sizes

Since image and text with background needs to be in different places on desktop and mobile versions it was hard to find a right approach.

The first idea was to place all background images on one layer - carousel, and place image and text with position absolute. On a desktop screen size result was satisfactory, but when resizing for mobile, it took a lot of work with a complete rework of the structure of a layout and with pixel tweaking. Code and visual result wasn't satisfying for me.

So I decided to try to make a page responsive and easily maintainable with CSS Grid. I did not have much practice with CSS grid so it was challenging and new for me. 

I placed pattern-quotes background on text block and pattern-bg background on image block, and now with resizing, block changes it's position with the background.
Additionally, using CSS grid allowed me easily change the entire structure from horizontal to vertical with only one property `grid-template-columns: auto;` and minimum pixel tweaking.

Result is not a pixel-perfect but I am satisfied with code and visual result. Page is responsive and easily maintainable. It was great practice for a new skill.

### Overlapping with CSS grid

While working on this challenge a wanted to try a new technique for me - overlapping with CSS grid. 
A lesson from wonderful [Jen Simmons](https://www.youtube.com/watch?v=EashgVqboWo&ab_channel=LayoutLand) helped me to deal with such a challenge. 

For overlapping with grid we need an additional grid column where two objects will overlap. And for each object we need to assign what grid columns they will take. Here is an example:

```css
.slider__content {
  display: grid;
  grid-template-columns: 4fr 140px 3fr;
  grid-template-rows: 1fr 1fr;
}

.slider__text {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  z-index: 999;
}

.slider__img {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

### Coding the slider

This challenge was my first practice with JS. Previously I only had an online course on JS basic, so I had zero of real-life JS practice. And now it was time to try JS in practice. So it was incredibly challenging.

The first idea behind the logic of how slider works is just moving classes "next", "current" and "previous" with JS and in CSS move slides with `transform`.

In the second and final solution, the logic is to calculate a width of slide and move slide by this amount every time user moves from slide to slide. 