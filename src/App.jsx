import MainSection from './components/MainSection'
import reactIcon from './assets/react.svg'
import Navbar from './components/Navbar'
function App() {
 
  const projects = [
    {
      projectname: 'GameWyre ',
      description: 'GameWyre An E-commerce Platform for Gaming Products (Made with React JS), with filters , easy search and add to cart for quick checkout ',
      imgKey: reactIcon, // Replace with your image file name or URL
      githublink : 'https://github.com/danishofcodes/GameWyre'
    },
    {
      projectname: 'Spotify-Clone',
      description: 'Spotify Clone Made with Pure HTML5 CSS3. Thinking about rebuilding this in React afterwards.',
      imgKey: reactIcon, // Replace with your image file name or URL
      githublink : 'https://github.com/danishofcodes/Spotify-Clone'

    },

    {
      projectname: 'MetroCity-AQI',
      description: 'Visualize Air Quality Index of 6 major Indian cities, Compare AQI, calculate yearly averages. Interactive graphs for Insightful analysis.',
      imgKey: reactIcon, // Replace with your image file name or URL
      githublink : 'https://github.com/danishofcodes/metrocityAQI'
    },

  ];


  return (
    <>
    <Navbar/>
     <MainSection projects={projects}/> 
     </>
  )
}

export default App
