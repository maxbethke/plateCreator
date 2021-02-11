import { Component, OnInit } from "@angular/core";
import { Plate } from "../plate";
import { Plates } from "../plates";

@Component({
  selector: "app-plates",
  templateUrl: "./plates.component.html",
  styleUrls: ["./plates.component.css"]
})
export class PlatesComponent implements OnInit {
  plates: Plate[];
  selectedPlate: Plate;

  constructor() {
    this.plates = this.getPlates();
  }

  getPlates() {
    return Plates;
  }

  selectPlate(plate: Plate): void {
    this.selectedPlate = plate;
  }

  ngOnInit() {}
}
