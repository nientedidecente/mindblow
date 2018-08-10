import {randomizer} from 'uvk';
import {card} from "./model";
import {COLORS, COMPLETE_COLORS, SWEARINGS} from "../const";

export const generator = {
    generate() {
        const text = randomizer.chance(80) ?
            randomizer.pickOne(COLORS) :
            randomizer.pickOne(SWEARINGS);
        const textColor = randomizer.pickOne(COMPLETE_COLORS);
        const backgroundColor = randomizer.pickOne(COLORS.filter(c => c !== textColor));
        return card(text,textColor, backgroundColor)
    }
};
