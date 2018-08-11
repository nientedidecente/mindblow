import {randomizer} from 'uvk';
import {card} from "./model";
import {COLORS, COMPLETE_COLORS, FUCK, SWEARINGS} from "../const";

export const generator = {
    generate() {
        const text = randomizer.chance(60) ?
            randomizer.pickOne(COLORS) :
            randomizer.chance(70) ?
            randomizer.pickOne(SWEARINGS) : FUCK;
        const textColor = randomizer.pickOne(COMPLETE_COLORS);
        const backgroundColor = randomizer.pickOne(COLORS.filter(c => c !== textColor));
        return card(text,textColor, backgroundColor)
    }
};
