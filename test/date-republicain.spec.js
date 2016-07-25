describe("Calendrier republicain", function() {
    /* * * *
     * An 1
     * * * */

    it("1792-09-22 is 1 Vendémiaire 1", function() {
        expect(getRepublicainDate("1792-09-22").toString()).toBe("1 Vendémiaire an 1");
    });

    it("1792-09-23 is 2 Vendémiaire 1", function() {
        expect(getRepublicainDate("1792-09-23").toString()).toBe("2 Vendémiaire an 1");
    });

    it("1792-09-24 is 3 Vendémiaire 1", function() {
        expect(getRepublicainDate("1792-09-23").toString()).toBe("2 Vendémiaire an 1");
    });

    it("1792-11-01 is 11 Brumaire 1", function() {
        expect(getRepublicainDate("1792-11-01").toString()).toBe("11 Brumaire an 1");
    });

    it("1793-01-01 is 12 Nivôse 1", function() {
        expect(getRepublicainDate("1793-01-01").toString()).toBe("12 Nivôse an 1");
    });

    it("1793-02-28 is 10 Ventôse 1", function() {
        expect(getRepublicainDate("1793-02-28").toString()).toBe("10 Ventôse an 1");
    });

    it("1793-03-01 is 11 Ventôse 1", function() {
        expect(getRepublicainDate("1793-03-01").toString()).toBe("11 Ventôse an 1");
    });

    it("1793-05-19 is 30 Floréal 1", function() {
        expect(getRepublicainDate("1793-05-19").toString()).toBe("30 Floréal an 1");
    });

    it("1793-09-17 is Jour de la vertu 1", function() {
        expect(getRepublicainDate("1793-09-17").toString()).toBe("Jour de la vertu an 1");
    });

    it("1793-09-21 is Jour des récompenses 1", function() {
        expect(getRepublicainDate("1793-09-21").toString()).toBe("Jour des récompenses an 1");
    });

    /* * * *
     * An 2
     * * * */

    it("1793-09-22 is 1 Vendémiaire 2", function() {
        expect(getRepublicainDate("1793-09-22").toString()).toBe("1 Vendémiaire an 2");
    });

    it("1794-02-28 is 10 Ventôse 2", function() {
        expect(getRepublicainDate("1794-02-28").toString()).toBe("10 Ventôse an 2");
    });

    it("1794-03-01 is 11 Ventôse 2", function() {
        expect(getRepublicainDate("1794-03-01").toString()).toBe("11 Ventôse an 2");
    });

    it("1794-09-21 is Jour des récompenses 2", function() {
        expect(getRepublicainDate("1794-09-21").toString()).toBe("Jour des récompenses an 2");
    });

    /* * * *
     * An 3
     * * * */

    it("1794-09-22 is 1 Vendémiaire 3", function() {
        expect(getRepublicainDate("1794-09-22").toString()).toBe("1 Vendémiaire an 3");
    });

    it("1795-04-02 is 13 Germinal 3", function() {
        expect(getRepublicainDate("1795-04-02").toString()).toBe("13 Germinal an 3");
    });

    it("1795-09-21 is Jour des récompenses 3", function() {
        expect(getRepublicainDate("1795-09-21").toString()).toBe("Jour des récompenses an 3");
    });

    it("1795-09-22 is Jour de la révolution an 3", function() {
        expect(getRepublicainDate("1795-09-22").toString()).toBe("Jour de la révolution an 3");
    });

    /* * * *
     * An 4
     * * * */

    it("1795-09-23 is 1 Vendémiaire 4", function() {
        expect(getRepublicainDate("1795-09-23").toString()).toBe("1 Vendémiaire an 4");
    });

    it("1796-02-29 is 10 Ventôse 4", function() {
        expect(getRepublicainDate("1796-02-29").toString()).toBe("10 Ventôse an 4");
    });

    it("1796-03-01 is 11 Ventôse 4", function() {
        expect(getRepublicainDate("1796-03-01").toString()).toBe("11 Ventôse an 4");
    });

    it("1796-09-21 is Jour des récompenses 4", function() {
        expect(getRepublicainDate("1796-09-21").toString()).toBe("Jour des récompenses an 4");
    });

    /* * * *
     * An 5
     * * * */

    it("1796-09-22 is 1 Vendémiaire 5", function() {
        expect(getRepublicainDate("1796-09-22").toString()).toBe("1 Vendémiaire an 5");
    });

    it("1796-09-23 is 2 Vendémiaire 5", function() {
        expect(getRepublicainDate("1796-09-23").toString()).toBe("2 Vendémiaire an 5");
    });

    it("1797-02-28 is 10 Ventôse 5", function() {
        expect(getRepublicainDate("1797-02-28").toString()).toBe("10 Ventôse an 5");
    });

    it("1797-03-01 is 11 Ventôse 5", function() {
        expect(getRepublicainDate("1797-03-01").toString()).toBe("11 Ventôse an 5");
    });

    it("1797-09-21 is Jour des récompenses 5", function() {
        expect(getRepublicainDate("1797-09-21").toString()).toBe("Jour des récompenses an 5");
    });

    /* * * *
     * An 6
     * * * */

    it("1797-09-22 is 1 Vendémiaire 6", function() {
        expect(getRepublicainDate("1797-09-22").toString()).toBe("1 Vendémiaire an 6");
    });

    it("1798-09-21 is Jour des récompenses 6", function() {
        expect(getRepublicainDate("1798-09-21").toString()).toBe("Jour des récompenses an 6");
    });

    /* * * *
     * An 7
     * * * */

    it("1798-09-22 is 1 Vendémiaire 7", function() {
        expect(getRepublicainDate("1798-09-22").toString()).toBe("1 Vendémiaire an 7");
    });

    it("1799-09-21 is Jour des récompenses 7", function() {
        expect(getRepublicainDate("1799-09-21").toString()).toBe("Jour des récompenses an 7");
    });

    it("1799-09-22 is Jour de la révolution an 7", function() {
        expect(getRepublicainDate("1799-09-22").toString()).toBe("Jour de la révolution an 7");
    });

    /* * * *
     * An 8
     * * * */

    it("1800-02-27 is 8 Ventôse 8", function() {
        expect(getRepublicainDate("1800-02-27").toString()).toBe("8 Ventôse an 8");
    });

    it("1800-02-28 is 9 Ventôse 8", function() {
        expect(getRepublicainDate("1800-02-28").toString()).toBe("9 Ventôse an 8");
    });

    it("1800-03-01 is 10 Ventôse 8", function() {
        expect(getRepublicainDate("1800-03-01").toString()).toBe("10 Ventôse an 8");
    });

    it("1800-03-02 is 11 Ventôse 8", function() {
        expect(getRepublicainDate("1800-03-02").toString()).toBe("11 Ventôse an 8");
    });

    it("1800-04-09 is 19 Germinal 8", function() {
        expect(getRepublicainDate("1800-04-09").toString()).toBe("19 Germinal an 8");
    });

    it("1800-09-17 is 30 Fructidor 8", function() {
        expect(getRepublicainDate("1800-09-17").toString()).toBe("30 Fructidor an 8");
    });

    it("1800-09-18 is 30 Fructidor 8", function() {
        expect(getRepublicainDate("1800-09-18").toString()).toBe("Jour de la vertu an 8");
    });

    it("1800-09-21 is Jour de l'opinion 8", function() {
        expect(getRepublicainDate("1800-09-21").toString()).toBe("Jour de l'opinion an 8");
    });

    it("1800-09-22 is Jour des récompenses an 8", function() {
        expect(getRepublicainDate("1800-09-22").toString()).toBe("Jour des récompenses an 8");
    });

    /* * * *
     * An 9
     * * * */

    it("1800-09-23 is 1 Vendémiaire 9", function() {
        expect(getRepublicainDate("1800-09-23").toString()).toBe("1 Vendémiaire an 9");
    });

    it("1801-02-28 is 9 Ventôse 9", function() {
        expect(getRepublicainDate("1801-02-28").toString()).toBe("9 Ventôse an 9");
    });

    it("1801-03-01 is 10 Ventôse 9", function() {
        expect(getRepublicainDate("1801-03-01").toString()).toBe("10 Ventôse an 9");
    });

    it("1801-09-22 is Jour des récompenses 9", function() {
        expect(getRepublicainDate("1801-09-22").toString()).toBe("Jour des récompenses an 9");
    });

    /* * * *
     * An 10
     * * * */

    it("1801-09-23 is 1 Vendémiaire 10", function() {
        expect(getRepublicainDate("1801-09-23").toString()).toBe("1 Vendémiaire an 10");
    });

    it("1802-02-28 is 9 Ventôse 10", function() {
        expect(getRepublicainDate("1802-02-28").toString()).toBe("9 Ventôse an 10");
    });

    it("1802-03-01 is 10 Ventôse 10", function() {
        expect(getRepublicainDate("1802-03-01").toString()).toBe("10 Ventôse an 10");
    });

    it("1802-09-22 is Jour des récompenses", function() {
        expect(getRepublicainDate("1802-09-22").toString()).toBe("Jour des récompenses an 10");
    });

    /* * * *
     * An 11
     * * * */

    it("1802-09-23 is 1 Vendémiaire 11", function() {
        expect(getRepublicainDate("1802-09-23").toString()).toBe("1 Vendémiaire an 11");
    });

    it("1803-02-28 is 9 Ventôse 11", function() {
        expect(getRepublicainDate("1803-02-28").toString()).toBe("9 Ventôse an 11");
    });

    it("1803-03-01 is 10 Ventôse 11", function() {
        expect(getRepublicainDate("1803-03-01").toString()).toBe("10 Ventôse an 11");
    });

    it("1803-09-22 is Jour des récompenses 11", function() {
        expect(getRepublicainDate("1803-09-22").toString()).toBe("Jour des récompenses an 11");
    });

    it("1803-09-23 is 10 Ventôse 11", function() {
        expect(getRepublicainDate("1803-09-23").toString()).toBe("Jour de la révolution an 11");
    });

    /* * * *
     * An 12
     * * * */
    it("1803-09-24 is 1 Vendémiaire 12", function() {
        expect(getRepublicainDate("1803-09-24").toString()).toBe("1 Vendémiaire an 12");
    });

    it("1804-01-01 is 10 Nivôse 12", function() {
        expect(getRepublicainDate("1804-01-01").toString()).toBe("10 Nivôse an 12");
    });

    it("1804-01-02 is 11 Nivôse 12", function() {
        expect(getRepublicainDate("1804-01-02").toString()).toBe("11 Nivôse an 12");
    });

    it("1804-02-28 is 8 Ventôse 12", function() {
        expect(getRepublicainDate("1804-02-28").toString()).toBe("8 Ventôse an 12");
    });

    it("1804-02-29 is 9 Ventôse 12", function() {
        expect(getRepublicainDate("1804-02-29").toString()).toBe("9 Ventôse an 12");
    });

    it("1804-03-01 is 10 Ventôse 12", function() {
        expect(getRepublicainDate("1804-03-01").toString()).toBe("10 Ventôse an 12");
    });

    /* * * *
     * An 13
     * * * */

    it("1804-09-23 is 1 Vendémiaire 13", function() {
        expect(getRepublicainDate("1804-09-23").toString()).toBe("1 Vendémiaire an 13");
    });

    it("1804-09-24 is 2 Vendémiaire 13", function() {
        expect(getRepublicainDate("1804-09-24").toString()).toBe("2 Vendémiaire an 13");
    });

    it("1804-12-31 is 10 Nivôse 13", function() {
        expect(getRepublicainDate("1804-12-31").toString()).toBe("10 Nivôse an 13");
    });

    it("1805-01-01 is 11 Nivôse 13", function() {
        expect(getRepublicainDate("1805-01-01").toString()).toBe("11 Nivôse an 13");
    });

    it("1805-01-02 is 12 Nivôse 13", function() {
        expect(getRepublicainDate("1805-01-02").toString()).toBe("12 Nivôse an 13");
    });

    it("1805-01-03 is 13 Nivôse 13", function() {
        expect(getRepublicainDate("1805-01-03").toString()).toBe("13 Nivôse an 13");
    });

    it("1805-02-27 is 8 Ventôse 13", function() {
        expect(getRepublicainDate("1805-02-27").toString()).toBe("8 Ventôse an 13");
    });

    it("1805-02-28 is 9 Ventôse 13", function() {
        expect(getRepublicainDate("1805-02-28").toString()).toBe("9 Ventôse an 13");
    });

    it("1805-03-01 is 10 Ventôse 13", function() {
        expect(getRepublicainDate("1805-03-01").toString()).toBe("10 Ventôse an 13");
    });

    it("1805-03-02 is 11 Ventôse 13", function() {
        expect(getRepublicainDate("1805-03-02").toString()).toBe("11 Ventôse an 13");
    });

    it("1805-09-22 is Jour des récompenses 13", function() {
        expect(getRepublicainDate("1805-09-22").toString()).toBe("Jour des récompenses an 13");
    });

    /* * * *
     * An 14
     * * * */

    it("1805-09-23 is 1 Vendémiaire 14", function() {
        expect(getRepublicainDate("1805-09-23").toString()).toBe("1 Vendémiaire an 14");
    });

    it("1806-02-28 is 9 Ventôse 14", function() {
        expect(getRepublicainDate("1806-02-28").toString()).toBe("9 Ventôse an 14");
    });

    it("1806-03-01 is 10 Ventôse 14", function() {
        expect(getRepublicainDate("1806-03-01").toString()).toBe("10 Ventôse an 14");
    });

    it("1806-09-22 is Jour des récompenses 14", function() {
        expect(getRepublicainDate("1806-09-22").toString()).toBe("Jour des récompenses an 14");
    });

    /* * * *
     * An 223
     * * * */
});
