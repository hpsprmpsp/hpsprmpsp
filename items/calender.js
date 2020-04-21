var calender = {
    base: {
        months: {
            "JANUARY": 31,
            "FEBRUARY": 28,
            "MARCH": 31,
            "APRIL": 30,
            "MAY": 31,
            "JUNE": 30,
            "JULY": 31,
            "AUGUST": 31,
            "SEPTEMBER": 30,
            "OCTOBER": 31,
            "NOVEMBER": 30,
            "DECEMBER": 31
        },
        days: ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"],
        holidays: {
            "JANUARY": {
                "1": "New Year",
                "26": "Republic Day"
            },
            "FEBRUARY": {},
            "MARCH": {},
            "APRIL": {},
            "MAY": {},
            "JUNE": {},
            "JULY": {},
            "AUGUST": {},
            "SEPTEMBER": {},
            "OCTOBER": {},
            "NOVEMBER": {},
            "DECEMBER": {}

        },
    },
    /*
        @param: month, should be either a number or the complete name
        @param: year, should be a number
        purpose: will throw first day and last day of a month of a given
                year, and will check if it is current date
        return type: an object
    */
    getMonthDetail: function (month, year) {
        if (month.constructor.name !== "Number") {
            month = Object.keys(this.base.months).indexOf(months.toUpperCase());
            if (month === -1) {
                return false;
            }
        } else if (month > 12 || month < 1 || n % 1 !== 0) {
            return false;
        }
        var date = new Date(year, month, 1);
        var firstDay = this.base.days[date.getDay()];

        var leapTYear = year % 4 ? false : true;
        if (leapTYear) this.base.months["FEBRUARY"] = 29;

        var noOfDays = this.base.months[Object.keys(this.base.months)[month]];
        var holidays = this.base.holidays[Object.keys(this.base.holidays)[month]];
        return {
            start: firstDay,
            days: noOfDays,
            holidays: holidays
        };

    },
    /*
        @param: day, should be a number
        @param: month, should be either a number or the complete name
        @param: year, should be a number
        purpose: will throw first day and last day of a month of a given
                year, and will check if it is current date
        return type: an object
    */
    create: function (year, month, day) {
        var detail = this.getMonthDetail(month, year);
        var dom =  new DOMParser;
        if (!detail) {
            return dom.parseFromString("<h1 style='background-color: red; color: white;'>Error!!!</h1>","text/html");
        }
    }
};