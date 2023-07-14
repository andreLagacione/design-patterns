import { FornitureType } from "./enums/forniture-type.enum";
import { ArtdecoFornitureFactory } from "./forniture/ArtdecoFornitureFactory";
import { ModernFornitureFactory } from "./forniture/ModernFornitureFactory";
import { VictorianFornitureFactory } from "./forniture/VictorianFornitureFactory";

export class BuildForniture {

    constructor() {}

    build(fornitureType: FornitureType) {
        if (fornitureType === FornitureType.MODERN) {
            return new ModernFornitureFactory();
        } else if (fornitureType === FornitureType.VICORIAN) {
            return new VictorianFornitureFactory();
        } else if (fornitureType === FornitureType.ARTDECO) {
            return new ArtdecoFornitureFactory();
        }
    }
}
