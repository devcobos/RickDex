import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'rickdex-card-character',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './card-character.component.html',
    styleUrls: [ './card-character.component.scss' ],
})
export class CardCharacterComponent { }
