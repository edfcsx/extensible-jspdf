"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jspdf_1 = __importDefault(require("jspdf"));
class ExtensibleJsPDF extends jspdf_1.default {
    constructor(options, styles) {
        super(options);
        this.styles = styles;
        this.y = 0;
        this.setPageLimits = () => {
            console.log('here', this.internal.getCurrentPageInfo());
        };
        this.setPageLimits();
    }
}
exports.default = ExtensibleJsPDF;
