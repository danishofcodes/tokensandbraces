import reactIcon from '../assets/react.svg'

export const posts = [
    {
      title: 'CS50',
      description: "This is CS50, Harvard University's introduction to the intellectual enterprises of computer science and the art of programming.",
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://youtube.com/playlist?list=PLhQjrBD2T381WAHyx1pq-sBfykqMBI7V4&si=KTUXdgSCsXqFqP-Y',
      isVideo: true,
      sitename: "Youtube",
      must: true,
      tags: ["CS", "Programming", "Harvard"]
    },
    {
      title: 'The Art of Code - Dylan Beattie',
      description: 'Software and technology has changed every aspect of the world we live in. At one extreme are the ‘mission critical’ applications.',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://youtu.be/6avJHaC3C2U?si=jC2BDiRMkg8hocBD',
      isVideo: true,
      sitename: "Youtube",
      must: true,
      tags: ["CS", "Programming", "Art Of Code"]

    },
    {
      title: 'Modern JavaScript Explained For Dinosaurs',
      description: 'great read on modern frontend development workflow, and if you are new to JavaScript or web development',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70',
      isVideo: false,
      sitename: "medium.com",
      must: true,
       tags: ["CS", "Article", "Javascript"]

    },
    {
      title: 'How to build a REST API with Node js & Express',
      description: 'This on ereally helped me a lot. A really comprehensive video on how to develop REST APIs By Mosh!',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://www.youtube.com/watch?v=pKd0Rpw7O48',
      isVideo: true,
      sitename: "Youtube",
      must: false,
       tags: ["CS", "Programming", "REST API", "Node/Express"]
    },
    {
      title: 'The mind behind Linux | TED',
      description: 'Linus Torvalds the creator of Linux, which helps power the Internet, and again with Gitn used by developers worldwide',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://www.youtube.com/watch?v=o8NPllzkFhE',
      isVideo: true,
      sitename: "Youtube",
      must: false,
       tags: ["Linux", "Programming", "Linus Torvalds"]
    },
    {
      title: 'Steve Jobs 2005 Commencement Speech',
      description: 'This video is very close to my heart, Steve Jobs 2005 Stanford Commencement Addres, definitely life altering, must watch',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://github.com/danishofcodes/GameWyre',
      isVideo: true,
      sitename: "Youtube",
      must:false,
       tags: ["CS", "Steve Jobs", "Stanford"]
    },
    {
      title: 'The Pragmatic Engineer by Gergely Orosz',
      description: 'Seriously amazing blog maintained by Gergely Orosz for Software Devs, Its without a doubt must follow  ',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://blog.pragmaticengineer.com/',
      isVideo: false,
      sitename: "pragmaticengineer",
      must: true,
       tags: ["CS", "Programming", "pragmaticengineer"]
    },
    {
      title: 'React Docs',
      description: 'React Docs are super handy, whenever I am stuck in react based problems its either stack overflow or React Docs',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://react.dev/',
      isVideo: false,
      sitename: "React Docs",
      must: false,
       tags: ["CS", "Programming", "React DOCS"]
    }
  ]