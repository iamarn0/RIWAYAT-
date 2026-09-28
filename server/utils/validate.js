const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return String(value ?? "").trim();
}

function buildSlots(start, end) {
  const slots = [];
  let [hour, minute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  while (hour < endHour || (hour === endHour && minute <= endMinute)) {
    slots.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`);
    minute += 30;
    if (minute >= 60) {
      minute = 0;
      hour += 1;
    }
  }

  return slots;
}

const timeSlots = [...buildSlots("12:00", "15:30"), ...buildSlots("18:30", "23:00")];

function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null;
  }
  return date;
}

function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function validateReservation(input) {
  const errors = {};
  const value = {
    name: clean(input.name),
    email: clean(input.email).toLowerCase(),
    phone: clean(input.phone),
    date: clean(input.date),
    time: clean(input.time),
    guests: Number(input.guests),
    occasion: clean(input.occasion),
    requests: clean(input.requests),
  };

  if (value.name.length < 2 || value.name.length > 80) {
    errors.name = "Please enter your name.";
  }

  if (!emailPattern.test(value.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!/^[+\d][\d\s()-]{7,18}$/.test(value.phone)) {
    errors.phone = "Please enter a phone number we can call.";
  }

  const date = parseDate(value.date);
  if (!date) {
    errors.date = "Please choose a date.";
  } else if (date < startOfToday()) {
    errors.date = "Please choose a date that has not already passed.";
  } else if (date.getDay() === 1) {
    errors.date = "RIWAYAT is closed on Mondays. Please choose another day.";
  } else {
    const limit = new Date(startOfToday());
    limit.setMonth(limit.getMonth() + 6);
    if (date > limit) errors.date = "Reservations open up to six months ahead.";
  }

  if (!timeSlots.includes(value.time)) {
    errors.time = "Please choose a time during lunch or dinner service.";
  }

  if (!Number.isInteger(value.guests) || value.guests < 1 || value.guests > 10) {
    errors.guests = "Please choose between 1 and 10 guests.";
  }

  if (value.occasion.length > 40) errors.occasion = "Please shorten the occasion.";
  if (value.requests.length > 500) errors.requests = "Please keep special requests under 500 characters.";

  return { errors, value };
}

export function validateContact(input) {
  const errors = {};
  const value = {
    name: clean(input.name),
    email: clean(input.email).toLowerCase(),
    message: clean(input.message),
  };

  if (value.name.length < 2 || value.name.length > 80) {
    errors.name = "Please enter your name.";
  }

  if (!emailPattern.test(value.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (value.message.length < 10 || value.message.length > 800) {
    errors.message = "Please write a message of at least a few words.";
  }

  return { errors, value };
}
