import { db, collection, onSnapshot, deleteDoc, doc } from "./firebase.js";

const list = document.getElementById("studentList");
const loader = document.getElementById("loader");

// Show students (Realtime)
function getStudents() {
  onSnapshot(collection(db, "students"), (snapshot) => {
    // hide loader once data is ready
    loader.classList.add("hidden");
    list.classList.remove("hidden");

    list.innerHTML = "";
    snapshot.forEach((docSnap) => {
      const student = docSnap.data();
      let created = student.createdAt?.toDate().toLocaleString() || "";

      list.innerHTML += `
        <li>
          <div class="info">
            <label>Full Name</label>
            <span>${student.fullName}</span>
          </div>
          <div class="info">
            <label>Course</label>
            <span>${student.course}</span>
          </div>
          <div class="info">
            <label>Timings</label>
            <span>${student.timings}</span>
          </div>
          <div class="info">
            <label>Campus</label>
            <span>${student.campus}</span>
          </div>
          <div class="info">
            <label>Teacher</label>
            <span>${student.teacherName}</span>
          </div>
          <div class="info">
            <label>Created At</label>
            <span>${created}</span>
          </div>
          <div class="actions">
            <button onclick="deleteStudent('${docSnap.id}')">Delete</button>
          </div>
        </li>
      `;
    });
  });
}
getStudents();

// Delete student
window.deleteStudent = async function(id) {
  await deleteDoc(doc(db, "students", id));
  Swal.fire("Deleted", "Student removed", "success");
};
