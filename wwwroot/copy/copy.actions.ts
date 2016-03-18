import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class CopyActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, copyService, guid) {
        super($location,copyService,dispatcher,guid,AddOrUpdateCopyAction,AllCopysAction,RemoveCopyAction,SetCurrentCopyAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateCopySuccessAction(options.entity));

	currentCopyRemoved = () => this.dispatcher.dispatch(new CurrentCopyRemovedAction());
}


export class AddOrUpdateCopyAction { constructor(public id, public entity) { } }

export class AllCopysAction { constructor(public id, public entities) { } }

export class RemoveCopyAction { constructor(public id, public entity) { } }

export class CopysFilterAction { constructor(public id, public term) { } }

export class SetCurrentCopyAction { constructor(public entity) { } }

export class AddOrUpdateCopySuccessAction { constructor(public entity) { } }

export class CurrentCopyRemovedAction { constructor() { } }
