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
});document.getElementById('export-button').addEventListener('click', exportToFile);

function exportToFile() {
    const name = document.getElementById('name').textContent;
    const title = document.getElementById('title').textContent;
    const contact = document.getElementById('contact').textContent;
    const summary = document.getElementById('summary').textContent;
    const jobTitle = document.getElementById('job-title').textContent;
    const company = document.getElementById('company').textContent;
    const jobDetails = [...document.getElementById('job-details').children].map(li => li.textContent).join('\n');
    const degreeTitle = document.getElementById('degree-title').textContent;
    const collegeName = document.getElementById('college-name').textContent;
    const skills = [...document.getElementById('list-of-skills').children].map(li => li.textContent).join(', ');

    const resumeContent = `
    Name: ${name}
    Title: ${title}
    Contact: ${contact}

    Professional Summary:
    ${summary}

    Work Experience:
    ${jobTitle} at ${company}
    ${jobDetails}

    Education:
    ${degreeTitle}
    ${collegeName}

    Skills:
    ${skills}
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = 'resume.txt';
    anchor.click();
}
