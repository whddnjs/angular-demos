import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SnowComponent } from '../../components/snow/snow.component';

export interface Photo {
  id: number;
  title: string;
  color: string;
  emoji: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, SnowComponent],
  templateUrl: './home.html',
})
export default class Home {
  readonly photos: Photo[] = [
    { id: 1, title: 'Mountains', color: '#6366f1', emoji: '🏔️' },
    { id: 2, title: 'Ocean', color: '#06b6d4', emoji: '🌊' },
    { id: 3, title: 'Forest', color: '#22c55e', emoji: '🌲' },
    { id: 4, title: 'Desert', color: '#f59e0b', emoji: '🏜️' },
    { id: 5, title: 'City', color: '#8b5cf6', emoji: '🏙️' },
    { id: 6, title: 'Space', color: '#1e1b4b', emoji: '🚀' },
  ];
}
