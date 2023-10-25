import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';

export type PortfolioButtonType = 'primary' | 'secondary';

@Component({
    selector: 'button[portfolio-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': '"portfolio-button"'
    }
})
export class ButtonComponent {
    @Input() get type(): PortfolioButtonType {
        return this._type;
    }
    set type(value) {
        this._removeClass('type', this._type);
        this._type = value;
        this._addClass('type', this._type);
        this._changeDetectorRef.markForCheck();
    }
    private _type: PortfolioButtonType = 'primary';

    constructor(private readonly _changeDetectorRef: ChangeDetectorRef, private readonly _elementRef: ElementRef) {}

    ngOnInit() {
        this._addClass('type', this.type);
    }

    private _removeClass(modifier: string, value: string): void {
        this._elementRef?.nativeElement.classList.remove(`portfolio-button--${modifier}-${value}`);
    }

    private _addClass(modifier: string, value: string): void {
        this._elementRef?.nativeElement.classList.add(`portfolio-button--${modifier}-${value}`);
    }
}
