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

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);

// src/ClipboardHistoryPlugin.ts
var import_obsidian4 = require("obsidian");

// src/ClipboardHistorySettingTab.ts
var import_obsidian = require("obsidian");

// src/models/HistoryViewType.ts
var HistoryViewType = /* @__PURE__ */ ((HistoryViewType2) => {
  HistoryViewType2["HOVERED"] = "hovered";
  HistoryViewType2["DOCKED"] = "docked";
  return HistoryViewType2;
})(HistoryViewType || {});

// src/utils/EnumUtil.ts
var keyOfEnum = (enumDef, value) => Object.keys(enumDef)[Object.values(enumDef).indexOf(value)];

// src/ClipboardHistorySettingTab.ts
var HISTORY_LIMIT_MIN = 4;
var HISTORY_LIMIT_MAX = 40;
var HISTORY_LIMIT_STEP = 2;
var PREVIEW_LINES_MIN = 0;
var PREVIEW_LINES_MAX = 20;
var PREVIEW_LINES_STEP = 1;
var ClipboardHistorySettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  hide() {
    this.previewLinesSetting = void 0;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).addButton(
      (button) => button.setIcon("rotate-ccw").setTooltip("Reset plugin settings to default").onClick(async () => {
        await this.plugin.resetSettingsToDefault();
        this.hide();
        this.display();
      })
    );
    new import_obsidian.Setting(containerEl).setName("History limit" /* HISTORY_LIMIT */).setDesc("Upper limit for the amount of tracked clipboard events.").addSlider(
      (slider) => slider.setLimits(HISTORY_LIMIT_MIN, HISTORY_LIMIT_MAX, HISTORY_LIMIT_STEP).setValue(this.plugin.settings.historyLimit).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings.historyLimit = value;
        await this.plugin.saveSettings("History limit" /* HISTORY_LIMIT */);
      })
    );
    new import_obsidian.Setting(containerEl).setName("History view" /* HISTORY_VIEW */).setDesc(this.createHistoryViewDescription()).addDropdown(
      (dropdown) => dropdown.addOption("hovered" /* HOVERED */, "Hovered").addOption("docked" /* DOCKED */, "Docked").setValue(this.plugin.settings.historyViewType).onChange(async (value) => {
        var _a;
        const key = keyOfEnum(HistoryViewType, value);
        const type = HistoryViewType[key];
        this.plugin.settings.historyViewType = type;
        await this.plugin.saveSettings("History view" /* HISTORY_VIEW */);
        if (type === "docked" /* DOCKED */) {
          this.addPreviewLinesSetting();
        } else {
          (_a = containerEl.lastChild) == null ? void 0 : _a.detach();
          this.previewLinesSetting = void 0;
        }
      })
    );
    if (this.plugin.settings.historyViewType === "docked" /* DOCKED */) {
      this.addPreviewLinesSetting();
    }
  }
  createHistoryViewDescription() {
    const documentFragment = new DocumentFragment();
    const ul = documentFragment.createEl("ul");
    ul.createEl("li").setText("Hovered: Floating over the editor.");
    ul.createEl("li").setText("Docked: Docked to the bottom of the editor.");
    return documentFragment;
  }
  addPreviewLinesSetting() {
    if (!this.previewLinesSetting) {
      this.previewLinesSetting = new import_obsidian.Setting(this.containerEl).setName("Lines in preview" /* PREVIEW_LINES */).setDesc("Number of lines to reserve for multiline preview. Set to 0 to disable preview.").addSlider(
        (slider) => slider.setLimits(PREVIEW_LINES_MIN, PREVIEW_LINES_MAX, PREVIEW_LINES_STEP).setValue(this.plugin.settings.previewLines).setDynamicTooltip().onChange(async (value) => {
          this.plugin.settings.previewLines = value;
          await this.plugin.saveSettings("Lines in preview" /* PREVIEW_LINES */);
        })
      );
    }
  }
};

