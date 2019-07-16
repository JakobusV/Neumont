/*  THIS PAGE IS A EXPLINATION OF THE SET-TIME 5-DAY WEATHER COLLECTION PROCESS  */
/* TL:DR: Why we shouldn't do math conversion in our heads */

/* NOTES

    The Forcast rounds up the Current Time to the next Time Section.
    (Ex: 07:34 -{Round Up}-> 09:00)
    (Ex: 09:01 -{Round Up}-> 12:00)

    Then, The Forcast starts 6 hours ahead of the Current Time Section.
    (Ex: 07:34 -{Round Up}-> 09:00 -{Forcast Start}-> 15:00)

-----------------------------------------------------------------------
            Time sections: 

        00:00   03:00   06:00   09:00   AM

        12:00   15:00   18:00   21:00   PM
-----------------------------------------------------------------------

  What we want is a consitant forcast at 15:00 each day.

    First, we need to find the Current Time. I'll use a variable named "curHr" for the Current Hour.
    We also need to have a variable for when we find what Time Section we start with from The Forcast.

        'var curHr = new Date().getHours();'
        'var forTS;'

    Next, we need to find the Time Section we round up to. I figured a switch would be efficient for getting this.

        'switch (curHr) {     <-- Takes given time.

            case 22:
            case 23:          <-- Checks which Time Section the curHr falls into. This case would be for the Current
            case 0:               Time Section 00:00.
        
                forTS = 6;    <-- Adjusts to The Forcast's starting Time Section.
                break;
            {...}
        }'

    Now it's time for the fun part. We have to find a way to sort the forTS's so we can grab the desired
    Time Section (In this case it's 15:00) from the array, for every single different Time Section, consistantly.

    So where do we start? You would think that we'd begin from 09:00 for the skip, then go from there. Well that 
    would be correct if the skip would also put us on the next day automatically. Sadly it just keeps us on the 
    same day from that 09:00.

    The soonest we could reach a the correct 15:00 would be from starting at 00:00 (forTS = 06:00). It gives 
    tomorrow's forcast before you reach the next day, which would then be covered by the currentDay script.
        For the sake of my sanity it helpped to correct the forTS's to a numeric order starting from 00:00.

-----------------------------------------------------------------------
            forTS Numeric Lables
        
        00:00 - 0   21:00 - 1   18:00 - 2   15:00 - 3
        12:00 - 4   09:00 - 5   06:00 - 6   03:00 - 7
-----------------------------------------------------------------------

    Ahh, much better... 
    For this next step, I'm going to be creating another switch. I'll keep it seperate from the first switch for now 
    just for the sake of explaining how it all converts in the end.

    This new switch takes our forTS and converts it into a starting position for the "list" array.

        'var listPos;'

        'switch (forTS) {     <-- Takes corrected Time Section.

            case 0:           <-- Check's order.

                listPos = 3;  <-- Adjusts to the correct placement in the "list" array that contains Time Section 15:00.
                break;
            {...}
        }'

    From here we then impliment it into a for loop that will add 8 to the listPos to loop into the next day's 15:00.

*/

console.log("hour: " + new Date().getHours());
console.log("min: " + new Date().getMinutes());

var curHr = new Date().getHours();
if (0 < new Date().getMinutes()) {
    curHr++;
}
if (curHr == 24) {
    curHr = 0;
}
console.log(curHr);

var forTS;

switch (curHr) {
    case 22:
    case 23:
    case 0:
        forTS = 0;
        break;
    case 1:
    case 2:
    case 3:
        forTS = 7;
        break;
    case 4:
    case 5:
    case 6:
        forTS = 6;
        break;
    case 7:
    case 8:
    case 9:
        forTS = 5;
        break;
    case 10:
    case 11:
    case 12:
        forTS = 4;
        break;
    case 13:
    case 14:
    case 15:
        forTS = 3;
        break;
    case 16:
    case 17:
    case 18:
        forTS = 2;
        break;
    case 19:
    case 20:
    case 21:
        forTS = 1;
        break;
    default:
        forTS = "DIDNT WORK";
}
console.log(forTS)

switch (forTS) {
    case 0:
        listPos = 3;
        break;
    case 1:
        listPos = 4;
        break;
    case 2:
        listPos = 5;
        break;
    case 3:
        listPos = 6;
        break;
    case 4:
        listPos = 7;
        break;
    case 5:
        listPos = 8;
        break;
    case 6:
        listPos = 9;
        break;
    case 7:
        listPos = 10;
        break;
    default:
        listPos = "Something wrong"
}
console.log(listPos);

switch (curHr) {
    case 22:
    case 23:
    case 0:
        listPos2 = 3;
        break;
    case 1:
    case 2:
    case 3:
        listPos2 = 10;
        break;
    case 4:
    case 5:
    case 6:
        listPos2 = 9;
        break;
    case 7:
    case 8:
    case 9:
        listPos2 = 8;
        break;
    case 10:
    case 11:
    case 12:
        listPos2 = 7;
        break;
    case 13:
    case 14:
    case 15:
        listPos2 = 6;
        break;
    case 16:
    case 17:
    case 18:
        listPos2 = 5;
        break;
    case 19:
    case 20:
    case 21:
        listPos2 = 4;
        break;
    default:
        console.log("LIST POSITION BREAK");
}
console.log(listPos2);