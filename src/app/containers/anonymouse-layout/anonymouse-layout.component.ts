import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { faAngleLeft, faAngleRight, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-anonymouse-layout',
    templateUrl: './anonymouse-layout.component.html',
    styleUrls: ['./anonymouse-layout.component.scss']
})

export class AnonymouseLayoutComponent implements OnInit {
    constructor() { }
    faAngleLeft = faAngleLeft
    faAngleRight = faAngleRight
    faExpandArrowsAlt = faExpandArrowsAlt
    brandName = "Zodan Company"
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
}