// src/utils/RefreshList.ts
var RefreshList = class {
  constructor(limit, equalityCheck) {
    this.elements = [];
    this.limit = limit;
    this.equalityCheck = equalityCheck;
  }
  updateLimit(limit) {
    if (limit !== this.limit) {
      if (limit < this.elements.length) {
        this.elements = this.elements.slice(0, limit);
      }
      this.limit = limit;
    }
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  getElements() {
    return [...this.elements];
  }
  getElement(index) {
    return this.elements[index];
  }
  /**
   * Moves existing element to start of the list
   * @returns `true` if element exists in the list, `false` otherwise
   */
  refresh(element) {
    const index = this.elements.findIndex((e) => this.equalityCheck(e, element));
    if (index > 0) {
      this.elements.splice(index, 1);
      this.elements.unshift(element);
      return true;
    } else if (index === 0) {
      return true;
    }
    return false;
  }
  add(element) {
    const length = this.elements.unshift(element);
    if (length > this.limit) {
      this.elements.pop();
    }
  }
  clear() {
    this.elements = [];
  }
};

// src/ClipboardHistoryService.ts
var ClipboardHistoryService = class {
  constructor(recordLimit) {
    this.records = new RefreshList(recordLimit, (r1, r2) => r1.text === r2.text);
  }
  updateRecordLimit(recordLimit) {
    this.records.updateLimit(recordLimit);
  }
  hasRecords() {
    return !this.records.isEmpty();
  }
  getRecords() {
    return this.records.getElements();
  }
  getRecord(index) {
    return this.records.getElement(index);
  }
  putRecord(record) {
    const refreshed = this.records.refresh(record);
    if (!refreshed) {
      this.records.add(record);
    }
  }
  refreshRecord(record) {
    this.records.refresh(record);
  }
  clearRecords() {
    this.records.clear();
  }
};

// src/commands/PasteFromClipboardHistoryCommand.ts
var PasteFromClipboardHistoryCommand = class {
  constructor(clipboardHistoryService) {
    this.clipboardHistoryService = clipboardHistoryService;
    this.id = "paste-from-clipboard-history";
    this.name = "Paste from clipboard history";
    this.icon = "clipboard-list";
  }
  editorCallback(editor, view) {
    this.historyView.open(editor, view, (record) => this.pasteRecordIntoEditor(editor, record));
  }
  setHistoryView(historyView) {
    this.historyView = historyView;
  }
  pasteRecordIntoEditor(editor, record) {
    editor.replaceSelection(record.text);
    this.clipboardHistoryService.refreshRecord(record);
    navigator.clipboard.writeText(record.text);
  }
};

// src/commands/ClearClipboardHistoryCommand.ts
var import_obsidian2 = require("obsidian");
var ClearClipboardHistoryCommand = class {
  constructor(clipboardHistoryService) {
    this.clipboardHistoryService = clipboardHistoryService;
    this.id = "clear-clipboard-history";
    this.name = "Clear clipboard history";
    this.icon = "clipboard-x";
  }
  callback() {
    this.clipboardHistoryService.clearRecords();
    new import_obsidian2.Notice("Clipboard history cleared");
  }
};

// src/views/HistoryViewHovered.ts
var import_obsidian3 = require("obsidian");
var HistoryViewHovered = class {
  constructor(clipboardHistoryService) {
    this.clipboardHistoryService = clipboardHistoryService;
    this.type = () => "hovered" /* HOVERED */;
  }
  close() {
    if (this.displayedMenu) {
      this.displayedMenu.close();
    }
  }
  open(editor, view, pasteAction) {
    this.close();
    this.displayedMenu = this.createMenu(pasteAction);
    const position = this.findViableMenuPosition(view, editor);
    this.displayedMenu.showAtPosition(position);
  }
  setPreviewLines(numberOfLines) {
    throw new Error("Unsupported operation");
  }
  createMenu(pasteAction) {
    const menu = new import_obsidian3.Menu();
    const records = this.clipboardHistoryService.getRecords();
    for (let index = 0; index < records.length; index++) {
      menu.addItem((item) => this.decorateItemWithClipboardRecord(pasteAction, item, records[index], index + 1));
    }
    menu.addSeparator();
    menu.addItem((item) => item.setDisabled(true).setIcon("clipboard-paste").setTitle("Clipboard history"));
    return menu;
  }
  decorateItemWithClipboardRecord(pasteAction, item, record, label) {
    const documentFragment = new DocumentFragment();
    const rowDiv = documentFragment.createDiv();
    rowDiv.addClass("pasteFromHistoryViewHoveredRecord");
    const labelSpan = rowDiv.createSpan();
    labelSpan.appendText(`${label}: `);
    labelSpan.addClass("pasteFromHistoryViewHoveredRecordLabel");
    const textSpan = rowDiv.createSpan();
    textSpan.appendText(record.text.replace(/\n/g, "\u23CE"));
    textSpan.addClass("pasteFromHistoryViewHoveredRecordText");
    item.setTitle(documentFragment);
    item.onClick(() => pasteAction(record));
  }
  findViableMenuPosition(view, editor) {
    const editorView = view.editor.cm;
    const cursor = editor.getCursor();
    const cursorOffset = editor.posToOffset(cursor);
    let position = this.getCursorPosition(cursorOffset, editorView);
    if (!position) {
      position = this.getNextAvailablePosition(cursor.line, editor, editorView);
    }
    if (!position) {
      position = this.getCenterPosition(editorView);
    }
    return position;
  }
  getCursorPosition(cursorOffset, editorView) {
    const position = editorView.coordsAtPos(cursorOffset, -1);
    if (position) {
      return { x: position.left, y: position.bottom };
    }
  }
  getNextAvailablePosition(cursorLine, editor, editorView) {
    const lineCount = editor.lineCount();
    for (let line = cursorLine + 1; line < lineCount; line++) {
      const startOfLine = editor.posToOffset({ line, ch: 0 });
      const position = editorView.coordsAtPos(startOfLine, -1);
      if (position) {
        return { x: position.left, y: position.top };
      }
    }
  }
  getCenterPosition(editorView) {
    return { x: editorView.viewState.editorWidth / 2, y: editorView.viewState.editorHeight / 2 };
  }
};

// src/views/HistoryViewDocked.ts
var HistoryViewDocked = class {
  constructor(clipboardHistoryService, previewLines) {
    this.clipboardHistoryService = clipboardHistoryService;
    this.previewLines = previewLines;
    this.keySelectionListener = (event) => {
      var _a;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        if (this.selectedRow || this.selectedRow === 0) {
          const index = this.calculateSelectedRowIndex(event.key === "ArrowDown");
          this.setSelectedRow(index);
        }
        event.preventDefault();
      } else if (event.key === "Enter") {
        (_a = this.getSelectedRow()) == null ? void 0 : _a.click();
        this.close(false);
        event.preventDefault();
      } else if (event.key === "Escape") {
        this.close();
        event.preventDefault();
      }
    };
    this.focusHasChangedListener = () => this.close();
    this.type = () => "docked" /* DOCKED */;
  }
  close(focusEditor = true) {
    if (this.containerElement) {
      this.containerElement.detach();
    }
    this.selectedRow = void 0;
    this.previewElement = void 0;
    document.removeEventListener("keydown", this.keySelectionListener);
    document.removeEventListener("focusin", this.focusHasChangedListener);
    if (focusEditor && this.editor) {
      this.editor.focus();
    }
  }
  open(editor, view, pasteAction) {
    this.close(false);
    this.editor = editor;
    this.createElements(view, pasteAction);
    if (this.clipboardHistoryService.hasRecords()) {
      this.setSelectedRow(0);
    }
    editor.blur();
    document.addEventListener("keydown", this.keySelectionListener);
    document.addEventListener("focusin", this.focusHasChangedListener);
  }
  setPreviewLines(numberOfLines) {
    this.previewLines = numberOfLines;
  }
  createElements(view, pasteAction) {
    this.containerElement = view.containerEl.createDiv();
    this.containerElement.addClass("pasteFromHistoryViewDocked");
    const headingContainer = this.containerElement.createDiv();
    headingContainer.addClass("pasteFromHistoryViewDockedHeading");
    const heading = headingContainer.createSpan();
    heading.appendText("Clipboard history");
    const recordsContainer = this.containerElement.createDiv();
    recordsContainer.addClass("pasteFromHistoryViewDockedRecords");
    const records = this.clipboardHistoryService.getRecords();
    this.recordRows = [];
    for (let index = 0; index < records.length; index++) {
      this.recordRows.push(
        this.createRowForClipboardRecord(pasteAction, recordsContainer, records[index], index)
      );
    }
    if (this.previewLines > 0) {
      const previewContainer = this.containerElement.createDiv();
      previewContainer.addClass("pasteFromHistoryViewDockedPreview");
      this.previewElement = previewContainer.createEl("textarea", {
        attr: { rows: `${this.previewLines}`, disabled: true }
      });
    }
  }
  createRowForClipboardRecord(pasteAction, recordsContainer, record, index) {
    const rowDiv = recordsContainer.createDiv();
    rowDiv.addClass("pasteFromHistoryViewDockedRecord");
    rowDiv.onclick = () => {
      pasteAction(record);
      this.editor.focus();
    };
    rowDiv.onmouseover = () => this.setSelectedRow(index);
    const labelSpan = rowDiv.createSpan();
    labelSpan.appendText(`${index + 1}:`);
    labelSpan.addClass("pasteFromHistoryViewDockedRecordLabel");
    const textSpan = rowDiv.createSpan();
    textSpan.appendText(record.text.replace(/\n/g, "\u23CE"));
    textSpan.addClass("pasteFromHistoryViewDockedRecordText");
    return rowDiv;
  }
  calculateSelectedRowIndex(increment) {
    const currentSelected = this.selectedRow;
    if (increment) {
      if (currentSelected >= this.recordRows.length - 1) {
        return 0;
      } else {
        return Math.min(currentSelected + 1, this.recordRows.length - 1);
      }
    } else {
      if (currentSelected <= 0) {
        return this.recordRows.length - 1;
      } else {
        return Math.max(currentSelected - 1, 0);
      }
    }
  }
  setSelectedRow(index) {
    var _a, _b;
    (_a = this.getSelectedRow()) == null ? void 0 : _a.removeClass("selected");
    this.selectedRow = index;
    this.recordRows[this.selectedRow].addClass("selected");
    const clipboardRecord = this.clipboardHistoryService.getRecord(this.selectedRow);
    (_b = this.previewElement) == null ? void 0 : _b.setText(clipboardRecord.text);
  }
  getSelectedRow() {
    if (this.selectedRow || this.selectedRow === 0) {
      return this.recordRows[this.selectedRow];
    }
  }
};

