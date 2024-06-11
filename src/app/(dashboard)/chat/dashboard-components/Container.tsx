import Header from "./Header"
import ConversationRecordsHolder from "./ConversationRecordsHolder"
import TextArea from "./TextArea"
const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>
        <ConversationRecordsHolder />
        <div
          className="relative md:px-0 lg:px-0 lg:left-[250px] left-0 top-[4.5rem] sm:top-14 min-h-[72vh] sm:min-h-[79vh] mb-40 sm:mb-[7rem] lg:w-[calc(100%-250px)] w-[calc(100%-0px)]
   bg-white rounded  shadow-md mx-0 lg:mx-6"
        >
          <div className={`drop-shadow-lg mb-10 `}>{children}</div>
          <TextArea />
        </div>
      </div>
    </>
  )
}

export default Container
