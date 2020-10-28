import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { faAngleLeft, faAngleRight, faExpandArrowsAlt, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-business-layout',
    templateUrl: './business-layout.component.html',
    styleUrls: ['./business-layout.component.scss']
})

export class BusinessLayoutComponent implements OnInit {
    constructor(private scroller: ViewportScroller) { }
    faAngleLeft = faAngleLeft
    faAngleRight = faAngleRight
    faExpandArrowsAlt = faExpandArrowsAlt
    faArrowDown = faArrowDown
    brandName = "Zodan Company"
    subBrandText = "Learn,Calculate,Grow"
    backgroundsPath = "assets/img/backgrounds/"
    scrolListener: Subject<any>
    backgrounds = [
        "wallpaper-1.jpg",
        "wallpaper-2.png",
        "wallpaper-3.jpg",
        "wallpaper-4.jpg",
        "wallpaper-5.jpg",
        "wallpaper-6.jpg",
        "wallpaper-7.jpg"
    ]
    selectedIndex = 1
    @ViewChild("brandText") brandText: ElementRef

    ngOnInit() {
        this.scrolListener = new Subject()
    }

    ngAfterViewInit() {
        this.scrolListener.subscribe(x => {
            console.log(24 + (x / 50) + " rem")
            this.brandText.nativeElement.style.opacity = 1 - x / 650
            this.brandText.nativeElement.style.top = 24 + (x / 30) + "rem"
            // if (window.scrollY < 550)
            //     this.main.nativeElement.style.marginTop = -(window.scrollY + 100) + "px"
        })
    }

    nextBackground() {
        if (this.selectedIndex + 1 < this.backgrounds.length)
            this.selectedIndex += 1
    }

    previosBackground() {
        if (this.selectedIndex > 0)
            this.selectedIndex -= 1
    }

    scroll(amount, unit) {
        switch (unit) {
            case "p":
                this.softScroll(window.innerHeight * amount / 100, 1)
                break;
        }
    }

    softScroll(amount, speed) {
        // window.scrollTo(window.screenY, amount)
        this.scroller.scrollToAnchor("main")
    }

}