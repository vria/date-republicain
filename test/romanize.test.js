import romanize from "../src/romanize";

test("Integer parameter is required", () => {
    expect(() => {
        romanize(12.44)
    }).toThrow("Integer parameter is required");
});

test("-1 is -I", () => {
    expect(romanize(-1)).toBe("-I");
});

test("1 is I", () => {
    expect(romanize(1)).toBe("I");
});

test("2 is II", () => {
    expect(romanize(2)).toBe("II");
});

test("3 is III", () => {
    expect(romanize(3)).toBe("III");
});

test("4 is IV", () => {
    expect(romanize(4)).toBe("IV");
});

test("5 is V", () => {
    expect(romanize(5)).toBe("V");
});

test("6 is VI", () => {
    expect(romanize(6)).toBe("VI");
});

test("7 is VII", () => {
    expect(romanize(7)).toBe("VII");
});

test("8 is VIII", () => {
    expect(romanize(8)).toBe("VIII");
});

test("9 is IX", () => {
    expect(romanize(9)).toBe("IX");
});

test("10 is X", () => {
    expect(romanize(10)).toBe("X");
});

test("11 is XI", () => {
    expect(romanize(11)).toBe("XI");
});

test("12 is XII", () => {
    expect(romanize(12)).toBe("XII");
});

test("13 is XIII", () => {
    expect(romanize(13)).toBe("XIII");
});

test("14 is XIV", () => {
    expect(romanize(14)).toBe("XIV");
});

test("15 is XV", () => {
    expect(romanize(15)).toBe("XV");
});

test("16 is XVI", () => {
    expect(romanize(16)).toBe("XVI");
});

test("17 is XVII", () => {
    expect(romanize(17)).toBe("XVII");
});

test("18 is XVIII", () => {
    expect(romanize(18)).toBe("XVIII");
});

test("19 is XIX", () => {
    expect(romanize(19)).toBe("XIX");
});

test("20 is XX", () => {
    expect(romanize(20)).toBe("XX");
});

test("21 is XXI", () => {
    expect(romanize(21)).toBe("XXI");
});

test("22 is XXII", () => {
    expect(romanize(22)).toBe("XXII");
});

test("23 is XXIII", () => {
    expect(romanize(23)).toBe("XXIII");
});

test("24 is XXIV", () => {
    expect(romanize(24)).toBe("XXIV");
});

test("25 is XXV", () => {
    expect(romanize(25)).toBe("XXV");
});

test("26 is XXVI", () => {
    expect(romanize(26)).toBe("XXVI");
});

test("27 is XXVII", () => {
    expect(romanize(27)).toBe("XXVII");
});

test("28 is XXVIII", () => {
    expect(romanize(28)).toBe("XXVIII");
});

test("29 is XXIX", () => {
    expect(romanize(29)).toBe("XXIX");
});

test("30 is XXX", () => {
    expect(romanize(30)).toBe("XXX");
});

test("31 is XXXI", () => {
    expect(romanize(31)).toBe("XXXI");
});

test("32 is XXXII", () => {
    expect(romanize(32)).toBe("XXXII");
});

test("33 is XXXIII", () => {
    expect(romanize(33)).toBe("XXXIII");
});

test("34 is XXXIV", () => {
    expect(romanize(34)).toBe("XXXIV");
});

test("35 is XXXV", () => {
    expect(romanize(35)).toBe("XXXV");
});

test("36 is XXXVI", () => {
    expect(romanize(36)).toBe("XXXVI");
});

test("37 is XXXVII", () => {
    expect(romanize(37)).toBe("XXXVII");
});

test("38 is XXXVIII", () => {
    expect(romanize(38)).toBe("XXXVIII");
});

test("39 is XXXIX", () => {
    expect(romanize(39)).toBe("XXXIX");
});

test("40 is XL", () => {
    expect(romanize(40)).toBe("XL");
});

test("41 is XLI", () => {
    expect(romanize(41)).toBe("XLI");
});

test("42 is XLII", () => {
    expect(romanize(42)).toBe("XLII");
});

test("43 is XLIII", () => {
    expect(romanize(43)).toBe("XLIII");
});

test("44 is XLIV", () => {
    expect(romanize(44)).toBe("XLIV");
});

test("45 is XLV", () => {
    expect(romanize(45)).toBe("XLV");
});

test("46 is XLVI", () => {
    expect(romanize(46)).toBe("XLVI");
});

test("47 is XLVII", () => {
    expect(romanize(47)).toBe("XLVII");
});

test("48 is XLVIII", () => {
    expect(romanize(48)).toBe("XLVIII");
});

test("49 is XLIX", () => {
    expect(romanize(49)).toBe("XLIX");
});

test("50 is L", () => {
    expect(romanize(50)).toBe("L");
});

test("51 is LI", () => {
    expect(romanize(51)).toBe("LI");
});

test("52 is LII", () => {
    expect(romanize(52)).toBe("LII");
});

test("53 is LIII", () => {
    expect(romanize(53)).toBe("LIII");
});

test("54 is LIV", () => {
    expect(romanize(54)).toBe("LIV");
});

