
import MainItemsPage from "./MainItemsPage"
import DashBoardLeftFixedSideBar from "./DashBoardLeftFixedSideBar"



const MainBackgroundHolder = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="">
        <div>
          <DashBoardLeftFixedSideBar />
        </div>
        <MainItemsPage>{children}</MainItemsPage>
        {/* <div className=" fixed left-[24rem] bottom-3 border">Heloooo</div> */}
      </div>
    </>
  )
}

export default MainBackgroundHolder
