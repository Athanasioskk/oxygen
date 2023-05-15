import "./styles/Programs.css";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function Programs() {



    return (

        <div className="OverallContainer">
            <div className="SecondContainer">
                <div className="WeekContainer">
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridWeek"
                        contentHeight="80vh"
                        aspectRatio={3}
                    />
                </div>
                <div className="CalendarContainer">
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        contentHeight="80vh"
                        aspectRatio={2}
                    />
                </div>
            </div>
        </div>

    )
}

export default Programs;