const genderOptions = [
  { id: 1, name_ar: "ذكر", name_en: "Male" },
  { id: 2, name_ar: "أنثى", name_en: "Female" }
];
const proficiencyLevel = [
  { id: 1, name_ar: "بطلاقة", name_en: "Fluent" },
  { id: 2, name_ar: "متوسطة", name_en: "Intermediate" },
  { id: 3, name_ar: "منخفضة", name_en: "Low" },
  { id: 4, name_ar: "لا شيء", name_en: "None" }
];
const maritlStatusOptions = [
  { id: 1, name_ar: "متزوج ", name_en: "Married" },
  { id: 2, name_ar: "أعزب ", name_en: "Single" },
  { id: 3, name_ar: "مطلق ", name_en: "Divorced" },
  { id: 4, name_ar: "أرمل ", name_en: "Widow" }
];
const PostedDate = [
  {
    id: 0,
    name_en: "All",
    name_ar: "الكل"
  },
  {
    id: 1,
    name_en: "Today",
    name_ar: "اليوم"
  },
  {
    id: 2,
    name_en: "A week ago",
    name_ar: "منذ اسبوع"
  },
  {
    id: 3,
    name_en: "Month ago",
    name_ar: "منذ شهر"
  }
];

const time_options = [
  {
    id: 1,
    name_ar: "ساعة",
    name_en: "Hours"
  },
  {
    id: 2,
    name_ar: "يوم",
    name_en: "Days"
  },
  {
    id: 3,
    name_ar: "اسبوع",
    name_en: "Weeks"
  },
  {
    id: 4,
    name_ar: "شهر",
    name_en: "Months"
  },
  {
    id: 5,
    name_ar: "سنة",
    name_en: "Years"
  }
];

export {
  genderOptions,
  maritlStatusOptions,
  proficiencyLevel,
  PostedDate,
  time_options
};
