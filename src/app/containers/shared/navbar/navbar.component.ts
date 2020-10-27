import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { from, fromEvent, Observable, Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
@Component({
    selector: 'app-costume-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    constructor() { }
    @Input() scrolListener: Subject<any>;
    navColor: string = "rgb(70 81 136)"
    @ViewChild("nav") navbar: ElementRef
    ngOnInit() {
    }

    ngAfterInit() {

    }

    scroll(event) {
        this.navbar.nativeElement.style.background = window.scrollY < 300 ? "unset" : this.navColor
        this.scrolListener.next(window.scrollY)
    }
}