import {green, orange, yellow} from '../../component/color';

export const dataProfile = {
  name: 'aldo',
  card: 'red',
  upcomingPaid: 3500000,
  paid: 10000000,
  unpaid: 500000,
  gradeScore: [
    {semester: 'Odd Semester, 2020', grade: 3.0},
    {semester: 'Even Semester, 2020', grade: 1.7},
    {semester: 'Odd Semester, 2021', grade: 4.0},
  ],
};

export const scheduleData = [
  {
    schedule: '05/05/2024',
    course: 'Web Design',
    class: 'LA01 - LEC',
    session: 'HTML introduction',
  },
  {
    schedule: '02/05/2024',
    course: 'District Matematic',
    class: 'LA02 - LEC',
    session: 'Geometry',
  },
  {
    schedule: '24/05/2024',
    course: 'Basic Programing',
    class: 'LA02 - LEC',
    session: 'C++',
  },
];

export const scoreData = [
  {title: 'GPA', score: '3.00', color: yellow},
  {title: 'SAT', score: '219', color: green},
  {title: 'ComServ', score: '13', color: orange},
];

export const ongoingClass = [
  {
    course: 'Web Design',
    class: 'LA01 - LEC',
    session: 'HTML introduction',
    schedule: '-3d 13h',
  },
  {
    course: 'District Matematic',
    class: 'LA02 - LEC',
    session: 'Geometry',
    schedule: '5d 13h',
  },
  {
    course: 'Basic Programing',
    class: 'LA02 - LEC',
    session: 'C++',
    schedule: 'now',
  },
];

export const upcomingClass = [
  {
    type: 'Onite - Anggrek 521',
    course: 'Web Design',
    class: 'LA01 - LEC',
    schedule: '6d 13h',
    time: '13.20 - 15.00',
  },
  {
    type: 'GSLC - Forum',
    course: 'CB: Pancasila',
    class: 'BA04 - LEC',
    schedule: '9d 3h',
    time: '1 Week',
  },
];

export const announcement = [
  {
    from: 'Binus',
    title: 'Onsite and Online Regis',
    miniDesc: '',
    date: '22/04/2024',
  },
  {
    from: 'Linear Algebra',
    title: 'Last day of collection',
    miniDesc: 'Individual Assigment - Matrix ',
    date: '01/04/2023',
  },
  {
    from: 'Binus',
    title: 'Academic Calendar 2021/2022',
    miniDesc: '',
    date: '21/04/2024',
  },
  {
    from: 'ESEE 1',
    title: 'Do your GSLC with discussion',
    miniDesc: 'Group GSLC - Job Interview ',
    date: '14/04/2024',
  },
];
