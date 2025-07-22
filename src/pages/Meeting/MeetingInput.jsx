import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  format,
  isSameDay,
  isSameMonth,
  addMonths,
  subMonths,
  isToday,
} from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import Header from "../../components/Header/Header";

const times = [
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "3:00 PM",
  "3:30 PM",
];

const MeetingInput = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });

  const renderHeader = () => (
    <div className="flex justify-between items-center text-white mb-4 px-2">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        <FaArrowLeft />
      </button>
      <span className="text-lg font-bold">
        {format(currentMonth, "MMMM yyyy")}
      </span>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        <FaArrowRight />
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = new Date();
    const weekStart = startOfWeek(date);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}
          className="text-xs font-medium text-gray-300 text-center uppercase"
        >
          {format(addDays(weekStart, i), "EEE")}
        </div>
      );
    }
    return <div className="grid grid-cols-7 gap-1 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfMonth(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formatted = format(day, "d");
        const cloneDay = day;
        const isDisabled = !isSameMonth(day, monthStart) || day < new Date();

        days.push(
          <div
            key={day}
            className={`text-center text-sm p-2 rounded-lg cursor-pointer transition-all
              ${isDisabled ? "text-gray-500" : "text-white hover:bg-green-700"}
              ${isToday(day) && !isDisabled ? "border border-green-300" : ""}
              ${isSameDay(day, selectedDate) ? "bg-green-600 font-bold" : ""}
            `}
            onClick={() => !isDisabled && setSelectedDate(cloneDay)}
          >
            {formatted}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1 mb-1" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  const handleInputChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      selectedDate: format(selectedDate, "yyyy-MM-dd"),
      selectedTime,
    });
  };

  return (
    <div className="mb-12" >
      <Header
        title="Schedule a Meeting"
        description="Select a date and time to book your meeting with us."
      />
      <div className=" flex justify-center items-center ">
        <div className="w-full  max-w-6xl rounded-2xl overflow-hidden  grid md:grid-cols-2">
          {/* Left Panel: Calendar + Time */}
          <div className="bg-black text-white p-8">
            <h2 className="text-2xl font-bold mb-6">Select a Date</h2>
            {renderHeader()}
            {renderDays()}
            {renderCells()}

            <AnimatePresence>
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    Available Times
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {times.map((time, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-xl px-3 py-2 text-sm border 
                        ${
                          selectedTime === time
                            ? "bg-green-500 text-white border-green-500"
                            : "bg-white text-green-900 border-white hover:bg-green-900 hover:text-white"
                        }`}
                      >
                        <FaClock className="inline mr-1" />
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Panel: User Info */}
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Your Info
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block mb-1 text-sm">Name</label>
                <div className="flex items-center border rounded-lg p-2">
                  <FaUser className="text-green-700 mr-2" />
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full outline-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm">Email</label>
                <div className="flex items-center border rounded-lg p-2">
                  <FaEnvelope className="text-green-700 mr-2" />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jon@gmail.com"
                    className="w-full outline-none"
                    required
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label className="block mb-1 text-sm">Contact Number</label>
                <input
                  name="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="+1 234 567 890"
                  className="w-full border p-2 rounded-lg outline-none"
                  required
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block mb-1 text-sm">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-lg outline-none"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Logo Animation">Logo Animation</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block mb-1 text-sm">Estimated Budget</label>
                <input
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="$100"
                  className="w-full border p-2 rounded-lg outline-none"
                  required
                />
              </div>

              <div className="w-60 mx-auto">
                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedDate || !selectedTime}
                  className="w-60 mx-auto justify-center bg-green-700 hover:bg-black text-white font-semibold py-3 rounded-lg  disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </motion.button>
              </div>

              {selectedDate && selectedTime && (
                <p className="text-sm text-gray-600 pt-2">
                  Booking for <b>{format(selectedDate, "MMMM d, yyyy")}</b> at{" "}
                  <b>{selectedTime}</b>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingInput;
