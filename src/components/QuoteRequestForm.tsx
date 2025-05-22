import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

interface QuoteRequestFormProps {
  productName?: string;
  productId?: string;
  onSubmit?: (formData: FormData) => void;
  onCancel?: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  product: string;
  quantity: string;
  requirements: string;
  agreeToTerms: boolean;
}

const QuoteRequestForm = ({
  productName = "Product",
  productId = "",
  onSubmit,
  onCancel,
}: QuoteRequestFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    product: productName || "",
    quantity: "",
    requirements: "",
    agreeToTerms: false,
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, quantity: value }));

    // Clear error when field is edited
    if (errors.quantity) {
      setErrors((prev) => ({ ...prev, quantity: undefined }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));

    // Clear error when field is edited
    if (errors.agreeToTerms) {
      setErrors((prev) => ({ ...prev, agreeToTerms: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.product.trim()) {
      newErrors.product = "Product name is required";
    }

    if (!formData.quantity) {
      newErrors.quantity = "Please select a quantity range";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      try {
        // If onSubmit prop is provided, call it with form data
        if (onSubmit) {
          onSubmit(formData);
        }
        setFormStatus("success");
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            company: "",
            phone: "",
            product: productName || "",
            quantity: "",
            requirements: "",
            agreeToTerms: false,
          });
          setFormStatus("idle");
        }, 3000);
      } catch (error) {
        setFormStatus("error");
      }
    }, 1500);
  };

  return (
    <Card className="w-full max-w-lg bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Request a Quote</CardTitle>
        <CardDescription>
          Fill out the form below to request a quote for{" "}
          {formData.product || "our products"}.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {formStatus === "success" && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Your quote request has been submitted successfully. Our team will
              contact you shortly.
            </AlertDescription>
          </Alert>
        )}

        {formStatus === "error" && (
          <Alert className="mb-6 bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              There was an error submitting your request. Please try again
              later.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={errors.fullName ? "border-red-500" : ""}
                disabled={formStatus === "submitting"}
              />
              {errors.fullName && (
                <p className="text-xs text-red-500">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@company.com"
                className={errors.email ? "border-red-500" : ""}
                disabled={formStatus === "submitting"}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company">
                Company <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className={errors.company ? "border-red-500" : ""}
                disabled={formStatus === "submitting"}
              />
              {errors.company && (
                <p className="text-xs text-red-500">{errors.company}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className={errors.phone ? "border-red-500" : ""}
                disabled={formStatus === "submitting"}
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="product">
              Product <span className="text-red-500">*</span>
            </Label>
            <Input
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="Product Name"
              className={errors.product ? "border-red-500" : ""}
              disabled={formStatus === "submitting" || !!productName}
            />
            {errors.product && (
              <p className="text-xs text-red-500">{errors.product}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">
              Estimated Quantity <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.quantity}
              onValueChange={handleSelectChange}
              disabled={formStatus === "submitting"}
            >
              <SelectTrigger
                className={errors.quantity ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select quantity range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 units</SelectItem>
                <SelectItem value="11-50">11-50 units</SelectItem>
                <SelectItem value="51-100">51-100 units</SelectItem>
                <SelectItem value="101-500">101-500 units</SelectItem>
                <SelectItem value="501+">501+ units</SelectItem>
              </SelectContent>
            </Select>
            {errors.quantity && (
              <p className="text-xs text-red-500">{errors.quantity}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Additional Requirements</Label>
            <Textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Please specify any special requirements or questions..."
              rows={4}
              disabled={formStatus === "submitting"}
            />
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={handleCheckboxChange}
              disabled={formStatus === "submitting"}
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="agreeToTerms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the terms and conditions{" "}
                <span className="text-red-500">*</span>
              </Label>
              {errors.agreeToTerms && (
                <p className="text-xs text-red-500">{errors.agreeToTerms}</p>
              )}
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between border-t p-6">
        {onCancel && (
          <Button
            variant="outline"
            onClick={onCancel}
            disabled={formStatus === "submitting"}
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={formStatus === "submitting" || formStatus === "success"}
          className={onCancel ? "" : "w-full"}
        >
          {formStatus === "submitting"
            ? "Submitting..."
            : "Submit Quote Request"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuoteRequestForm;
