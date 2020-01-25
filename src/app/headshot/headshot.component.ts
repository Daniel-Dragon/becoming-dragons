import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headshot',
  templateUrl: './headshot.component.html',
  styleUrls: ['./headshot.component.css']
})
export class HeadshotComponent {
    @Input() image: String;
    @Input() name: String;
    @Input() role: String;
    @Input() aka: String;
    @Input() bio: String;
}
