// npm install -g parcel-bundler
// parcel index.html

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");
// customMap.googleMap // throws an error since googleMap is private
// CustomMap intentionally limits the amount of options other engineers
// have for google maps in index.ts

customMap.addMarker(user);
customMap.addMarker(company);
