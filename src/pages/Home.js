import { useEffect, useState } from "react"
import supaClient from '../supaClient'
import Smoothie from "../components/Smoothie"

const Home = () => {

  const [error, setError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error} = await supaClient
      .from('smoothies')
      .select()

      error ? setError("Could not fetch smoothies") : setSmoothies(data)
    }

    fetchSmoothies()
  }, [])
  
  return (
    <div className="page home">
      {error && <p>{error}</p>}
      <div className="smoothie-grid">
      {smoothies && smoothies.map(smoothie => (
        <Smoothie
            key={smoothie.id}
            title={smoothie.title}
            method={smoothie.method}
            rating={smoothie.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default Home