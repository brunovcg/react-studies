import { useState, useMemo } from "react";
import { CalendarProps, DataSourceType } from "./calendar.types";
import moment from "moment";
import "./styles.css";
// import Icon from "../Icon/Icon";

function Calendar({ startDate }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(
    startDate ?? new Date()
  );

  const dataSource: DataSourceType[] = useMemo(
    () =>
      new Array(7)
        .fill({ id: "", header: "", body: "" }, 0, 7)
        .map((_, index) => {
          const dayOfTheWeek = moment(selectedDate).isoWeekday();
          const date = new Date(
            moment(selectedDate)
              .add(index - (dayOfTheWeek === 7 ? 0 : dayOfTheWeek), "days")
              .format()
          );
          return {
            id: index,
            date,
            header: moment(date).format("ddd"),
            body: moment(date).format("DD"),
            isSelected: moment(date)
              .startOf("day")
              .isSame(moment(selectedDate).startOf("day")),
            isToday: moment().isSame(date, "day"),
          };
        }),
    [selectedDate]
  );

  const handleAddDate = (days: number) => {
    const updatedDate = new Date(
      moment(selectedDate).add(days, "days").format()
    );
    setSelectedDate(updatedDate);
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(moment(e.target.value).format()));
  };

  const handleClickDate = (
    e: React.MouseEvent<HTMLTableCellElement>,
    date: Date
  ) => {
    setSelectedDate(new Date(moment(date).format()));
  };

  const formatInputDate = (date: Date): string =>
    date.toISOString().substring(0, 10);

  return (
    <div className="calendar-container">
      <div className="calendar-option">
        <button
          className="previous-button"
          title="Previous week"
          onClick={() => handleAddDate(-7)}
        >
          {/* <Icon icon="arrow_back_ios" /> */}
        </button>
        <label htmlFor="calendar-input">
          Selected Date
          <input
            id="calendar-input"
            type="date"
            value={formatInputDate(selectedDate)}
            onChange={handleChangeDate}
            required
          />
        </label>
        <button
          className="next-button"
          title="Next week"
          onClick={() => handleAddDate(+7)}
        >
          {/* <Icon icon="arrow_forward_ios" /> */}
        </button>
      </div>
      <table className="calendar">
        <thead className="calendar-header">
          <tr>
            {dataSource.map((item, index) => (
              <td className="header-item" key={item.id}>
                {item.header}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="calendar-body">
          <tr>
            {dataSource.map((item, index) => (
              <td
                className={`${item.isToday ? "today" : ""} ${
                  item.isSelected ? "selected-day" : ""
                }`}
                key={item.id}
                onClick={(e) => handleClickDate(e, item.date)}
              >
                <div className="body-item">{item.body}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
