import { IconTrendingDown, IconTrendingUp,IconLeaf,IconCircleDottedLetterC,IconCircleDashedCheck,IconBrandAsana,IconCurrencyRupee } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards({dashboardData} ) {
  console.log("sectioncards ",dashboardData)
  // const {totalInvested}=dashboardData
  return (
    <>
     {dashboardData && (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardDescription>Total Amount Invested</CardDescription>
          <CardTitle className="flex items-baseline gap-1 text-2xl font-semibold">
  <span className="leading-none">{dashboardData.totalInvested}</span>
  <span className="text-sm text-muted-foreground">MATIC</span>
</CardTitle>

          <CardAction>
             <Badge variant="outline">
          <IconLeaf className="!w-5 !h-5"  />

             </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1.5 text-sm">
  <div className="flex items-baseline text-muted-foreground gap-1">
    <span className="text-xl">{dashboardData.thisMonthInvested}</span> 
    <span className="text-sm">MATIC</span>
    this month

  </div>
</CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Campigns</CardDescription>
          <CardTitle> Toatal {dashboardData.totalCampaigns} </CardTitle>
          <CardAction>
                         <Badge variant="outline">
           <IconBrandAsana className="!w-5 !h-5"/>
           </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1.5 text-sm">
          
          <div className="text-muted-foreground">{dashboardData.activeCampaigns} Active </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Co<sub>2</sub> offset achieved</CardDescription>
          <CardTitle>{dashboardData.co2Achieved} kgco<sub>2</sub></CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconCircleDottedLetterC className="!w-5 !h-5" />
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1.5 text-sm">
        
          <div className="text-muted-foreground">Target: {dashboardData.totalTargetToOffset} kgco<sub>2</sub></div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Certificate Earned</CardDescription>
          <CardTitle>{dashboardData.certificateEarned}</CardTitle>
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
     )}

      {!dashboardData && (
        <div className="text-center text-muted-foreground py-6">
          Loading dashboard data...
        </div>
      )}
    </>

  )
}
