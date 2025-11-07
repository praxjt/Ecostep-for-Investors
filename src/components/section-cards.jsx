import { IconTrendingDown, IconTrendingUp,IconLeaf,IconCircleDottedLetterC,IconCircleDashedCheck,IconBrandAsana } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardDescription>Total Amount Invested</CardDescription>
          <CardTitle>Rs 1,250.00</CardTitle>
          <CardAction>
             <Badge variant="outline">
          <IconLeaf className="!w-5 !h-5"  />

             </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1.5 text-sm">
            {/* Percentage Change=Previous Value/Current Value−Previous Value​×100 */}
        
          <div className="text-muted-foreground">+12.5%  this month</div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Campigns</CardDescription>
          <CardTitle> Toatal 12  </CardTitle>
          <CardAction>
                         <Badge variant="outline">
           <IconBrandAsana className="!w-5 !h-5"/>
           </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1.5 text-sm">
          
          <div className="text-muted-foreground">8 Active </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Co<sub>2</sub> offset achieved</CardDescription>
          <CardTitle>10 kgco<sub>2</sub></CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconCircleDottedLetterC className="!w-5 !h-5" />
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1.5 text-sm">
        
          <div className="text-muted-foreground">Target: 20 kgco<sub>2</sub></div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Certificate Earned</CardDescription>
          <CardTitle>12</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconCircleDashedCheck className="!w-5 !h-5" /> Verified
            </Badge>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            Steady performance increase <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter> */}
      </Card>
    </div>
  )
}
