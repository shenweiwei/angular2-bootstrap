"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var util_1 = require('vendor/util');
var app_options_1 = require('../app.options');
var common_1 = require('vendor/common');
var TaskRemindComponent = (function () {
    function TaskRemindComponent(taskRemindOptions, appOptions, userPojo) {
        this.taskRemindOptions = taskRemindOptions;
        this.appOptions = appOptions;
        this.userPojo = userPojo;
    }
    TaskRemindComponent.prototype.ngOnInit = function () {
        this.virtualData();
    };
    TaskRemindComponent.prototype.virtualData = function () {
        //默认的任务条数
        this.taskItemList = new util_1.ArrayList();
        for (var i = 0; i < 10; i++) {
            var taskItem = new util_1.TaskItem();
            taskItem.isDone = false;
            taskItem.desc = 'task:' + i + 1;
            taskItem.pendingLevel = this.taskRemindOptions.level.get('danger').toString();
            taskItem.pendingLevelOfDay = 'today';
            this.taskItemList.add(taskItem);
        }
        //默认的操作记录条数
        this.notificationItemList = new util_1.ArrayList();
        for (var i = 0; i < 12; i++) {
            var notificationItem = new util_1.NotificationItem();
            notificationItem.desc = 'operate ' + i;
            notificationItem.icon = this.taskRemindOptions.icon.get('user').toString();
            notificationItem.operateTime = '10 mins';
            notificationItem.operateLevel = this.taskRemindOptions.level.get('success').toString();
            this.notificationItemList.add(notificationItem);
        }
        //默认的信息记录
        this.messageItemList = new util_1.ArrayList();
        for (var i = 0; i < 12; i++) {
            var messageItem = new util_1.MessageItem();
            messageItem.message = 'this is my message';
            messageItem.messageTime = "10 mins";
            messageItem.userName = "peter";
            messageItem.userPicUrl = "app/web/assets/images/avatar-2.jpg";
            this.messageItemList.add(messageItem);
        }
    };
    /**
     * 系统锁屏
     *
     * @memberOf TaskRemindComponent
     */
    TaskRemindComponent.prototype.lockSystem = function () {
        this.appOptions.isOpenLock = false;
        this.appOptions.isLocked = true;
    };
    /**
     * 选择岗位
     *
     * @memberOf TaskRemindComponent
     */
    TaskRemindComponent.prototype.selectPosition = function (positionItem) {
        this.userPojo.currentPosition = positionItem;
    };
    TaskRemindComponent = __decorate([
        core_1.Component({
            selector: 'task-remind-component',
            /* SystemJS */
            // templateUrl: 'app/web/vendor/views/task-remind.html',
            // styleUrls: ['app/web/vendor/framework/compass/stylesheets/vendor.css']
            /* WebPack */
            templateUrl: '../views/task-remind.html',
            styleUrls: ['../framework/compass/stylesheets/vendor.css']
        }), 
        __metadata('design:paramtypes', [util_1.TaskRemindOptions, app_options_1.AppOptions, common_1.UserPojo])
    ], TaskRemindComponent);
    return TaskRemindComponent;
}());
exports.TaskRemindComponent = TaskRemindComponent;
//# sourceMappingURL=task-remind.component.js.map