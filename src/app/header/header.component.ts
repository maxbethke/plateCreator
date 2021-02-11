import { Component, OnInit } from "@angular/core";
import { PlatesComponent } from "../plates/plates.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(public platesComponent: PlatesComponent) {}

  ngOnInit() {}
}
