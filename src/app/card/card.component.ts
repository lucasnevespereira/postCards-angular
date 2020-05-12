import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  // Instruct this component how to receive some props from parent
  // @Input decorator tells Angular that these properties (title...) are going to be provided by the parent component.
  @Input() title = "";
  @Input() username = "";
  @Input() imageUrl = "";
  @Input() content = "";

  constructor() {}

  ngOnInit(): void {}
}
