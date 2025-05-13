import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import TaskBoard from "./task/TaskBoard"


function App() {

  return (
    <>
      <Header/>
      <div className="flex flex-col justify-center items-center">
         <Banner/>
        <TaskBoard/>
      </div>
      <Footer/>
    </>
  )
}

export default App
