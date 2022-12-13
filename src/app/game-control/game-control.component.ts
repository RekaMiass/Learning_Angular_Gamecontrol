import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {

@Output() intervalFired = new EventEmitter<number>();
isCounter = false;
counter = 0;
id;

  constructor() {  }

  ngOnInit(): void { 
  }

  startGame() {
    this.isCounter = true;
    this.id = setInterval(() => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    }, 1000)
    
  }

  ngOnDestroy(): void {
    if (this.id) {
      clearInterval(this.id)
    }
  }

}
