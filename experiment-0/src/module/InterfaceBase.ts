import IInterface from "./IInterface";
import TypeIdentifier from "../builder/TypeIdentifier";
import Field from "./Field";
import FunctionDefinition from "../expression/FunctionDefinition";
import NamedFunction from "../analyzer/NamedFunction";
import VariableIdentifier from "../builder/VariableIdentifier";
import IType from "../types/IType";
import CodeFragment from "../builder/CodeFragment";
import INamed from "../analyzer/INamed";

export default abstract class InterfaceBase extends CodeFragment implements IInterface {

    name: TypeIdentifier;
    factory: FunctionDefinition;
    _staticFields = new Map<string, Field>();
    _staticFunctions = new Map<string, FunctionDefinition>();

    registerFactory(body: FunctionDefinition): void {
        // TODO check consistency
        this.factory = body;
    }

    assignFactory(body: FunctionDefinition): void {
        // TODO check consistency
        this.factory = body;
    }

    registerStaticFunction(name: VariableIdentifier, body: FunctionDefinition): void {
        // TODO check consistency
        this._staticFunctions.set(name.value, body);
    }

    assignStaticFunction(name: VariableIdentifier, body: FunctionDefinition): void {
        // TODO check consistency
        this._staticFunctions.set(name.value, body);
    }

    get staticFunctions(): NamedFunction[] {
        return Array.from(this._staticFunctions.entries())
            .map(entry => new NamedFunction(new VariableIdentifier(entry[0]), entry[1].type));
    }

    registerStaticField(name: VariableIdentifier, type: IType): void {
        // TODO check consistency
        this._staticFields.set(name.value, new Field(name, type));
    }

    assignStaticField(name: VariableIdentifier, type: IType): void {
        // TODO check consistency
        this._staticFields.set(name.value, new Field(name, type));
    }

    get staticFields(): Field[] {
        return Array.from(this._staticFields.values());
    }

    getStaticMember(member: VariableIdentifier): INamed {
        if(this._staticFields.has(member.value))
            return this._staticFields.get(member.value);
        if(this._staticFunctions.has(member.value)) {
            const body = this._staticFunctions.get(member.value);
            return new NamedFunction(member, body.type);
        }
        return null;
    }

 }