test("55 is LV", () => {
    expect(romanize(55)).toBe("LV");
});

test("56 is LVI", () => {
    expect(romanize(56)).toBe("LVI");
});

test("57 is LVII", () => {
    expect(romanize(57)).toBe("LVII");
});

test("58 is LVIII", () => {
    expect(romanize(58)).toBe("LVIII");
});

test("59 is LIX", () => {
    expect(romanize(59)).toBe("LIX");
});

test("60 is LX", () => {
    expect(romanize(60)).toBe("LX");
});

test("61 is LXI", () => {
    expect(romanize(61)).toBe("LXI");
});

test("62 is LXII", () => {
    expect(romanize(62)).toBe("LXII");
});

test("63 is LXIII", () => {
    expect(romanize(63)).toBe("LXIII");
});

test("64 is LXIV", () => {
    expect(romanize(64)).toBe("LXIV");
});

test("65 is LXV", () => {
    expect(romanize(65)).toBe("LXV");
});

test("66 is LXVI", () => {
    expect(romanize(66)).toBe("LXVI");
});

test("67 is LXVII", () => {
    expect(romanize(67)).toBe("LXVII");
});

test("68 is LXVIII", () => {
    expect(romanize(68)).toBe("LXVIII");
});

test("69 is LXIX", () => {
    expect(romanize(69)).toBe("LXIX");
});

test("70 is LXX", () => {
    expect(romanize(70)).toBe("LXX");
});

test("71 is LXXI", () => {
    expect(romanize(71)).toBe("LXXI");
});

test("72 is LXXII", () => {
    expect(romanize(72)).toBe("LXXII");
});

test("73 is LXXIII", () => {
    expect(romanize(73)).toBe("LXXIII");
});

test("74 is LXXIV", () => {
    expect(romanize(74)).toBe("LXXIV");
});

test("75 is LXXV", () => {
    expect(romanize(75)).toBe("LXXV");
});

test("76 is LXXVI", () => {
    expect(romanize(76)).toBe("LXXVI");
});

test("77 is LXXVII", () => {
    expect(romanize(77)).toBe("LXXVII");
});

test("78 is LXXVIII", () => {
    expect(romanize(78)).toBe("LXXVIII");
});

test("79 is LXXIX", () => {
    expect(romanize(79)).toBe("LXXIX");
});

test("80 is LXXX", () => {
    expect(romanize(80)).toBe("LXXX");
});

test("81 is LXXXI", () => {
    expect(romanize(81)).toBe("LXXXI");
});

test("82 is LXXXII", () => {
    expect(romanize(82)).toBe("LXXXII");
});

test("83 is LXXXIII", () => {
    expect(romanize(83)).toBe("LXXXIII");
});

test("84 is LXXXIV", () => {
    expect(romanize(84)).toBe("LXXXIV");
});

test("85 is LXXXV", () => {
    expect(romanize(85)).toBe("LXXXV");
});

test("86 is LXXXVI", () => {
    expect(romanize(86)).toBe("LXXXVI");
});

test("87 is LXXXVII", () => {
    expect(romanize(87)).toBe("LXXXVII");
});

test("88 is LXXXVIII", () => {
    expect(romanize(88)).toBe("LXXXVIII");
});

test("89 is LXXXIX", () => {
    expect(romanize(89)).toBe("LXXXIX");
});

test("90 is XC", () => {
    expect(romanize(90)).toBe("XC");
});

test("91 is XCI", () => {
    expect(romanize(91)).toBe("XCI");
});

test("92 is XCII", () => {
    expect(romanize(92)).toBe("XCII");
});

test("93 is XCIII", () => {
    expect(romanize(93)).toBe("XCIII");
});

test("94 is XCIV", () => {
    expect(romanize(94)).toBe("XCIV");
});

test("95 is XCV", () => {
    expect(romanize(95)).toBe("XCV");
});

test("96 is XCVI", () => {
    expect(romanize(96)).toBe("XCVI");
});

test("97 is XCVII", () => {
    expect(romanize(97)).toBe("XCVII");
});

test("98 is XCVIII", () => {
    expect(romanize(98)).toBe("XCVIII");
});

test("99 is XCIX", () => {
    expect(romanize(99)).toBe("XCIX");
});

test("100 is C", () => {
    expect(romanize(100)).toBe("C");
});

test("200 is CC", () => {
    expect(romanize(200)).toBe("CC");
});

test("300 is CCC", () => {
    expect(romanize(300)).toBe("CCC");
});

test("400 is CD", () => {
    expect(romanize(400)).toBe("CD");
});

test("500 is D", () => {
    expect(romanize(500)).toBe("D");
});

test("600 is DC", () => {
    expect(romanize(600)).toBe("DC");
});

test("700 is DCC", () => {
    expect(romanize(700)).toBe("DCC");
});

test("800 is DCCC", () => {
    expect(romanize(800)).toBe("DCCC");
});

test("900 is CM", () => {
    expect(romanize(900)).toBe("CM");
});

test("1000 is M", () => {
    expect(romanize(1000)).toBe("M");
});
