import { Component, OnInit } from '@angular/core';
import { TaskRemindOptions, TaskItem, ArrayList, NotificationItem, MessageItem } from 'vendor/util';
import { AppOptions } from '../app.options';
import { UserPojo, PositionPojo } from 'vendor/common';

declare const $: any;

@Component({
    selector: 'task-remind-component',
    /* SystemJS */
    // templateUrl: 'app/web/vendor/views/task-remind.html',
    // styleUrls: ['app/web/vendor/framework/compass/stylesheets/vendor.css']
    /* WebPack */
    templateUrl:'../views/task-remind.html',
    styleUrls:['../framework/compass/stylesheets/vendor.css']
})

export class TaskRemindComponent implements OnInit {
    public taskItemList: ArrayList<TaskItem>;
    public notificationItemList: ArrayList<NotificationItem>;
    public messageItemList: ArrayList<MessageItem>;

    constructor(public taskRemindOptions: TaskRemindOptions, public appOptions: AppOptions, public userPojo: UserPojo) {
    }

    ngOnInit(): void {
        this.virtualData();
    }

    virtualData(): void {
        //默认的任务条数
        this.taskItemList = new ArrayList<TaskItem>();
        for (let i = 0; i < 10; i++) {
            let taskItem = new TaskItem();
            taskItem.isDone = false;
            taskItem.desc = 'task:' + i + 1;
            taskItem.pendingLevel = this.taskRemindOptions.level.get('danger').toString();
            taskItem.pendingLevelOfDay = 'today';
            this.taskItemList.add(taskItem);
        }

        //默认的操作记录条数
        this.notificationItemList = new ArrayList<NotificationItem>();
        for (let i = 0; i < 12; i++) {
            let notificationItem = new NotificationItem();
            notificationItem.desc = 'operate ' + i;
            notificationItem.icon = this.taskRemindOptions.icon.get('user').toString();
            notificationItem.operateTime = '10 mins';
            notificationItem.operateLevel = this.taskRemindOptions.level.get('success').toString();
            this.notificationItemList.add(notificationItem);
        }

        //默认的信息记录
        this.messageItemList = new ArrayList<MessageItem>();
        for (let i = 0; i < 12; i++) {
            let messageItem = new MessageItem();
            messageItem.message = 'this is my message';
            messageItem.messageTime = "10 mins";
            messageItem.userName = "peter";
            messageItem.userPicUrl = "app/web/assets/images/avatar-2.jpg";
            this.messageItemList.add(messageItem);
        }
    }

    /**
     * 系统锁屏 
     * 
     * @memberOf TaskRemindComponent
     */
    lockSystem(): void {
        this.appOptions.isOpenLock = false;
        this.appOptions.isLocked = true;
    }

    /**
     * 选择岗位
     * 
     * @memberOf TaskRemindComponent
     */
    selectPosition(positionItem: PositionPojo): void {
        this.userPojo.currentPosition=positionItem;
    }
}