import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.scss'
})
export class CardPricingComponent {
  @Input({required: true}) gameType: string ="";
	@Input({required: true}) gamePrice: string = "";
}
