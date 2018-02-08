const Data = {
  projects: [
    {
      id: 1,
      title: 'Bootcampr',
      img: '/bootcampr.PNG',
      website: 'https://www.bootcampr.herokuapp.com/',
      github: 'https://www.github.com/joshuarudio/Bootcampr/',
      shortDescription: 'UX Design | Backend Architecture',
      longDescription:
        "When we at Bootcampr graduated from Dev Bootcamp Seattle, we didn't want to lose the special community we had made through weeks of learning, hard work, and (of course) stress. In fact, we wanted to extend that community even further, and invite in all who have shared in those experiences. We want to learn more. We want to share what we know. We want to know you better. We want to make beautiful and meaningful things, and we want to do it with you.",
      role:
        'My team utilized Agile methodologies and taking vertical slices of the MVC. For the most part, I was responsible for UX design and some Backend Architecture.'
    },
    {
      id: 2,
      title: 'Personal Portfolio',
      img: '/portfolio.PNG',
      website: 'https://joshuarud.io/',
      github: 'https://www.github.com/joshuarudio/my-app',
      shortDescription: 'Web Development',
      longDescription: 'A portfolio website I created to show off projects I have worked on.',
      role: 'I am the sole contributer to this project.'
    }
  ],
  all: function() {
    return this.projects;
  },
  get: function(id) {
    const isProject = project => project.id === id;
    return this.projects.find(isProject);
  }
};

export default Data;
