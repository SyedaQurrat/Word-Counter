const textbox = document.getElementById("textbox");
const wordCount = document.getElementById("word");
const charCount = document.getElementById("char");
textbox.addEventListener('input', () => {
    const text = textbox.value;
    const char = text.length;
    charCount.innerHTML = char.toString();
    const trimmedText = text.trim();
    const words = trimmedText.split(" "); // Split by any whitespace
    const cleanList = words.filter(elem => elem !== " ");
    wordCount.innerHTML = cleanList.length.toString();
});
export {};
