import MainSection from './components/MainSection'
import reactIcon from './assets/react.svg'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
function App() {

  const projects = [
    {
      projectname: 'GameWyre ',
      description: 'GameWyre An E-commerce Platform for Gaming Products (Made with React JS), with filters , easy search and add to cart for quick checkout ',
      imgKey: reactIcon, // Replace with your image file name or URL,
      githublink: 'https://github.com/danishofcodes/GameWyre',
      viewonbrowser: 'https://danishofcodes.github.io/GameWyre/'
    },
    {
      projectname: 'Spotify-Clone',
      description: 'Spotify Clone Made with Pure HTML5 CSS3. Thinking about rebuilding this in React afterwards.',
      imgKey: reactIcon, // Replace with your image file name or URL
      githublink: 'https://github.com/danishofcodes/Spotify-Clone',
      viewonbrowser: 'https://danishofcodes.github.io/Spotify-Clone/'

    },

    {
      projectname: 'MetroCity-AQI',
      description: 'Visualize Air Quality Index of 6 major Indian cities, Compare AQI, calculate yearly averages. Interactive graphs for Insightful analysis.',
      imgKey: reactIcon, // Replace with your image file name or URL
      githublink: 'https://github.com/danishofcodes/metrocityAQI',
      viewonbrowser: 'https://danishofcodes.github.io/metrocityAQI/'
    },

    {
      projectname: 'MetroCity-AQI',
      description: 'Visualize Air Quality Index of 6 major Indian cities, Compare AQI, calculate yearly averages. Interactive graphs for Insightful analysis.',
      imgKey: reactIcon, // Replace with your image file name or URL
      githublink: 'https://github.com/danishofcodes/metrocityAQI',
      viewonbrowser: 'https://danishofcodes.github.io/metrocityAQI/'
    },

    {
      projectname: 'MetroCity-AQI',
      description: 'Visualize Air Quality Index of 6 major Indian cities, Compare AQI, calculate yearly averages. Interactive graphs for Insightful analysis.',
      imgKey: reactIcon, // Replace with your image file name or URL
      githublink: 'https://github.com/danishofcodes/metrocityAQI',
      viewonbrowser: 'https://danishofcodes.github.io/metrocityAQI/'
    }
  ];



  const blogs = [
    {
      title: 'CS50',
      description: "This is CS50, Harvard University's introduction to the intellectual enterprises of computer science and the art of programming.",
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://youtube.com/playlist?list=PLhQjrBD2T381WAHyx1pq-sBfykqMBI7V4&si=KTUXdgSCsXqFqP-Y',
      isVideo: true,
      sitename: "Youtube"
    },
    {
      title: 'The Art of Code - Dylan Beattie',
      description: 'Software and technology has changed every aspect of the world we live in. At one extreme are the ‘mission critical’ applications.',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://youtu.be/6avJHaC3C2U?si=jC2BDiRMkg8hocBD',
      isVideo: true,
      sitename: "Youtube"
    },
    {
      title: 'Blog Example',
      description: ' Blog with filters , easy search and add to cart for quick checkout ',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://github.com/danishofcodes/GameWyre',
      isVideo: false,
      sitename: "blog"
    },
    {
      title: 'Blog Example',
      description: ' Blog with filters , easy search and add to cart for quick checkout ',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://github.com/danishofcodes/GameWyre',
      isVideo: false,
      sitename: "blog"
    },
    {
      title: 'Blog Example',
      description: ' Blog with filters , easy search and add to cart for quick checkout ',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://github.com/danishofcodes/GameWyre',
      isVideo: true,
      sitename: "Youtube"
    },
    {
      title: 'Blog Example',
      description: ' Blog with filters , easy search and add to cart for quick checkout ',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://github.com/danishofcodes/GameWyre',
      isVideo: true,
      sitename: "Youtube"
    },
    {
      title: 'Blog Example',
      description: ' Blog with filters , easy search and add to cart for quick checkout ',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://github.com/danishofcodes/GameWyre',
      isVideo: false,
      sitename: "blog"
    },
    {
      title: 'Blog Example',
      description: ' Blog with filters , easy search and add to cart for quick checkout ',
      imgKey: reactIcon, // Replace with your image file name or URL
      hyperlink: 'https://github.com/danishofcodes/GameWyre',
      isVideo: false,
      sitename: "blog"
    }
  ]


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MainSection projects={projects} blogs={blogs} />
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
