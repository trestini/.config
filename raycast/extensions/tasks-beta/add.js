"use strict";
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

// src/add.tsx
var add_exports = {};
__export(add_exports, {
  default: () => Command
});
module.exports = __toCommonJS(add_exports);
var import_react = require("react");
var import_api = require("@raycast/api");
var import_crypto = require("crypto");
var import_jsx_runtime = require("react/jsx-runtime");
function Command() {
  const titleFieldRef = (0, import_react.useRef)(null);
  const descriptionRef = (0, import_react.useRef)(null);
  const dueDateRef = (0, import_react.useRef)(null);
  async function handleSubmit(task) {
    console.log("saved");
    await import_api.LocalStorage.setItem((0, import_crypto.randomUUID)(), JSON.stringify(task));
    return true;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_api.Form,
    {
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.SubmitForm, { title: "Salvar", onSubmit: handleSubmit }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel.Section, { title: "Focus", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action, { title: "Focus TextField", onAction: () => titleFieldRef.current?.focus() }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action, { title: "Focus TextArea", onAction: () => descriptionRef.current?.focus() }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action, { title: "Focus DatePicker", onAction: () => dueDateRef.current?.focus() })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel.Section, { title: "Reset", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action, { title: "Reset TextField", onAction: () => titleFieldRef.current?.reset() }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action, { title: "Reset TextArea", onAction: () => descriptionRef.current?.reset() }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action, { title: "Reset DatePicker", onAction: () => dueDateRef.current?.reset() })
        ] })
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.TextField, { id: "textField", title: "Task", ref: titleFieldRef }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.TextArea, { id: "textArea", title: "Descri\xE7\xE3o", ref: descriptionRef }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.DatePicker, { id: "datePicker", title: "Previsto para", ref: dueDateRef })
      ]
    }
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vRGV2ZWwvcmF5Y2FzdC9UYXNrcy90YXNrcy1iZXRhL3NyYy9hZGQudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjdGlvblBhbmVsLCBGb3JtLCBBY3Rpb24sIExvY2FsU3RvcmFnZSB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tIFwiY3J5cHRvXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFzayB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgZHVlRGF0ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tYW5kKCkge1xuICBjb25zdCB0aXRsZUZpZWxkUmVmID0gdXNlUmVmPEZvcm0uVGV4dEZpZWxkPihudWxsKTtcbiAgY29uc3QgZGVzY3JpcHRpb25SZWYgPSB1c2VSZWY8Rm9ybS5UZXh0QXJlYT4obnVsbCk7XG4gIGNvbnN0IGR1ZURhdGVSZWYgPSB1c2VSZWY8Rm9ybS5EYXRlUGlja2VyPihudWxsKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQodGFzazogVGFzaykge1xuICAgIGNvbnNvbGUubG9nKFwic2F2ZWRcIik7XG4gICAgYXdhaXQgTG9jYWxTdG9yYWdlLnNldEl0ZW0ocmFuZG9tVVVJRCgpLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEFjdGlvblBhbmVsPlxuICAgICAgICAgIDxBY3Rpb24uU3VibWl0Rm9ybSB0aXRsZT1cIlNhbHZhclwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgICAgPEFjdGlvblBhbmVsLlNlY3Rpb24gdGl0bGU9XCJGb2N1c1wiPlxuICAgICAgICAgICAgPEFjdGlvbiB0aXRsZT1cIkZvY3VzIFRleHRGaWVsZFwiIG9uQWN0aW9uPXsoKSA9PiB0aXRsZUZpZWxkUmVmLmN1cnJlbnQ/LmZvY3VzKCl9IC8+XG4gICAgICAgICAgICA8QWN0aW9uIHRpdGxlPVwiRm9jdXMgVGV4dEFyZWFcIiBvbkFjdGlvbj17KCkgPT4gZGVzY3JpcHRpb25SZWYuY3VycmVudD8uZm9jdXMoKX0gLz5cbiAgICAgICAgICAgIDxBY3Rpb24gdGl0bGU9XCJGb2N1cyBEYXRlUGlja2VyXCIgb25BY3Rpb249eygpID0+IGR1ZURhdGVSZWYuY3VycmVudD8uZm9jdXMoKX0gLz5cbiAgICAgICAgICA8L0FjdGlvblBhbmVsLlNlY3Rpb24+XG4gICAgICAgICAgPEFjdGlvblBhbmVsLlNlY3Rpb24gdGl0bGU9XCJSZXNldFwiPlxuICAgICAgICAgICAgPEFjdGlvbiB0aXRsZT1cIlJlc2V0IFRleHRGaWVsZFwiIG9uQWN0aW9uPXsoKSA9PiB0aXRsZUZpZWxkUmVmLmN1cnJlbnQ/LnJlc2V0KCl9IC8+XG4gICAgICAgICAgICA8QWN0aW9uIHRpdGxlPVwiUmVzZXQgVGV4dEFyZWFcIiBvbkFjdGlvbj17KCkgPT4gZGVzY3JpcHRpb25SZWYuY3VycmVudD8ucmVzZXQoKX0gLz5cbiAgICAgICAgICAgIDxBY3Rpb24gdGl0bGU9XCJSZXNldCBEYXRlUGlja2VyXCIgb25BY3Rpb249eygpID0+IGR1ZURhdGVSZWYuY3VycmVudD8ucmVzZXQoKX0gLz5cbiAgICAgICAgICA8L0FjdGlvblBhbmVsLlNlY3Rpb24+XG4gICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICB9XG4gICAgPlxuICAgICAgPEZvcm0uVGV4dEZpZWxkIGlkPVwidGV4dEZpZWxkXCIgdGl0bGU9XCJUYXNrXCIgcmVmPXt0aXRsZUZpZWxkUmVmfSAvPlxuICAgICAgPEZvcm0uVGV4dEFyZWEgaWQ9XCJ0ZXh0QXJlYVwiIHRpdGxlPVwiRGVzY3JpXHUwMEU3XHUwMEUzb1wiIHJlZj17ZGVzY3JpcHRpb25SZWZ9IC8+XG4gICAgICA8Rm9ybS5EYXRlUGlja2VyIGlkPVwiZGF0ZVBpY2tlclwiIHRpdGxlPVwiUHJldmlzdG8gcGFyYVwiIHJlZj17ZHVlRGF0ZVJlZn0gLz5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdUI7QUFDdkIsaUJBQXdEO0FBQ3hELG9CQUEyQjtBQXVCakI7QUFmSyxTQUFSLFVBQTJCO0FBQ2hDLFFBQU0sb0JBQWdCLHFCQUF1QixJQUFJO0FBQ2pELFFBQU0scUJBQWlCLHFCQUFzQixJQUFJO0FBQ2pELFFBQU0saUJBQWEscUJBQXdCLElBQUk7QUFFL0MsaUJBQWUsYUFBYSxNQUFZO0FBQ3RDLFlBQVEsSUFBSSxPQUFPO0FBQ25CLFVBQU0sd0JBQWEsWUFBUSwwQkFBVyxHQUFHLEtBQUssVUFBVSxJQUFJLENBQUM7QUFDN0QsV0FBTztBQUFBLEVBQ1Q7QUFFQSxTQUNFO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxTQUNFLDZDQUFDLDBCQUNDO0FBQUEsb0RBQUMsa0JBQU8sWUFBUCxFQUFrQixPQUFNLFVBQVMsVUFBVSxjQUFjO0FBQUEsUUFDMUQsNkNBQUMsdUJBQVksU0FBWixFQUFvQixPQUFNLFNBQ3pCO0FBQUEsc0RBQUMscUJBQU8sT0FBTSxtQkFBa0IsVUFBVSxNQUFNLGNBQWMsU0FBUyxNQUFNLEdBQUc7QUFBQSxVQUNoRiw0Q0FBQyxxQkFBTyxPQUFNLGtCQUFpQixVQUFVLE1BQU0sZUFBZSxTQUFTLE1BQU0sR0FBRztBQUFBLFVBQ2hGLDRDQUFDLHFCQUFPLE9BQU0sb0JBQW1CLFVBQVUsTUFBTSxXQUFXLFNBQVMsTUFBTSxHQUFHO0FBQUEsV0FDaEY7QUFBQSxRQUNBLDZDQUFDLHVCQUFZLFNBQVosRUFBb0IsT0FBTSxTQUN6QjtBQUFBLHNEQUFDLHFCQUFPLE9BQU0sbUJBQWtCLFVBQVUsTUFBTSxjQUFjLFNBQVMsTUFBTSxHQUFHO0FBQUEsVUFDaEYsNENBQUMscUJBQU8sT0FBTSxrQkFBaUIsVUFBVSxNQUFNLGVBQWUsU0FBUyxNQUFNLEdBQUc7QUFBQSxVQUNoRiw0Q0FBQyxxQkFBTyxPQUFNLG9CQUFtQixVQUFVLE1BQU0sV0FBVyxTQUFTLE1BQU0sR0FBRztBQUFBLFdBQ2hGO0FBQUEsU0FDRjtBQUFBLE1BR0Y7QUFBQSxvREFBQyxnQkFBSyxXQUFMLEVBQWUsSUFBRyxhQUFZLE9BQU0sUUFBTyxLQUFLLGVBQWU7QUFBQSxRQUNoRSw0Q0FBQyxnQkFBSyxVQUFMLEVBQWMsSUFBRyxZQUFXLE9BQU0sbUJBQVksS0FBSyxnQkFBZ0I7QUFBQSxRQUNwRSw0Q0FBQyxnQkFBSyxZQUFMLEVBQWdCLElBQUcsY0FBYSxPQUFNLGlCQUFnQixLQUFLLFlBQVk7QUFBQTtBQUFBO0FBQUEsRUFDMUU7QUFFSjsiLAogICJuYW1lcyI6IFtdCn0K
