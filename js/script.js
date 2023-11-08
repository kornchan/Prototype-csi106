// นี่เป็นตัวอย่างการใช้ JavaScript เพื่อกรองตารางเวลา
const btn = document.getElementsByClassName("btn")
// สร้างตารางเวลาเรียนของนักศึกษา
const studentCalendar = document.getElementById("student-calendar");
// สร้างตารางเวลาทำงานของนายจ้าง
const employerCalendar = document.getElementById("employer-calendar");

// สร้างฟังก์ชันสำหรับเพิ่มเหตุการณ์ในตาราง
function addEvent(calendar, title, startTime, endTime, faculty, major) {
    const event = document.createElement("div");
    event.classList.add("event");
    event.textContent = `${title}\n${startTime} - ${endTime}\nคณะ: ${faculty}\nสาขา: ${major}`;
    calendar.appendChild(event);
}


// เพิ่มเหตุการณ์ตัวอย่าง
    


// สร้างตัวกรองแยกคณะและสาขา
const facultyFilter = document.getElementById("faculty");
const majorFilter = document.getElementById("major");


// ใช้ฟังก์ชันเพื่อกรองตารางเวลา


function filterTimetable() {
    const selectedFaculty = facultyFilter.value;
    const selectedMajor = majorFilter.value;
    let science = document.getElementById("science").value;
    let math = document.getElementById("math").value;
    let physics = document.getElementById("physics").value;
    let all_f = document.getElementById("all-faculty").value;
    let all_m = document.getElementById("all-major").value;
    // สร้างเหตุการณ์ที่เข้าข่ายตามตัวกรอง
    if(selectedFaculty == science && selectedMajor == math){
        addEvent(studentCalendar, "Math Class", "09:00 AM", "10:30 AM", "science", "math");
        addEvent(employerCalendar, "Meeting", "14:00 PM", "15:30 PM", "science", "math");
        addEvent(employerCalendar, "Working", "16:00 PM", "23:00 PM", "science", "math");
    }else if(selectedFaculty == science && selectedMajor == physics){
        addEvent(studentCalendar, "Physics Lecture", "11:00 AM", "12:30 PM", "science", "physics");
        addEvent(employerCalendar, "Meeting", "8:00 PM", "9:30 PM", "science", "physics");
        addEvent(employerCalendar, "Work at office", "14:00 PM", "18:30 PM", "science", "physics");
        
    }else if(selectedFaculty == all_f){
        addEvent(studentCalendar, "Math Class", "09:00 AM", "10:30 AM", "science", "math");
        addEvent(studentCalendar, "Physics Lecture", "11:00 AM", "12:30 PM", "science", "physics");
        addEvent(employerCalendar, "Meeting", "8:00 PM", "9:30 PM", "science", "physics");
        addEvent(employerCalendar, "Work at office", "14:00 PM", "18:30 PM", "science", "physics");
        addEvent(employerCalendar, "Meeting", "14:00 PM", "15:30 PM", "science", "math");
        addEvent(employerCalendar, "Working", "16:00 PM", "23:00 PM", "science", "math");
    }
    else if(selectedMajor == all_m){
        addEvent(studentCalendar, "Math Class", "09:00 AM", "10:30 AM", "science", "math");
        addEvent(studentCalendar, "Physics Lecture", "11:00 AM", "12:30 PM", "science", "physics");
        addEvent(employerCalendar, "Meeting", "8:00 PM", "9:30 PM", "science", "physics");
        addEvent(employerCalendar, "Work at office", "14:00 PM", "18:30 PM", "science", "physics");
        addEvent(employerCalendar, "Meeting", "14:00 PM", "15:30 PM", "science", "math");
        addEvent(employerCalendar, "Working", "16:00 PM", "23:00 PM", "science", "math");
        
    }else if(selectedFaculty == all_f && selectedMajor == all_m){
        addEvent(studentCalendar, "Math Class", "09:00 AM", "10:30 AM", "science", "math");
        addEvent(studentCalendar, "Physics Lecture", "11:00 AM", "12:30 PM", "science", "physics");
        addEvent(employerCalendar, "Meeting", "8:00 PM", "9:30 PM", "science", "physics");
        addEvent(employerCalendar, "Work at office", "14:00 PM", "18:30 PM", "science", "physics");
        addEvent(employerCalendar, "Meeting", "14:00 PM", "15:30 PM", "science", "math");
        addEvent(employerCalendar, "Working", "16:00 PM", "23:00 PM", "science", "math");
    }
    


    // สามารถเพิ่มเหตุการณ์เพิ่มเติมตามความต้องการ
}

    // ล้างตารางเวลาเดิม
function reset(){
    studentCalendar.innerHTML = "";
    employerCalendar.innerHTML = "";
}