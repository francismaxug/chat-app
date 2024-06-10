

import MainBackgroundHolder from "./MainBackgroundHolder"
import Header from "./Header"



const Demo = ({ children }: { children?: React.ReactNode }) => {
  
  return (
    <>
      <div className={`  dark:bg-gray-900  `}>
        <Header />
        <MainBackgroundHolder>{children}</MainBackgroundHolder>
      </div>
    </>
  )
}

export default Demo
