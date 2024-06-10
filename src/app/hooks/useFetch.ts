// export const useFetch = (url: string) => {
//   const [data, setData] = React.useState(null)
//   const [loading, setLoading] = React.useState(true)
//   const [error, setError] = React.useState(null)

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(url)
//         const json = await res.json()
//         setData(json)
//         setLoading(false)
//       } catch (error) {
//         setError(error)
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [url])

//   return { data, loading, error }
// }