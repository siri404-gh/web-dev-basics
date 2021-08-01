enum Days {
    SUN,
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
}

const getGreetingMessage = (day: Days): string => {
    switch (day) {
        case Days.SUN:
            return 'Its a sunday!'
        case Days.MON:
            return 'Its a monday!'
        case Days.TUE:
            return 'Its a tuesday!'
        case Days.WED:
            return 'Its a wednesday!'
        case Days.THU:
            return 'Its a thursday!'
        case Days.FRI:
            return 'Its a friday!'
        case Days.SAT:
            return 'Its a saturday!'
        case Days.SUN:
            return 'Its a sunday!'
    }
};

console.log(getGreetingMessage(Days.FRI));