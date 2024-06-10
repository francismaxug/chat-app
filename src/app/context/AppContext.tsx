"use client"
import { AllConversations } from "@/lib/types"
import { createContext, useState, useContext, useEffect } from "react"
interface AppContextProps {
  conversations: AllConversations[]
  handleAddConversationRecord: (conversation: AllConversations) => void
  handleDeleteConversationRecord: (conversationId: number) => void
  message: string
  handleSetMessage: (message: string) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  authToken: string | null | undefined
}

const token =
  "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.JxNIEKBuzyqAMEVdiya6PfY8vYgrUunDVm2qM2drq1x-LUorcwa2jaa2ABsKJHdkmbFpwAZ23Pn6keSS3DvfzX2LhQOWt-rO.V7s5F30FjYsfBvyZvBSt1A.1SmNuCHdyas0x7i3OdhkpBZsY6GxSAl23HtK1Eq7U9n8hwnMCJrZitWn06BclGBHQfQ4lakW0w-ETV9jg2wzVMQUSGSNMul1eQEgWKpZmwMXIWvcG9AuBvCa_UvuZR3p_6j2IA_LKj9RZdGj8gXipMh3TYinmvBWieQ4hMr5OH4.cvjvrnLMpncZX7xAcxqAEeBTx8kwA-Bb0V7o1_xM_34"

const AppContext = createContext<AppContextProps | null>(null)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const [conversations, setConversations] = useState<AllConversations[]>([])
  const [authToken, setAuthToken] = useState<string | null | undefined>(() => {
    if (typeof window !== "undefined") {
      return window?.localStorage?.getItem("authToken")
    }
  })

  // console.log(authToken)

  const handleAddConversationRecord = (conversation: AllConversations) => {
    setConversations((previous) => [...previous, conversation])
  }
  const handleDeleteConversationRecord = (conversationId: number) => {
    console.log(conversationId)
    setConversations((previous) =>
      previous.filter((c) => c.id !== conversationId)
    )
  }

  const handleSetMessage = (message: string) => {
    setMessage(message)
  }

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await fetch(
          "https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        const data = await response.json()
        // console.log(data)
        setConversations(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchConversations()
  }, [])

  console.log(conversations)
  return (
    <AppContext.Provider
      value={{
        message,
        handleSetMessage,
        loading,
        setLoading,
        handleAddConversationRecord,
        handleDeleteConversationRecord,
        conversations,
        authToken,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider")
  }
  return context
}

export default AppProvider
