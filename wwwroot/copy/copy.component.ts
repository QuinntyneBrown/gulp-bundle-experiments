require("./copy.component.css");

import { CanActivate, Component } from "../core/component-decorators";
import { CopyActionCreator } from "./copy.actions";

@Component({
    templateUrl: "wwwroot/copy/copy.component.html",
	styleUrls: ["wwwroot/copy/copy.component.css"],
    selector: "copy",
    providers: ["copyActionCreator"]
})
export class CopyComponent {
    constructor(private copyActionCreator: CopyActionCreator) { }
  
}
