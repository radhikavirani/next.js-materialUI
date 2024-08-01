
import Header from "@/componets/Header"
import Publish_hero from "@/componets/Publish_hero"
import Runtime from "@/componets/Runtime"
import Runtime1 from "@/componets/Runtime1"
import Runtime2 from "@/componets/Runtime2"
import Runtimebox from "@/componets/Runtimebox"
import Runtimefooter from "@/componets/Runtimefooter"

const App = () => {
  return(
    <div className="page-bg">
      <Header/>
      <Publish_hero/>
      <Runtime/>
      <Runtime1/>
      <Runtime2/>
      <Runtimebox/>
      <Runtimefooter/>
    </div>
  )
}

export default App