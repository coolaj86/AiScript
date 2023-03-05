import SelectableBase from "./SelectableBase";
import TypeIdentifier from "../builder/TypeIdentifier";
import InterfaceType from "../types/InterfaceType";
import Context from "../analyzer/Context";

export default class SelectableType extends SelectableBase {

    typeId: TypeIdentifier;

    constructor(typeId: TypeIdentifier) {
        super();
        this.typeId = typeId;
    }

    check(context: Context): InterfaceType {
        // for now, let's assume TypeIdentifier can only refer to an interface
        const interface_ = context.getRegisteredInterface(this.typeId);
        if(interface_)
            return new InterfaceType(interface_);
        else
            context.problemListener.reportError(this.typeId.fragment, "No such type: " + this.typeId.value);
    }

    loadContext(context: Context): Context {
        const type = this.check(context);
        return Context.newInterfaceContext(context.calling, context, type);
    }
}
