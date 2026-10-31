export type Enquiry = { name: string; email: string; phone: string; service: string; budget: string; message: string; method: string };

export function validateEnquiry(f: Enquiry) {
  const e: Partial<Record<keyof Enquiry, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.phone.replace(/\D/g, "").length < 9) e.phone = "Please enter a valid phone number.";
  if (!f.service) e.service = "Please choose a service.";
  if (f.message.trim().length < 10) e.message = "Please tell us a little about your project.";
  return e;
}
