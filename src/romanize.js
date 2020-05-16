const romanMatrix = [
    {
        "gregorian": 1000,
        "roman": "M"
    },
    {
        "gregorian": 900,
        "roman": "CM"
    },
    {
        "gregorian": 500,
        "roman": "D"
    },
    {
        "gregorian": 400,
        "roman": "CD"
    },
    {
        "gregorian": 100,
        "roman": "C"
    },
    {
        "gregorian": 90,
        "roman": "XC"
    },
    {
        "gregorian": 50,
        "roman": "L"
    },
    {
        "gregorian": 40,
        "roman": "XL"
    },
    {
        "gregorian": 10,
        "roman": "X"
    },
    {
        "gregorian": 9,
        "roman": "IX"
    },
    {
        "gregorian": 5,
        "roman": "V"
    },
    {
        "gregorian": 4,
        "roman": "IV"
    },
    {
        "gregorian": 1,
        "roman": "I"
    }
];

/**
 * @param num
 * @returns {string}
 */
export default function romanize (num) {

    if (!Number.isInteger(num)) {

        throw new Error("Integer parameter is required");

    }

    const abs = Math.abs(num),
        sign = num >= 0
            ? ""
            : "-";

    for (let index = 0; index < romanMatrix.length; index++) {

        const entry = romanMatrix[index];
        if (abs >= entry.gregorian) {

            return sign + entry.roman + romanize(abs - entry.gregorian);

        }

    }

    return "";

}
