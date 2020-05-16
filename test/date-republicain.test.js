import getRepublicainDate from "../src/date-republicain";

test("Error: The date must be later then Sep 22 1792", () => {
    expect(() => {
        getRepublicainDate("1792-09-21");
    }).toThrow("The date must be later then Sep 22 1792");
});

test("Error: Invalid date", () => {
    expect(() => {
        getRepublicainDate("12345678");
    }).toThrow("Invalid date");
});

test("1792-09-22 is 1 Vendémiaire 1", () => {
    const republicainDate = getRepublicainDate("1792-09-22");

    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.dayName()).toBe("Raisin");
    expect(republicainDate.dayLink()).toBe("https://fr.wikipedia.org/wiki/Raisin");
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.monthName()).toBe("Vendémiaire");
    expect(republicainDate.monthLink()).toBe("https://fr.wikipedia.org/wiki/Vend%C3%A9miaire");
    expect(republicainDate.year()).toBe(1);
    expect(republicainDate.romanYear()).toBe("I");
});

test("1792-09-23 is 2 Vendémiaire 1", () => {
    const republicainDate = getRepublicainDate("1792-09-23");
    expect(republicainDate.day()).toBe(2);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(1);
});

test("1792-10-21 is 30 Vendémiaire an 1", () => {
    const republicainDate = getRepublicainDate("1792-10-21");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(1);
});

test("1792-10-22 is 1 Brumaire 1", () => {
    const republicainDate = getRepublicainDate("1792-10-22");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(2);
    expect(republicainDate.year()).toBe(1);
});

test("1792-11-20 is 30 Brumaire 1", () => {
    const republicainDate = getRepublicainDate("1792-11-20");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(2);
    expect(republicainDate.year()).toBe(1);
});

test("1792-11-21 is 1 Frimaire 1", () => {
    const republicainDate = getRepublicainDate("1792-11-21");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(3);
    expect(republicainDate.year()).toBe(1);
});

test("1792-12-20 is 30 Frimaire 1", () => {
    const republicainDate = getRepublicainDate("1792-12-20");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(3);
    expect(republicainDate.year()).toBe(1);
});

test("1792-12-21 is 1 Nivôse 1", () => {
    const republicainDate = getRepublicainDate("1792-12-21");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(4);
    expect(republicainDate.year()).toBe(1);
});

test("1793-01-19 is 30 Nivôse 1", () => {
    const republicainDate = getRepublicainDate("1793-01-19");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(4);
    expect(republicainDate.year()).toBe(1);
});

test("1792-12-20 is 1 Pluviôse 1", () => {
    const republicainDate = getRepublicainDate("1793-01-20");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(5);
    expect(republicainDate.year()).toBe(1);
});

test("1793-02-18 is 30 Pluviôse 1", () => {
    const republicainDate = getRepublicainDate("1793-02-18");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(5);
    expect(republicainDate.year()).toBe(1);
});

test("1793-02-19 is 1 Ventôse 1", () => {
    const republicainDate = getRepublicainDate("1793-02-19");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(6);
    expect(republicainDate.year()).toBe(1);
});

test("1793-03-20 is 30 Ventôse 1", () => {
    const republicainDate = getRepublicainDate("1793-03-20");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(6);
    expect(republicainDate.year()).toBe(1);
});

test("1793-03-21 is 1 Germinal 1", () => {
    const republicainDate = getRepublicainDate("1793-03-21");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(7);
    expect(republicainDate.year()).toBe(1);
});

test("1793-04-19 is 30 Germinal 1", () => {
    const republicainDate = getRepublicainDate("1793-04-19");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(7);
    expect(republicainDate.year()).toBe(1);
});

test("1793-04-20 is 1 Floréal 1", () => {
    const republicainDate = getRepublicainDate("1793-04-20");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(8);
    expect(republicainDate.year()).toBe(1);
});

test("1793-05-19 is 30 Floréal 1", () => {
    const republicainDate = getRepublicainDate("1793-05-19");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(8);
    expect(republicainDate.year()).toBe(1);
});

test("1793-05-20 is 1 Prairial 1", () => {
    const republicainDate = getRepublicainDate("1793-05-20");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(9);
    expect(republicainDate.year()).toBe(1);
});

test("1793-06-18 is 30 Prairial 1", () => {
    const republicainDate = getRepublicainDate("1793-06-18");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(9);
    expect(republicainDate.year()).toBe(1);
});

test("1793-06-19 is 1 Messidor 1", () => {
    const republicainDate = getRepublicainDate("1793-06-19");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(10);
    expect(republicainDate.year()).toBe(1);
});

test("1793-07-18 is 30 Messidor 1", () => {
    const republicainDate = getRepublicainDate("1793-07-18");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(10);
    expect(republicainDate.year()).toBe(1);
});

test("1793-07-19 is 1 Thermidor 1", () => {
    const republicainDate = getRepublicainDate("1793-07-19");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(11);
    expect(republicainDate.year()).toBe(1);
});

test("1793-08-17 is 30 Thermidor 1", () => {
    const republicainDate = getRepublicainDate("1793-08-17");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(11);
    expect(republicainDate.year()).toBe(1);
});

test("1793-08-18 is 1 Fructidor 1", () => {
    const republicainDate = getRepublicainDate("1793-08-18");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(12);
    expect(republicainDate.year()).toBe(1);
});

