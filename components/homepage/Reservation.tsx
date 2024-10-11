"use client"; // Označuje komponentu jako Client Component

import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CalendarMonth, Call } from "@mui/icons-material";
import { useRouter } from "next/navigation"; // Použijte next/navigation pro navigaci
import Button from "../Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { cs } from "date-fns/locale";

registerLocale("cs", cs);

const Reservation: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [openUpwards, setOpenUpwards] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleDateClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const spaceBelow = windowHeight - rect.bottom;
      const spaceAbove = rect.top;

      setOpenUpwards(spaceBelow < 300 && spaceAbove > spaceBelow);
    }
    setCalendarOpen((prev) => !prev);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      setCalendarOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node)
    ) {
      setCalendarOpen(false);
    }
  };

  const handleReservationClick = () => {
    const formattedDate = startDate.toISOString().split("T")[0];
    router.push(`/rezervace/?date=${formattedDate}`);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="reservation">
      <div className="flex -mt-[6.3rem] sirka justify-center">
        <div
          className="px-10 mx-0 md:mx-16 w-full py-8 z-20 flex justify-between items-center gap-20 rounded-3xl bg-white shadow-xl
          lg:flex-row md:flex-col md:gap-6 sm:flex-col sm:gap-6 xs:flex-col xs:gap-6"
        >
          <p className="text-[1.7rem] font-bold text-center sm:text-left">
            Rezervujte si svůj kurt{" "}
            <span className="text-zluta">ještě dnes:</span>
          </p>
          <div className="flex flex-col xl:flex-row gap-3 sm:gap-4">
            <div
              className="relative flex flex-col sm:flex-row gap-3"
              ref={buttonRef}
            >
              <Button to="#" outline={true} onClick={handleDateClick}>
                <CalendarMonth />
                <IoMdArrowDropdown className="-mr-2 ml-3" />
                <span className="font-medium">
                  {startDate.toLocaleDateString()}
                </span>
              </Button>
              {calendarOpen && (
                <div
                  ref={calendarRef}
                  className={`absolute ${
                    openUpwards ? "bottom-full mb-2" : "top-full mt-2"
                  } z-50 left-0 custom-datepicker-wrapper`}
                >
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    inline
                    calendarClassName="custom-calendar"
                    locale="cs"
                  />
                </div>
              )}
            </div>

            <Button onClick={handleReservationClick}>
              PŘEJÍT&nbsp;K&nbsp;REZERVACI
            </Button>
          </div>
          <div className="flex justify-center">
            <Button>
              <Call className="text-white text-3xl" />{" "}
              {/* Použijte komponentu Call pro ikonu */}
              +420&nbsp;724&nbsp;843&nbsp;341
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