// src/ClipboardHistoryPlugin.ts
var DEFAULT_SETTINGS = {
  historyLimit: 16,
  historyViewType: "hovered" /* HOVERED */,
  previewLines: 6
};
var ClipboardHistoryPlugin = class extends import_obsidian4.Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new ClipboardHistorySettingTab(this.app, this));
    this.clipboardHistoryService = new ClipboardHistoryService(this.settings.historyLimit);
    this.registerClipboardCopyCutEventListeners();
    this.registerCommands();
  }
  async onunload() {
    if (this.historyView) {
      this.historyView.close();
    }
  }
  async resetSettingsToDefault() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS);
    this.clipboardHistoryService.updateRecordLimit(this.settings.historyLimit);
    this.updateHistoryView();
    await this.saveData(this.settings);
  }
  async saveSettings(changedSetting) {
    if (changedSetting === "History limit" /* HISTORY_LIMIT */) {
      this.clipboardHistoryService.updateRecordLimit(this.settings.historyLimit);
    } else if (changedSetting === "History view" /* HISTORY_VIEW */) {
      this.updateHistoryView();
    } else if (changedSetting === "Lines in preview" /* PREVIEW_LINES */) {
      this.historyView.setPreviewLines(this.settings.previewLines);
    }
    await this.saveData(this.settings);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  registerClipboardCopyCutEventListeners() {
    const recordTextFromClipboard = async () => {
      const text = await navigator.clipboard.readText();
      if (text) {
        this.clipboardHistoryService.putRecord({ text });
      }
    };
    this.registerDomEvent(document, "copy", recordTextFromClipboard);
    this.registerDomEvent(document, "cut", recordTextFromClipboard);
  }
  registerCommands() {
    this.pasteCommand = new PasteFromClipboardHistoryCommand(this.clipboardHistoryService);
    this.updateHistoryView();
    this.addCommand(this.pasteCommand);
    this.addCommand(new ClearClipboardHistoryCommand(this.clipboardHistoryService));
  }
  updateHistoryView() {
    if (!this.historyView || this.settings.historyViewType !== this.historyView.type()) {
      if (this.historyView) {
        this.historyView.close();
      }
      if (this.settings.historyViewType === "hovered" /* HOVERED */) {
        this.historyView = new HistoryViewHovered(this.clipboardHistoryService);
      } else if (this.settings.historyViewType === "docked" /* DOCKED */) {
        this.historyView = new HistoryViewDocked(this.clipboardHistoryService, this.settings.previewLines);
      } else {
        throw new Error(`Unhandled HistoryViewType: ${this.settings.historyViewType}`);
      }
      this.pasteCommand.setHistoryView(this.historyView);
    }
  }
};

// src/main.ts
var main_default = ClipboardHistoryPlugin;
