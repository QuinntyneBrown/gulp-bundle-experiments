require("../core/core.module");

import { CopyComponent } from "./copy.component";
import { CopyActionCreator } from "./copy.actions";
import { CopyService } from "./copy.service";
import *  as reducers from "./copy.reducers";

var app = (<any>angular.module("app.copy", [
    "app.core"    
]));

app.service("copyActionCreator",["$location","dispatcher","copyService","guid",CopyActionCreator]);
app.service("copyService",["$q","apiEndpoint","fetch",CopyService]);
app.component(CopyComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
