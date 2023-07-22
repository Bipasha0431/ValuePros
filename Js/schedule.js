// Calender

const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML =
    months[date.getMonth()] + " " + date.getFullYear();

  let days = "";

  const selectDate = (day) => {
    const selectedMonth = date.getMonth() + 1;
    const selectedYear = date.getFullYear();
    selectedDate = new Date(`${selectedYear}-${selectedMonth}-${day}`);
  };

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;

  const calendarDays = monthDays.querySelectorAll(
    "div:not(.prev-date):not(.next-date)"
  );
  calendarDays.forEach((day) => {
    day.addEventListener("click", () => {
      const selectedDay = parseInt(day.textContent);
      selectDate(selectedDay);
    });
  });
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

const reqbtn = document.querySelector(".reqbtn");
const schedbox = document.querySelector(".sched-box");
let data = [];

// For displaying the content of requested
function display() {
  schedbox.innerHTML = "";
  data.forEach((item, index) => {
    const req1 = document.createElement("div");
    req1.classList.add("req1");
    req1.dataset.index = index; // Assign index as a data attribute

    const reqbox = document.createElement("div");
    reqbox.classList.add("reqbox");
    const reqhead = document.createElement("p");
    reqhead.classList.add("head");
    const reqdate = document.createElement("h3");
    const reqloc = document.createElement("p");

    const status1 = document.createElement("p");
    status1.classList.add("status1");
    const s = document.createElement("p");
    s.textContent = "REQUESTED";
    const statusIcon = document.createElement("i");
    statusIcon.classList.add("s1", "fas", "fa-hourglass-half");

    status1.appendChild(statusIcon);
    status1.appendChild(s);

    const displayedDate = item.date;
    const displayedTime = item.time;

    reqdate.textContent = displayedDate + " " + displayedTime;
    reqloc.textContent = item.location;

    reqhead.innerHTML = "REQUESTED ONSITE APPRAISAL";
    reqbox.appendChild(reqhead);
    reqbox.appendChild(reqdate);
    reqbox.appendChild(reqloc);
    reqbox.appendChild(status1);

    req1.appendChild(reqbox);
    const editDiv = document.createElement("div");
    editDiv.classList.add("editdiv");
    const editIcon = document.createElement("i");
    editIcon.classList.add("edit", "fas", "fa-pencil-alt");

    editDiv.appendChild(editIcon);

    editIcon.addEventListener("click", () => {
      document.querySelector(".editpge").style.display = "flex";
      box.style.position = "fixed";
      box.style.width = "100%";

      // Set the index of the current req1 for reference
      selectedIndex = index;
    });

    req1.appendChild(editDiv);
    document.querySelector(".editpge").style.display = "none";
    box.style.position = "unset";
    schedbox.appendChild(req1);
  });
}

// reqbtn is the submit request button
reqbtn.addEventListener("click", () => {
  const selectedIndex = document.getElementById("location").selectedIndex;
  const location =
    document.getElementById("location").options[selectedIndex].textContent;

  let formattedDate = "";
  if (selectedDate) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = monthNames[selectedDate.getMonth()];

    const day = String(selectedDate.getDate()).padStart(2, "0");
    formattedDate = `${month} ${day},`;
  }
  const time = document.getElementById("time");

  const reqData = {
    date: formattedDate,
    time: time.value,
    location: location,
  };

  data.push(reqData);
  display();
});

// Modify the request
const redate = document.getElementById("re-date");
const retime = document.getElementById("re-time");
const reloc = document.getElementById("re-loc");

const update = document.getElementById("update");
let selectedIndex = -1;

// update.addEventListener("click", () => {
//   const index = selectedIndex;
//   if (index !== -1) {
//     const selectedDate = redate.value;
//     const selectedTime = retime.value;
//     const selectedLoc = reloc.options[reloc.selectedIndex].textContent;

//     const month = selectedDate.split("-")[1];
//     const date = selectedDate.split("-")[2];

//     const updatedData = {
//       date: `${month}-${date}`,
//       time: selectedTime,
//       location: selectedLoc,
//     };

//     data[index] = updatedData; // Update the data at the corresponding index

//     display();
//   }
// });

update.addEventListener("click", () => {
  const index = selectedIndex;
  if (index !== -1) {
    const selectedDate = redate.value;
    const selectedTime = retime.value;
    const selectedLoc = reloc.options[reloc.selectedIndex].textContent;

    const dateObj = new Date(selectedDate);
    const month = dateObj.toLocaleString("default", { month: "long" });
    const day = String(dateObj.getDate()).padStart(2, "0");

    const updatedData = {
      date: `${month} ${day},`,
      time: selectedTime,
      location: selectedLoc,
    };

    data[index] = updatedData; // Update the data at the corresponding index

    display();
  }
});

const delButton = document.querySelector(".editpge .del");

delButton.addEventListener("click", () => {
  if (selectedIndex !== -1) {
    data.splice(selectedIndex, 1);
    display();
    document.querySelector(".editpge").style.display = "none";
    box.style.position = "unset";
  }
});

const cancel = document.querySelector(".cancel");

cancel.addEventListener("click", () => {
  document.querySelector(".editpge").style.display = "none";
  box.style.position = "unset";
});
