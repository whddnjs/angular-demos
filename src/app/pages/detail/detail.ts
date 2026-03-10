import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PhotoDetail {
  id: number;
  title: string;
  color: string;
  emoji: string;
  description: string;
}

const PHOTOS: Record<number, PhotoDetail> = {
  1: { id: 1, title: 'Mountains', color: '#6366f1', emoji: '🏔️', description: 'Majestic peaks rising above the clouds, covered in pristine snow. The mountains offer breathtaking views and a sense of tranquility that can only be found at high altitudes.' },
  2: { id: 2, title: 'Ocean', color: '#06b6d4', emoji: '🌊', description: 'Vast stretches of deep blue water meeting the horizon. The ocean holds mysteries in its depths and provides a calming rhythm with its eternal waves.' },
  3: { id: 3, title: 'Forest', color: '#22c55e', emoji: '🌲', description: 'Dense canopies of ancient trees filtering sunlight into golden beams. The forest floor is alive with the sounds of wildlife and rustling leaves.' },
  4: { id: 4, title: 'Desert', color: '#f59e0b', emoji: '🏜️', description: 'Endless golden dunes stretching to the horizon under a blazing sun. The desert reveals its beauty in the play of light and shadow across the sand.' },
  5: { id: 5, title: 'City', color: '#8b5cf6', emoji: '🏙️', description: 'A vibrant metropolis pulsing with energy, where towering skyscrapers reflect the sunset. The city never sleeps, offering endless possibilities.' },
  6: { id: 6, title: 'Space', color: '#1e1b4b', emoji: '🚀', description: 'The final frontier, where stars are born and galaxies collide. Space represents humanity\'s greatest adventure and our eternal curiosity.' },
};

@Component({
  selector: 'app-detail',
  imports: [RouterLink],
  templateUrl: './detail.html',
})
export default class Detail {
  readonly id = input.required<string>();

  readonly photo = computed(() => PHOTOS[Number(this.id())] ?? PHOTOS[1]);
}
