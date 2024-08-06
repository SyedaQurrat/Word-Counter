const textbox = document.getElementById("textbox") as HTMLTextAreaElement;
const wordCount = document.getElementById("word") as HTMLSpanElement;
const charCount = document.getElementById("char") as HTMLSpanElement;

textbox.addEventListener('input', () => {
    const text = textbox.value;
    const char = text.length;
    charCount.innerHTML = char.toString();

    const trimmedText = text.trim();
    const words = trimmedText.split(" "); // Split by any whitespace
    const cleanList = words.filter(elem => elem !== " ");

    wordCount.innerHTML = cleanList.length.toString();
});
