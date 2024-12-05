"use client"

import { useState } from 'react'
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Camera, Mic, Monitor, CheckCircle, XCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PermissionsCheck() {
  const router=useRouter()
  const [permissions,setPermissions]=useState({
    camera: false,
    microphone: false,
    screen: false
  })

  const checkCamera=async()=>{
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      stream.getTracks().forEach(track => track.stop())
      setPermissions(prev => ({ ...prev, camera: true }))
    } catch(e){
      console.error('Camera permission denied:',e)
    }
  }

  const checkMicrophone=async()=>{
    try {
      const stream=await navigator.mediaDevices.getUserMedia({ 
        audio:true 
      })
      stream.getTracks().forEach(track=>track.stop())
      setPermissions(prev => ({ ...prev, microphone: true }))
    }catch(e){
      console.error('Microphone permission denied:', e)
    }
  }

  const checkScreenShare = async () => {
    try {
      const stream=await navigator.mediaDevices.getDisplayMedia()
      stream.getTracks().forEach(track => track.stop())
      setPermissions(prev => ({ ...prev, screen: true }))
    }catch(e) {
      console.error('Screen share permission denied:',e)
    }
  }

  const allPermissionsGranted=Object.values(permissions).every(Boolean)

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-[#1e2538] border-none p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Check Permissions</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-[#252b3b] rounded-lg">
            <div className="flex items-center gap-4">
              <Camera className="w-6 h-6" />
              <span>Camera Access</span>
            </div>
            <div className="flex items-center gap-2">
              {permissions.camera? 
                <CheckCircle className="w-6 h-6 text-green-500"/>: 
                <XCircle className="w-6 h-6 text-red-500"/>
              }
              <Button onClick={checkCamera} variant="outline">
                Check Camera
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#252b3b] rounded-lg">
            <div className="flex items-center gap-4">
              <Mic className="w-6 h-6"/>
              <span>Microphone Access</span>
            </div>
            <div className="flex items-center gap-2">
              {permissions.microphone ? 
                <CheckCircle className="w-6 h-6 text-green-500"/> : 
                <XCircle className="w-6 h-6 text-red-500"/>
              }
              <Button onClick={checkMicrophone} variant="outline">
                Check Microphone
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#252b3b] rounded-lg">
            <div className="flex items-center gap-4">
              <Monitor className="w-6 h-6" />
              <span>Screen Share Access</span>
            </div>
            <div className="flex items-center gap-2">
              {permissions.screen ? 
                <CheckCircle className="w-6 h-6 text-green-500" /> : 
                <XCircle className="w-6 h-6 text-red-500" />
              }
              <Button onClick={checkScreenShare} variant="outline">
                Check Screen Share
              </Button>
            </div>
          </div>

          <Button 
            className="w-full bg-[#7c3aed] hover:bg-[#6d28d9]"
            disabled={!allPermissionsGranted}
            onClick={() => router.push('/interview')}
          >
            Continue to Interview
          </Button>
        </div>
      </Card>
    </div>
  )
}

