import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
 
export function GenderRadio({item1,item2,item3}) {
  return (
    <RadioGroup defaultValue={item1}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">{item1}</Label>
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">{item2}</Label>
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">{item3}</Label>
      </div>
    </RadioGroup>
  )
}