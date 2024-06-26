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
 
export function SelectD({items,value}) {
  return (
    <Select>
      <SelectTrigger className="w-[70px]">
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{value}</SelectLabel>
          {items.map((date) => (
              <SelectItem value={value}>{date}</SelectItem>
          ))};
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}