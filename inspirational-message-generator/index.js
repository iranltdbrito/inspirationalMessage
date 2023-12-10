// Inspirational Message Generator

// Parts of the message
const part1 = ["Believe in yourself", "Your limitation—it's only your imagination", "Dream it"];
const part2 = ["work hard", "push the limits", "be fearless"];
const part3 = ["and achieve greatness.", "and success will follow.", "and make it happen."];

// Function to generate a random message
function generateMessage() {
    const randomPart1 = part1[Math.floor(Math.random() * part1.length)];
    const randomPart2 = part2[Math.floor(Math.random() * part2.length)];
    const randomPart3 = part3[Math.floor(Math.random() * part3.length)];

    return `${randomPart1}, ${randomPart2} ${randomPart3}`;
}

// Display the message
console.log(generateMessage());
