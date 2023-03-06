import ExpressionBase from "./ExpressionBase";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import NotImplementedError from "../error/NotImplementedError";

export default class InstanceExpression extends ExpressionBase {

    variableId: VariableIdentifier;

    constructor(variableId: VariableIdentifier) {
        super();
        this.variableId = variableId;
    }

    check(context: Context): IType {
        throw new NotImplementedError();
    }

    wireDependencies(context: Context) {
        // TODO
    }

    notifyListeners(): boolean {
        // TODO
        return false;
    }

}
