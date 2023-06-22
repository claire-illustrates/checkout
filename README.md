# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: https://github.com/claire-illustrates/checkout
- Live Site URL: https://claire-illustrates.github.io/checkout/

## My process

I started with the frontend mentor challenge and redesigned it visually with my own illustration. I also added improvements for accessibility so that all dynamic changes are announced correctly for screen reader users. Any errors detected on submit are populated in an aria live region, where they are listed and linked to the relevant form field. The card details that are updated visually on the card as the user types are hidden from a screen reader to avoid audio clutter. All interactive components can be interacted with using mouse, keyboard, or screen reader. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- jquery
- Flexbox
- ARIA
- Axe Dev Tools (accessiblity testing)
