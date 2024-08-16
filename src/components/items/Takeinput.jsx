import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function InputWithLabel({property}) {
  const [intpVal,setInpVal] = useState('');
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">{property['lable']}</Label>
      <Input 
      type={property['type']} 
      id={property['name']} 
      placeholder={property['placeholder']} 
      value = {intpVal}
      onChange = {(e) => setInpVal(e.target.value)}
      />
    </div>
  )
}