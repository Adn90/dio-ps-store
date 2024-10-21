import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardLabelComponent, 
    CardPricingComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) gameCover: string = "";
	@Input({required: true}) gameLabel: string="";
	@Input({required: true}) gameType: string ="";
	@Input({required: true}) gamePrice: string = "";
}
