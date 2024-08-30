import doctorImg01 from "../../../public/doctor-img01.png";
import doctorImg02 from "../../../public/doctor-img02.png";
import doctorImg03 from "../../../public/doctor-img03.png";

export const doctors = [
  {
    id: "01",
    name: "Dr. Rajesh Sharma",
    specialization: "Surgeon",
    avgRating: 4.5,
    totalRating: 532,
    photo: doctorImg01,
    totalPatients: 1800,
    hospital: "Apollo Hospital, Chennai",
  },
  {
    id: "02",
    name: "Dr. Anjali Mehta",
    specialization: "Neurologist",
    avgRating: 4.8,
    totalRating: 719,
    photo: doctorImg02,
    totalPatients: 2300,
    hospital: "Fortis Hospital, Mumbai",
  },
  {
    id: "03",
    name: "Dr. Vikram Rao",
    specialization: "Dermatologist",
    avgRating: 4.7,
    totalRating: 492,
    photo: doctorImg03,
    totalPatients: 1500,
    hospital: "AIIMS, New Delhi",
  },
];
