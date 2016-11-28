"use strict";
var TaskItem = (function () {
    function TaskItem() {
    }
    Object.defineProperty(TaskItem.prototype, "isDone", {
        get: function () {
            return this._isDone;
        },
        set: function (value) {
            this._isDone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskItem.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (value) {
            this._desc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskItem.prototype, "pendingLevel", {
        get: function () {
            return this._pendingLevel;
        },
        set: function (value) {
            this._pendingLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskItem.prototype, "pendingLevelOfDay", {
        get: function () {
            return this._pendingLevelOfDay;
        },
        set: function (value) {
            this._pendingLevelOfDay = value;
        },
        enumerable: true,
        configurable: true
    });
    return TaskItem;
}());
exports.TaskItem = TaskItem;
//# sourceMappingURL=task.item.js.map