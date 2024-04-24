import Showcase from "../Showcase/Showcase"
// import Fruits from "../Fruite/Fruite"
import Container from "../Slidder/Fruiteslidder"
import Menu from "../Menu/menu"


const Home = () => {
  return (
    <div className='flex w-full h-auto bg-gray-100 flex-col items-center justify-center '>
      <Showcase/> 
      {/* <Fruits/> */}
      <Container/>
      <Menu/>
     

    </div>

  )
}

export default Home