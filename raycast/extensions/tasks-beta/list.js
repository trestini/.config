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

// src/list.tsx
var list_exports = {};
__export(list_exports, {
  default: () => Command
});
module.exports = __toCommonJS(list_exports);
var import_api = require("@raycast/api");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Command() {
  const [tasks, setTasks] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    import_api.LocalStorage.allItems().then(console.log);
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List, { navigationTitle: "Task list", children: tasks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api.List.Item,
    {
      icon: "list-icon.png",
      title: t.title,
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.ActionPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.Push, { title: "Show Details", target: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Detail, { markdown: `# Hey! \u{1F44B} [${t.id}]` }) }) })
    },
    t.id
  )) });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vRGV2ZWwvcmF5Y2FzdC9UYXNrcy90YXNrcy1iZXRhL3NyYy9saXN0LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQWN0aW9uUGFuZWwsIERldGFpbCwgTGlzdCwgQWN0aW9uLCBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vYWRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGU8VGFza1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBMb2NhbFN0b3JhZ2UuYWxsSXRlbXMoKS50aGVuKGNvbnNvbGUubG9nKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdCBuYXZpZ2F0aW9uVGl0bGU9XCJUYXNrIGxpc3RcIj5cbiAgICAgIHt0YXNrcy5tYXAoKHQpID0+IChcbiAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgIGtleT17dC5pZH1cbiAgICAgICAgICBpY29uPVwibGlzdC1pY29uLnBuZ1wiXG4gICAgICAgICAgdGl0bGU9e3QudGl0bGV9XG4gICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgICAgIDxBY3Rpb24uUHVzaCB0aXRsZT1cIlNob3cgRGV0YWlsc1wiIHRhcmdldD17PERldGFpbCBtYXJrZG93bj17YCMgSGV5ISBcdUQ4M0RcdURDNEIgWyR7dC5pZH1dYH0gLz59IC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFnRTtBQUNoRSxtQkFBb0M7QUFtQm9CO0FBaEJ6QyxTQUFSLFVBQTJCO0FBQ2hDLFFBQU0sQ0FBQyxPQUFPLFFBQVEsUUFBSSx1QkFBaUIsQ0FBQyxDQUFDO0FBRTdDLDhCQUFVLE1BQU07QUFDZCw0QkFBYSxTQUFTLEVBQUUsS0FBSyxRQUFRLEdBQUc7QUFBQSxFQUMxQyxDQUFDO0FBRUQsU0FDRSw0Q0FBQyxtQkFBSyxpQkFBZ0IsYUFDbkIsZ0JBQU0sSUFBSSxDQUFDLE1BQ1Y7QUFBQSxJQUFDLGdCQUFLO0FBQUEsSUFBTDtBQUFBLE1BRUMsTUFBSztBQUFBLE1BQ0wsT0FBTyxFQUFFO0FBQUEsTUFDVCxTQUNFLDRDQUFDLDBCQUNDLHNEQUFDLGtCQUFPLE1BQVAsRUFBWSxPQUFNLGdCQUFlLFFBQVEsNENBQUMscUJBQU8sVUFBVSxxQkFBYyxFQUFFLE9BQU8sR0FBSSxHQUN6RjtBQUFBO0FBQUEsSUFORyxFQUFFO0FBQUEsRUFRVCxDQUNELEdBQ0g7QUFFSjsiLAogICJuYW1lcyI6IFtdCn0K
