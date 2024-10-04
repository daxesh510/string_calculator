// File: src\component\add.js
function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0].slice(2);

    // Check for multiple delimiters enclosed in brackets
    const delimiterMatches = delimiterPart.match(/\[(.*?)\]/g);
    if (delimiterMatches) {
      const delimiters = delimiterMatches.map((delim) => delim.slice(1, -1));
      delimiter = new RegExp(delimiters.map(escapeRegExp).join("|"));
    } else {
      // Single character delimiter
      delimiter = new RegExp(escapeRegExp(delimiterPart));
    }

    numbers = parts.slice(1).join("\n"); // Join the rest of the parts to handle multiline input
  }

  const nums = numbers.split(delimiter).map(Number);
  const negatives = nums.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

// Helper function to escape special characters in delimiters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = add;
