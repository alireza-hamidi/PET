import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[unit-converter]'
})

export class UnitConverterComponent implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        // console.log(this.el)

    }
}