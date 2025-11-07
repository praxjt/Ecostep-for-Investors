import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function Fields() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
               <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name of the Company
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Green Earth Ltd."
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name of the event
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Trail of Hope"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
 Target to offset in kgco₂
                </FieldLabel>
                <Input
id="target-offset"
  type="numeric"
  placeholder="10"
  inputMode="numeric"  
  required


                />
                <FieldDescription>
                </FieldDescription>
              </Field>
                <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
               Amount needed to be paid 

                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1 eth"
                  required
                />
                <FieldDescription>
                </FieldDescription>
              </Field>
             
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
        
        
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Descripiton
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Describe the purpose"
                  className="resize-none"
                    required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
