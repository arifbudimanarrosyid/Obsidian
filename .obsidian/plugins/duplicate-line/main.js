/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => WindowCollapse
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var WindowCollapse = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      this.addCommand({
        id: "duplicate-line",
        name: "Duplicate Line",
        editorCallback: (editor) => this.duplicateLine(editor)
      });
    });
  }
  duplicateLine(editor) {
    const { line: lineNumber } = editor.getCursor();
    const lineContent = editor.getLine(lineNumber);
    if (!lineContent) {
      return;
    }
    const lineContent1 = lineContent + "\n" + lineContent;
    editor.replaceRange(lineContent1, { line: lineNumber, ch: 0 }, { line: lineNumber, ch: lineContent.length });
    editor.setCursor(lineNumber + 1, lineContent.length);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRWRpdG9yLCBQbHVnaW4gfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93Q29sbGFwc2UgZXh0ZW5kcyBQbHVnaW4ge1xuXHRhc3luYyBvbmxvYWQoKSB7XG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiBcImR1cGxpY2F0ZS1saW5lXCIsXG5cdFx0XHRuYW1lOiBcIkR1cGxpY2F0ZSBMaW5lXCIsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcikgPT4gdGhpcy5kdXBsaWNhdGVMaW5lKGVkaXRvciksXG5cdFx0fSk7XG5cdH1cblx0ZHVwbGljYXRlTGluZShlZGl0b3I6IEVkaXRvcikge1xuXHRcdGNvbnN0IHsgbGluZTogbGluZU51bWJlciB9ID0gZWRpdG9yLmdldEN1cnNvcigpO1xuXHRcdGNvbnN0IGxpbmVDb250ZW50ID0gZWRpdG9yLmdldExpbmUobGluZU51bWJlcik7XG5cdFx0aWYgKCFsaW5lQ29udGVudCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBsaW5lQ29udGVudDEgPSBsaW5lQ29udGVudCArIFwiXFxuXCIgKyBsaW5lQ29udGVudDtcblx0XHRlZGl0b3IucmVwbGFjZVJhbmdlKFxuXHRcdFx0bGluZUNvbnRlbnQxLFxuXHRcdFx0eyBsaW5lOiBsaW5lTnVtYmVyLCBjaDogMCB9LFxuXHRcdFx0eyBsaW5lOiBsaW5lTnVtYmVyLCBjaDogbGluZUNvbnRlbnQubGVuZ3RoIH1cblx0XHQpO1xuXHRcdGVkaXRvci5zZXRDdXJzb3IobGluZU51bWJlciArIDEsIGxpbmVDb250ZW50Lmxlbmd0aCk7XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUErQjtBQUUvQixJQUFxQixpQkFBckIsY0FBNEMsdUJBQU87QUFBQSxFQUNsRCxBQUFNLFNBQVM7QUFBQTtBQUNkLFdBQUssV0FBVztBQUFBLFFBQ2YsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sZ0JBQWdCLENBQUMsV0FBVyxLQUFLLGNBQWMsTUFBTTtBQUFBLE1BQ3RELENBQUM7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUNBLGNBQWMsUUFBZ0I7QUFDN0IsVUFBTSxFQUFFLE1BQU0sZUFBZSxPQUFPLFVBQVU7QUFDOUMsVUFBTSxjQUFjLE9BQU8sUUFBUSxVQUFVO0FBQzdDLFFBQUksQ0FBQyxhQUFhO0FBQ2pCO0FBQUEsSUFDRDtBQUNBLFVBQU0sZUFBZSxjQUFjLE9BQU87QUFDMUMsV0FBTyxhQUNOLGNBQ0EsRUFBRSxNQUFNLFlBQVksSUFBSSxFQUFFLEdBQzFCLEVBQUUsTUFBTSxZQUFZLElBQUksWUFBWSxPQUFPLENBQzVDO0FBQ0EsV0FBTyxVQUFVLGFBQWEsR0FBRyxZQUFZLE1BQU07QUFBQSxFQUNwRDtBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=