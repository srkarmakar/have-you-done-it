import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly _time = signal(new Date());
  readonly time = this._time.asReadonly();

  ngOnInit(): void {
    setInterval(() => {
      this._time.update((time) => time = new Date());
    }, 100)
  }
}
