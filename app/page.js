"use client"
import { useEffect, useState } from "react";
import axios from "axios"

export default function Home() {
  const getIp = async () => {
    try {
      const response = await axios.get("https://api.ipify.org/?format=json")
      if (response) {
        const {ip} = response.data
      
      if (ip){
          const postreq = await fetch('api/addIp', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ip})
        })
      }}
    } catch (error) {
    }
  }
  useEffect(()=>{
    getIp()
  },[])
  return (
    <main>
      <h1>Giiigity</h1>
    </main>
  );
}
