import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // Creating an array of objects w/some data
  posts = [
    {
      title: "Near Tree",
      imageUrl: "assets/images/tree.jpeg",
      username: "nature",
      content: "I saw this neat tree today",
    },

    {
      title: "Snowy Moutain",
      imageUrl: "assets/images/moutain.jpeg",
      username: "snowLover",
      content: "Here's a pic of a snowy moutain",
    },

    {
      title: "Moutain Biking",
      imageUrl: "assets/images/biking.jpeg",
      username: "123biking",
      content: "I went biking yesterday",
    },
  ];
}
