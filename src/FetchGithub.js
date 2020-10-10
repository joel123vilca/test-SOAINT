import React, {useState, useEffect} from 'react'

const FetchGithub = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
      getData();
    },[])

    const getData = async () => {
      let res = await fetch('https://api.github.com/users/workshopsjsmvd')
      let data = await res.json()
      const {name, location, avatar_url} = data
      setLocation(location)
      setName(name)
      setAvatar(avatar_url)
    }

    return (
      <>
        <img src={avatar} className="App-logo" alt="logo" />
        <h1>{name}</h1>
        <h2>{location}</h2>
      </>
    )
} 

export default FetchGithub;