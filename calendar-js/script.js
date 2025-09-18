// feat: Implement weekend highlighting using structural pseudo-selectors

// - Use :first-child/:last-child to target Sunday/Saturday columns
// - Combine with :nth-child(2) to skip month title row in thead
// - Single CSS rule applies #f75c90 color to both headers and data cells
// - Encodes business logic (weekends = special) directly in CSS selectors

// Technical: Leverages HTML table structure where first/last columns
// are always weekends in standard calendar layout. No JS needed for
// weekend detection - pure CSS structural targeting.

new Calendar(document.querySelector('.calendar'));