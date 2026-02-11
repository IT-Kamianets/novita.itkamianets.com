import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Rotation range: -15 to 15 degrees
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((centerX - x) / centerX) * 15;

    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
  }

  onMouseLeave(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
  }
}
