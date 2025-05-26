const kroForm = document.getElementById('kroForm');
const kroResult = document.getElementById('kroResult');

kroForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Qiymatlarni olish
  const name = kroForm.name.value.trim();
  const email = kroForm.email.value.trim();
  const phone = kroForm.phone.value.trim();
  const course = kroForm.course.value;
  const teacher = kroForm.teacher.value;

  // Natijalarni chiqarish
  document.getElementById('kroResName').textContent = name;
  document.getElementById('kroResEmail').textContent = email;
  document.getElementById('kroResPhone').textContent = phone;
  document.getElementById('kroResCourse').textContent = course;
  document.getElementById('kroResTeacher').textContent = teacher;

  // Natijani ko'rsatish
  kroResult.style.display = 'block';

  // Formani tozalashni hohlasangiz izohni oching
  // kroForm.reset();
});