"use client"
import { ConversationMessages, ConversationsRecords } from "@/lib/types"
import { createContext, useState, useContext, useEffect } from "react"
import { toast } from "react-toastify"
interface AppContextProps {
  conversationRecord: ConversationsRecords[]
  handleAddConversationRecord: (conversation: ConversationsRecords) => void
  handleDeleteConversationRecord: (conversationId: number) => void
  conversationMessage: ConversationMessages[]
  loading: boolean
  setLoading: (loading: boolean) => void
  authToken: string | null | undefined
  queryConversationMessage: (id: number) => void
  sendMessage: (message: string) => void
  chatLoading: boolean
}

const token =
  "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.JxNIEKBuzyqAMEVdiya6PfY8vYgrUunDVm2qM2drq1x-LUorcwa2jaa2ABsKJHdkmbFpwAZ23Pn6keSS3DvfzX2LhQOWt-rO.V7s5F30FjYsfBvyZvBSt1A.1SmNuCHdyas0x7i3OdhkpBZsY6GxSAl23HtK1Eq7U9n8hwnMCJrZitWn06BclGBHQfQ4lakW0w-ETV9jg2wzVMQUSGSNMul1eQEgWKpZmwMXIWvcG9AuBvCa_UvuZR3p_6j2IA_LKj9RZdGj8gXipMh3TYinmvBWieQ4hMr5OH4.cvjvrnLMpncZX7xAcxqAEeBTx8kwA-Bb0V7o1_xM_34"

const AppContext = createContext<AppContextProps | null>(null)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  //states
  const [conversationMessage, setConversationMessage] = useState<
    ConversationMessages[] | []
  >([])
  const [loading, setLoading] = useState(true)

  const [conversationRecord, setConversationRecord] = useState<
    ConversationsRecords[] | []
  >([])
  const [convoId, setConvoId] = useState<number | null>(null)
  const [chatLoading, setChatLoading] = useState(false)
  const [authToken, setAuthToken] = useState<string | null | undefined>(() => {
    if (typeof window !== "undefined") {
      return window.localStorage?.getItem("authToken")
    }
  })

  console.log(authToken)
  //Functions

  //Add records
  const handleAddConversationRecord = (conversation: ConversationsRecords) => {
    setConversationRecord((previous) => [...previous, conversation])
  }

  //Delete records
  const handleDeleteConversationRecord = (conversationId: number) => {
    console.log(conversationId)
    setConversationRecord((previous) =>
      previous.filter((c) => c.id !== conversationId)
    )
  }

  // console.log(process.env.BASE_URL)
  // console.log(process.env.AUTH_URL)

  //send message
  const sendMessage = async (message: string) => {
    if (!convoId) {
      console.log("hello")
      return toast.error("Please select a conversation to start chatting")
    }
    const messageBody = {
      conversation_id: convoId!,
      id: Math.floor(Math.random() * 1000)!,
      created_at: new Date(),
      message: message,
      content: message,
      user_id: convoId,
    }
    console.log(message)

    setConversationMessage((previous) => [...previous, messageBody])
    setChatLoading(true)
    try {
      const response = await fetch(
        `https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            conversation_id: messageBody.conversation_id,
            message: messageBody.message,
          }),
        }
      )
      const data = await response.json()

      setConversationMessage(() => [...data])
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      setChatLoading(false)
    }
  }

  //Get conversation message by conversation Id
  const queryConversationMessage = async (id: number) => {
    setConvoId(id)
    console.log(id)

    try {
      const response = await fetch(
        `https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      const data = await response.json()
      console.log(data)
      setConversationMessage(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  //Fexth conversation records
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await fetch(
          "https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
        const data = await response.json()
        setConversationRecord(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchConversations()
  }, [])

  console.log(conversationRecord)
  return (
    <AppContext.Provider
      value={{
        sendMessage,
        chatLoading,
        conversationMessage,
        queryConversationMessage,
        loading,
        setLoading,
        handleAddConversationRecord,
        handleDeleteConversationRecord,
        conversationRecord,
        authToken,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//Define a custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider")
  }
  return context
}

export default AppProvider
