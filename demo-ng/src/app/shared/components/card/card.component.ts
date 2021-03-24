import { Component, Input } from '@angular/core';
import { CardService, Character, UIService } from '../../../core';

@Component({
	moduleId: module.id,
	selector: 'ns-card',
	templateUrl: './card.component.html',
})
export class CardComponent {
	@Input() character: Character;
	marginLeft: number;

	constructor(private uiService: UIService, public cardService: CardService) {}

	ngOnInit() {
		switch (this.character) {
			case 'rick':
				this.marginLeft = -70;
				break;
			case 'morty':
				this.marginLeft = 0;
				break;
			case 'squanchy':
				this.marginLeft = 100;
				break;
			case 'summer':
				this.marginLeft = -180;
				break;
		}
	}

	close(): void {
		this.cardService.closeCard(this.character);
	}
}
