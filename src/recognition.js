console.log("starting tesseract");
const worker = Tesseract.createWorker({
workerPath: browser.extension.getURL("tesseract/worker.min.js"),
langPath: browser.extension.getURL("lang"),
corePath: browser.extension.getURL("tesseract/tesseract-core.wasm.js"),
logger: m => console.log(m),
});

console.log("tesseract started");
(async () => {
await worker.load();
await worker.loadLanguage('jpn');
await worker.initialize('jpn');
const { data: { text } } = await worker.recognize(browser.extension.getURL("img/img.jpeg"));
console.log("recongintion finished:")
console.log(text);
await worker.terminate();
})();

console.log("plugin loaded");