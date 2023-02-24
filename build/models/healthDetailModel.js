"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const healthDetailData = new mongoose_1.default.Schema({
    recordId: {
        type: String,
        required: false,
    },
    healthDataSource: {
        type: Number,
        required: false,
    },
    appType: {
        type: Number,
        required: false,
    },
    timeZone: {
        type: String,
        required: false,
    },
    startTime: {
        type: Number,
        required: false,
    },
    deviceCode: {
        type: Number,
        required: false,
    },
    endTime: {
        type: Number,
        required: false,
    },
    type: {
        type: Number,
        required: false,
    },
    samplePoints: {
        type: Array,
        required: false,
    },
    version: {
        type: Number,
        required: false,
    },
});
exports.default = mongoose_1.default.model("healthDetailData", healthDetailData);
