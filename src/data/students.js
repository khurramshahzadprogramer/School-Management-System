export const initialStudents = [
  { id: 1, admNo: "ME-2026-001", roll: "101", firstName: "Ahmed", lastName: "Khan", gender: "Male", dob: "2010-05-12", bloodGroup: "O+", class: "Class 10", section: "Section A", parentName: "Tariq Khan", phone: "+92 300 1234567", email: "tariq.khan@gmail.com", address: "House 45, Street 3, Islamabad", attendance: "96%", feeStatus: "Paid", status: "Active" },
  { id: 2, admNo: "ME-2026-002", roll: "102", firstName: "Fatima", lastName: "Ali", gender: "Female", dob: "2010-08-22", bloodGroup: "A+", class: "Class 10", section: "Section A", parentName: "Imran Ali", phone: "+92 301 2345678", email: "imran.ali@gmail.com", address: "Flat 12, Gulberg, Lahore", attendance: "92%", feeStatus: "Pending", status: "Active" },
  { id: 3, admNo: "ME-2026-003", roll: "103", firstName: "Hassan", lastName: "Raza", gender: "Male", dob: "2011-02-15", bloodGroup: "B+", class: "Class 9", section: "Section B", parentName: "Raza Ahmed", phone: "+92 302 3456789", email: "raza@gmail.com", address: "Sector F-7/2, Islamabad", attendance: "88%", feeStatus: "Paid", status: "Active" },
  { id: 4, admNo: "ME-2026-004", roll: "104", firstName: "Ayesha", lastName: "Malik", gender: "Female", dob: "2012-11-05", bloodGroup: "AB+", class: "Class 8", section: "Section A", parentName: "Zubair Malik", phone: "+92 303 4567890", email: "zubair@gmail.com", address: "Model Town, Lahore", attendance: "95%", feeStatus: "Overdue", status: "Active" },
  { id: 5, admNo: "ME-2026-005", roll: "105", firstName: "Bilal", lastName: "Ahmed", gender: "Male", dob: "2010-01-30", bloodGroup: "O-", class: "Class 10", section: "Section B", parentName: "Saeed Ahmed", phone: "+92 304 5678901", email: "saeed@gmail.com", address: "Satellite Town, Rawalpindi", attendance: "91%", feeStatus: "Paid", status: "Active" }
];

export const initialTeachers = [
  { id: 1, empId: "TCH-001", name: "Dr. Salman Akram", subject: "Mathematics", department: "Science & Math", classes: "Class 10, Class 9", phone: "+92 305 1112233", email: "salman@esylearning.com", attendance: "98%", status: "Active" },
  { id: 2, empId: "TCH-002", name: "Prof. Nida Tariq", subject: "English Literature", department: "Humanities", classes: "Class 9, Class 8", phone: "+92 306 2223344", email: "nida@esylearning.com", attendance: "95%", status: "Active" },
  { id: 3, empId: "TCH-003", name: "Mr. Kamran Akmal", subject: "Computer Science", department: "Technology", classes: "Class 8, Class 7", phone: "+92 307 3334455", email: "kamran@esylearning.com", attendance: "96%", status: "Active" },
  { id: 4, empId: "TCH-004", name: "Mrs. Sadia Jamil", subject: "Biology", department: "Science & Math", classes: "Class 10, Class 8", phone: "+92 308 4445566", email: "sadia@esylearning.com", attendance: "92%", status: "Active" }
];

export const initialFees = [
  { id: 1, invoiceId: "INV-2026-001", student: "Ahmed Khan", class: "Class 10", type: "Tuition Fee", amount: "15,000 PKR", dueDate: "2026-10-01", paid: "15,000 PKR", remaining: "0 PKR", status: "Paid" },
  { id: 2, invoiceId: "INV-2026-002", student: "Fatima Ali", class: "Class 10", type: "Tuition Fee", amount: "15,000 PKR", dueDate: "2026-10-05", paid: "0 PKR", remaining: "15,000 PKR", status: "Pending" },
  { id: 3, invoiceId: "INV-2026-003", student: "Hassan Raza", class: "Class 9", type: "Computer Lab", amount: "5,000 PKR", dueDate: "2026-09-30", paid: "5,000 PKR", remaining: "0 PKR", status: "Paid" },
  { id: 4, invoiceId: "INV-2026-004", student: "Ayesha Malik", class: "Class 8", type: "Tuition Fee", amount: "12,500 PKR", dueDate: "2026-09-25", paid: "2,500 PKR", remaining: "10,000 PKR", status: "Overdue" }
];

export const initialNotices = [
  { id: 1, title: "Annual Sports Festival 2026", date: "2026-10-03", author: "Principal Office", audience: "Everyone", priority: "High", status: "Published", content: "M.E Foundations School Annual Sports Festival will take place on November 15, 2026." },
  { id: 2, title: "Mid-Term Examination Schedule", date: "2026-09-28", author: "Exam Department", audience: "Students", priority: "Normal", status: "Published", content: "Mid-term examinations commence from October 15, 2026. Check student portals for date sheets." }
];

export const initialActivities = [
  { id: 1, action: "New Student Admission: Ahmed Khan (ME-2026-001)", user: "Admin", time: "10 mins ago" },
  { id: 2, action: "Fee Payment Recorded for Hassan Raza (5,000 PKR)", user: "Accountant", time: "1 hour ago" },
  { id: 3, action: "Published Notice: Annual Sports Festival 2026", user: "Admin", time: "3 hours ago" }
];
