// feat: Implement circular text layout using character-by-character rotation

// - Split text into individual characters using split("")
// - Map each character to <span> with incremental rotation (8.2deg per char)
// - Dynamic inline styles: transform:rotate(${i * 8.2}deg)
// - 8.2deg spacing creates smooth circular distribution around 360deg circle

// Technical: DOM manipulation replaces static text with rotated spans
// for circular typography effect. Angle calculated for even character spacing.

const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style="transform:rotate(${i * 8.2}deg)">${char}</span>`
).join("")