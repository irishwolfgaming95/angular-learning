import { Component } from "@angular/core";

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-first";

  tiles: Tile[] = [{ cols: 4, rows: 1 }];
}
