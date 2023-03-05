import TypeBase from "./TypeBase";
import Context from "../analyzer/Context";

export default class UnknownType extends TypeBase {

    static instance = new UnknownType();

    private constructor() {
        super();
    }

    newContext(parent: Context): Context {
        return parent.newUnknownTypeContext();
    }

}