test("1793-09-16 is 30 Fructidor 1", () => {
    const republicainDate = getRepublicainDate("1793-09-16");
    expect(republicainDate.day()).toBe(30);
    expect(republicainDate.month()).toBe(12);
    expect(republicainDate.year()).toBe(1);
});

test("1793-09-17 is Jour de la vertu 1", () => {
    const republicainDate = getRepublicainDate("1793-09-17");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(1);
});

test("1793-09-18 is Jour du génie 1", () => {
    const republicainDate = getRepublicainDate("1793-09-18");
    expect(republicainDate.day()).toBe(2);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(1);
});

test("1793-09-19 is Jour du travail 1", () => {
    const republicainDate = getRepublicainDate("1793-09-19");
    expect(republicainDate.day()).toBe(3);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(1);
});

test("1793-09-20 is Jour de l\"opinion 1", () => {
    const republicainDate = getRepublicainDate("1793-09-20");
    expect(republicainDate.day()).toBe(4);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(1);
});

test("1793-09-21 is Jour des récompenses 1", () => {
    const republicainDate = getRepublicainDate("1793-09-21");
    expect(republicainDate.day()).toBe(5);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(1);
});

test("1793-09-22 is 1 Vendémiaire 2", () => {
    const republicainDate = getRepublicainDate("1793-09-22");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(2);
});

test("1794-09-22 is 1 Vendémiaire 3", () => {
    const republicainDate = getRepublicainDate("1794-09-22");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(3);
});

test("1795-09-22 is Jour de la révolution 3", () => {
    const republicainDate = getRepublicainDate("1795-09-22");
    expect(republicainDate.day()).toBe(6);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(3);
});

test("1795-09-23 is 1 Vendémiaire 4", () => {
    const republicainDate = getRepublicainDate("1795-09-23");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(4);
});

test("1796-09-21 is Jour des récompenses 4", () => {
    const republicainDate = getRepublicainDate("1796-09-21");
    expect(republicainDate.day()).toBe(5);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(4);
});

test("1796-09-22 is 1 Vendémiaire 5", () => {
    const republicainDate = getRepublicainDate("1796-09-22");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(5);
});

test("1797-09-21 is Jour des récompenses 5", () => {
    const republicainDate = getRepublicainDate("1797-09-21");
    expect(republicainDate.day()).toBe(5);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(5);
});

test("1797-09-22 is 1 Vendémiaire 6", () => {
    const republicainDate = getRepublicainDate("1797-09-22");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(6);
});

test("1798-09-21 is Jour des récompenses 6", () => {
    const republicainDate = getRepublicainDate("1798-09-21");
    expect(republicainDate.day()).toBe(5);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(6);
});

test("1798-09-22 is 1 Vendémiaire 7", () => {
    const republicainDate = getRepublicainDate("1798-09-22");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(7);
});

test("1799-09-22 is Jour de la révolution 7", () => {
    const republicainDate = getRepublicainDate("1799-09-22");
    expect(republicainDate.day()).toBe(6);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(7);
});

test("1799-09-23 is 1 Vendémiaire 8", () => {
    const republicainDate = getRepublicainDate("1799-09-23");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(8);
});

test("1800-09-22 is Jour des récompenses 8", () => {
    const republicainDate = getRepublicainDate("1800-09-22");
    expect(republicainDate.day()).toBe(5);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(8);
});

test("1800-09-23 is 1 Vendémiaire 9", () => {
    const republicainDate = getRepublicainDate("1800-09-23");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(9);
});

test("1801-09-22 is Jour des récompenses 9", () => {
    const republicainDate = getRepublicainDate("1801-09-22");
    expect(republicainDate.day()).toBe(5);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(9);
});

test("1801-09-23 is 1 Vendémiaire 10", () => {
    const republicainDate = getRepublicainDate("1801-09-23");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(10);
});

test("1802-09-22 is Jour des récompenses 10", () => {
    const republicainDate = getRepublicainDate("1802-09-22");
    expect(republicainDate.day()).toBe(5);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(10);
});

test("1802-09-23 is 1 Vendémiaire 11", () => {
    const republicainDate = getRepublicainDate("1802-09-23");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(11);
});

test("1803-09-23 is Jour de la révolution 11", () => {
    const republicainDate = getRepublicainDate("1803-09-23");
    expect(republicainDate.day()).toBe(6);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(11);
});

test("1803-09-24 is 1 Vendémiaire 12", () => {
    const republicainDate = getRepublicainDate("1803-09-24");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(12);
});

test("1804-09-22 is Jour des récompenses 12", () => {
    const republicainDate = getRepublicainDate("1804-09-22");
    expect(republicainDate.day()).toBe(5);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(12);
});

test("1804-09-23 is 1 Vendémiaire 13", () => {
    const republicainDate = getRepublicainDate("1804-09-23");
    expect(republicainDate.day()).toBe(1);
    expect(republicainDate.month()).toBe(1);
    expect(republicainDate.year()).toBe(13);
});

test("1805-09-22 is Jour des récompenses 13", () => {
    const republicainDate = getRepublicainDate("1805-09-22");
    expect(republicainDate.day()).toBe(5);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(13);
});
