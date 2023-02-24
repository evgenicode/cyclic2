"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heartRateFilter = void 0;
const heartRateFilter = (data) => data.map((item) => {
    const startTime = new Date(item.samplePoints[0].startTime);
    const value = item.samplePoints[0].value;
    return { startTime, value };
});
exports.heartRateFilter = heartRateFilter;
