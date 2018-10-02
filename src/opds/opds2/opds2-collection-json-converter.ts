// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import {
    IPropertyConverter,
    JSON as TAJSON,
    JsonValue,
} from "ta-json-x";

import { OPDSCollection } from "./opds2-collection";

export class JsonOPDSCollectionConverter implements IPropertyConverter {
    public serialize(property: OPDSCollection): JsonValue {
        // console.log("JsonOPDSCollectionConverter.serialize()");

        return TAJSON.serialize(property);
    }

    public deserialize(value: JsonValue): OPDSCollection {
        // console.log("JsonOPDSCollectionConverter.deserialize()");

        // if (value instanceof Array) {
        //     return value.map((v) => {
        //         return this.deserialize(v);
        //     }) as OPDSCollection[];
        // } else
        if (typeof value === "string") {
            const c = new OPDSCollection();
            c.Name = value as string;
            return c;
        } else {
            return TAJSON.deserialize<OPDSCollection>(value, OPDSCollection);
        }
    }

    public collapseArrayWithSingleItem(): boolean {
        return true;
    }
}
