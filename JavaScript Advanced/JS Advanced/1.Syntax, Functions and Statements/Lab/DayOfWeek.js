function solve(str){
    let day = 0;
    switch (str){
        case'Monday': day = 1; break;
        case'Tuesday': day = 2; break;
        case'Wednesday': day = 3; break;
        case'Thursday': day = 4; break;
        case'Friday': day = 5; break;
        case'Saturday': day = 6; break;
        case'Sunday': day = 7; break;
        default: day = 'error';
    }
    return day;
}