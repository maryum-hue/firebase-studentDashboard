// students-form.js
import { db, collection, addDoc, serverTimestamp } from "./firebase.js";

const fullName = document.getElementById("fullName");
const course = document.getElementById("course");
const timings = document.getElementById("timings");
const campus = document.getElementById("campus");
const teacherName = document.getElementById("TeacherName");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async () => {
  try {
    await addDoc(collection(db, "students"), {
      fullName: fullName.value,
      course: course.value,
      timings: timings.value,
      campus: campus.value,
      teacherName: teacherName.value,
      createdAt: serverTimestamp()
    });

    Swal.fire("Success", "Student saved!", "success").then(() => {
      // redirect to dashboard after saving
      window.location.href = "data.html";
    });

  } catch (err) {
    Swal.fire("Error", err.message, "error");
  }
});
