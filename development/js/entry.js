/* Map controls */
//require('./map-system/googlemapsapi.js');

require('./game-controls');

import Dungeon from './dungeon/Dungeon';
//import { test } from './dungeon/test';
import * as lib from './dungeon/test';
import { test2 } from './dungeon/test';

const currentDungeon = new Dungeon({ name: "John"});
