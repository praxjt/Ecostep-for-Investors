import { useState,useEffect } from "react"
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
import { useToast } from '@/hooks/usetoast';
import { ErrorDescription } from "ethers"


export function Fields() {
const [formData, setFormData] = useState({
    companyName: "",
    eventName: "",
    targetOffset: "",
    amountToPay: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
   const [isStored, setIsStored] = useState(false);
   
const { notifications, success, error, removeToast } = useToast();



useEffect(() => {
 const fetchCompany = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/getCompanyName", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "x-user-address": localStorage.getItem("wallet"),
        },
      });
      const data = await res.json();
      if (data.companyName) {
        setFormData(prev => ({ ...prev, companyName: data.companyName }));
        setIsStored(true); 
      }
    } catch (err) {
      console.error("Failed to fetch company:", err);
    }
  };

  fetchCompany();

  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const isFormValid = Object.values(formData).every((v) => v.trim() !== "");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    console.log("Submitting form data:", formData);

  

    try {
      const response = await fetch("http://localhost:3001/api/createEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "x-user-address": localStorage.getItem("wallet"),
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("companyName",formData.companyName);
success("event created successfully.");
        setFormData({
          eventName: "",
          targetOffset: "",
          amountToPay: "",
          description: "",
        });
      } else {
        error(" Try again later");
      }
    } catch (err) {
      console.error(err);
      error( "Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  
  };
  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
               <Field>
                <FieldLabel htmlFor="companyName">
                  Name of the Company
                </FieldLabel>
                <Input
                  id="companyName"
                  placeholder="Green Earth Ltd."
                  value={formData.companyName}
                  disabled={isStored}

                     onChange={(e) =>
    setFormData(prev => ({ ...prev, companyName: e.target.value }))
  }

                   className={isStored ? "bg-gray-200 cursor-not-allowed" : "bg-white"}

                  
                />
               
              </Field>
              <Field>
                <FieldLabel htmlFor="eventName">
                  Name of the event
                </FieldLabel>
                <Input
                  id="eventName"
                  placeholder="Trail of Hope"
                  value={formData.eventName}
                  onChange={handleChange}
                  
                />
               
              </Field>
              <Field>
                <FieldLabel htmlFor="targetOffset">
 Target to offset in kgco₂
                </FieldLabel>
                <Input
id="targetOffset"
  // type="number"
  placeholder="10"
  value={formData.targetOffset}
onChange={handleChange}
 onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
 onPaste={(e) => e.preventDefault()}

  inputMode="number"  
  


                />
                <FieldDescription>
                </FieldDescription>

             
              </Field>
                <Field>
                <FieldLabel htmlFor="amountToPay">
               Amount needed to be paid 

                </FieldLabel>
                <Input
                  id="amountToPay"
                  placeholder="1 eth"
                  value={formData.amountToPay}
                  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                  onPaste={(e) => e.preventDefault()}
                  onChange={handleChange}
                  inputMode="number"

                  
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
                <FieldLabel htmlFor="description">
                  Descripiton
                </FieldLabel>
                <Textarea
                  id="description"
                  placeholder="Describe the purpose"
                  className="resize-none"
                   value={formData.description}
                  onChange={handleChange}
                    
                />
            

              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
                     <Button type="submit" disabled={loading || !isFormValid}>
              {loading  ? "Submitting..." : "Submit"}
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={() =>
                setFormData({
                  companyName: "",
                  eventName: "",
                  targetOffset: "",
                  amountToPay: "",
                  description: "",
                })
              }
            >
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
