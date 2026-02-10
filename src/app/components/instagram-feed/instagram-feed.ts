import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-feed.html',
  styleUrl: './instagram-feed.scss'
})
export class InstagramFeedComponent {
  posts = [
    { id: 1, url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop', likes: '1.2k', comments: '45' },
    { id: 2, url: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=500&auto=format&fit=crop', likes: '850', comments: '32' },
    { id: 3, url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500&auto=format&fit=crop', likes: '2.1k', comments: '67' },
    { id: 4, url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500&auto=format&fit=crop', likes: '1.5k', comments: '54' },
    { id: 5, url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=500&auto=format&fit=crop', likes: '920', comments: '28' },
    { id: 6, url: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=500&auto=format&fit=crop', likes: '1.1k', comments: '41' }
  ];
}
