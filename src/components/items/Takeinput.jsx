import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({property}) {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">{property['lable']}</Label>
      <Input type={property['type']} id={property['id']} placeholder={property['placeholder']}/>
    </div>
  )
}