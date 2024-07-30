document.getElementById('name-input').addEventListener('input', function() {
    document.getElementById('name').textContent = this.value;
});

document.getElementById('title-input').addEventListener('input', function() {
    document.getElementById('title').textContent = this.value;
});

document.getElementById('contact-input').addEventListener('input', function() {
    document.getElementById('contact').textContent = this.value;
});

document.getElementById('summary-input').addEventListener('input', function() {
    document.getElementById('summary').textContent = this.value;
});

document.getElementById('job-title-input').addEventListener('input', function() {
    document.getElementById('job-title').textContent = this.value;
});

document.getElementById('job-company-input').addEventListener('input', function() {
    document.getElementById('company').textContent = this.value;
});

document.getElementById('degree-title-input').addEventListener('input', function() {
    document.getElementById('degree-title').textContent = this.value;
});

document.getElementById('degree-school-input').addEventListener('input', function() {
    document.getElementById('college-name').textContent = this.value;
});

document.getElementById('skills-input').addEventListener('input', function() {
    const skillsList = this.value.split(',').map(skill => skill.trim());
    const skillsUl = document.getElementById('list-of-skills');
    skillsUl.innerHTML = '';
    skillsList.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsUl.appendChild(li);
    });
});
