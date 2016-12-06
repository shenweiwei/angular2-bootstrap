import { Component,  AfterViewInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { ViewComponent } from './view.component';
import { MenuComponent } from '../vendor/components/menu.component';
import { NavBarComponent } from '../vendor/components/navbar.component';
import { TaskRemindComponent } from '../vendor/components/task-remind.component';
import { ComponentConstants, CommonConstants } from 'vendor/common';
import { AppOptions } from '../vendor/app.options';
import { UserPojo, PositionPojo } from 'vendor/common';
import { ArrayList } from 'vendor/util';

@Component({
    selector: 'my-app',
    /* SystemJS */
    // templateUrl: 'app/web/views/app.html',
    /* WebPack */
    templateUrl:'../views/app.html',
    entryComponents: [MenuComponent, NavBarComponent, TaskRemindComponent]
})

export class AppComponent extends ViewComponent implements AfterViewInit {
    @ViewChild(MenuComponent)
    public menuComponent: MenuComponent;
    @ViewChild(NavBarComponent)
    public navBarComponent: NavBarComponent;
    @ViewChild(TaskRemindComponent)
    public taskRemindComponent: TaskRemindComponent;

    constructor(el: ElementRef, renderer: Renderer, public appOptions: AppOptions, public userPojo: UserPojo) {
        super();
        this.virtualUserData();
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
    /**
     * 页面显示完成做一些初始化的事情
     * 
     * 
     * @memberOf AppComponent
     */
    ngAfterViewInit(): void {
        this.menuComponent.initMenu(this.navBarComponent);
    }

    /**
     * 变更显示/隐藏 menuItem
     * 
     * @memberOf AppComponent
     */
    changeClipChevron(): void {
        if (this.appOptions.clipChevron === ComponentConstants.CLIP_CHEVRON_LEFT) {
            this.menuComponent.showSubMenuItem(true);
            this.appOptions.clipChevron = ComponentConstants.CLIP_CHEVRON_RIGHT;
        } else {
            this.menuComponent.showSubMenuItem(false);
            this.appOptions.clipChevron = ComponentConstants.CLIP_CHEVRON_LEFT;
        }
    }

    /**
     * 打开系统锁屏
     * 
     * @memberOf AppComponent
     */
    openSysLock(): void {
        this.appOptions.isOpenLock = true;
        this.appOptions.isLocked = false;

    }

    /**
     * 虚拟用户数据 
     * 
     * @memberOf AppComponent
     */
    virtualUserData(): void {
        this.userPojo.name = '虚拟用户';
        this.userPojo.type = CommonConstants.SGM;
        this.userPojo.ssoAccount = 'apptest05';

        let position_one = new PositionPojo();
        position_one.name = '财务部-应收专员';
        position_one.type = CommonConstants.SGM;

        let position_two = new PositionPojo();
        position_two.name = "系统管理员";
        position_two.type = CommonConstants.SGM;

        this.userPojo.positionList = new ArrayList().add(position_one).add(position_two);
        this.userPojo.currentPosition = position_one;
    }
}
