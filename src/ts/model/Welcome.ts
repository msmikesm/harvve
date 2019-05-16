import { animLetters } from "../view/animations";
import { message } from "../view/message";


interface stateProp {
  text: string;
  count: number;
}


export class Welcome {
  public state: stateProp = { text: "", count: 0 };
  public show() {
    let contents = ["Forget the limits", "FUSION"];
    message("mess", contents[1], "con");
    animLetters("mess", 3000);
    setInterval(() => {
      this.state.text = contents[this.state.count];
      this.state.count += 1;
      if (this.state.count == 2) {
        this.state.count = 0;
      }
      this.clear("con");
      message("mess", this.state.text, "con");
      animLetters("mess", 3000);
    }, 6000);
  }
  private clear(id: string) {
    document.getElementById(id).innerHTML = "";
  }
}
