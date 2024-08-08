import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function SelectD({ items , value , onChange,initalVal }) {
  return (
    <Select>
      <SelectTrigger className="w-[70px]">
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{value}</SelectLabel>
          {items.map((val) => (
              <SelectItem key={val} value={val} onclick={() => onChange(val)}>{val}</SelectItem>
          ))};
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}