const student = {
  name: '채빈',
  skills: ['html', 'css', 'javascript'],
};
function printSkills(skills) {
  for (const skill of skills) {
    if (skill == 'css') {
      console.log(`${skill}:화면에 동작을 더합니다.`);
    } else {
      console.log(skill);
    }
  }
}
console.log(student.name);
printSkills(student.skills);

const message = document.querySelector('#message');
const cheerButton = document.querySelector('#cheer-button');
cheerButton.addEventListener('click', function () {
  message.textContent = '좋아요!작은 코드부터 직접 바꾸어 봅시다';
});
