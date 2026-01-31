"use client";

import { useState, useRef } from "react";
import { submitContactForm } from "@/app/actions/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function PulseForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Only collapse if focus moves outside the form entirely
    if (!formRef.current?.contains(e.relatedTarget as Node)) {
      // Keep expanded if any field has content
      const formData = new FormData(formRef.current!);
      const hasContent =
        formData.get("email") || formData.get("projectDetails");
      if (!hasContent) {
        setIsExpanded(false);
      }
    }
  };

  const handleSubmit = async (formData: FormData) => {
    setStatus("submitting");
    setErrorMessage("");

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
      setIsExpanded(false);
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="pulse-form-container bg-background-secondary/80 border border-accent-primary/50 rounded-lg p-6 neon-glow max-w-md mx-auto">
        <div className="text-center">
          <svg
            className="w-12 h-12 text-accent-primary mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Request Sent!
          </h3>
          <p className="text-subtle">
            We&apos;ll get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      onBlur={handleBlur}
      className={`pulse-form-container bg-background-secondary/80 border border-muted rounded-lg overflow-hidden neon-glow neon-glow-hover max-w-md mx-auto ${
        isExpanded ? "p-6" : "p-2"
      }`}
    >
      <div className="flex flex-col gap-4">
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email to start a project..."
          required
          onFocus={handleFocus}
          className={`w-full bg-transparent border-none outline-none text-text-primary placeholder:text-muted ${
            isExpanded ? "text-base" : "text-base py-2 px-2"
          }`}
        />

        {/* Expanded Fields */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            <div className="h-px bg-muted/50" />
            <textarea
              name="projectDetails"
              placeholder="What would you like to create?"
              rows={4}
              className="w-full bg-background-primary/50 border border-muted/50 rounded-lg p-3 text-text-primary placeholder:text-muted outline-none focus:border-accent-primary/50 resize-none"
            />

            {status === "error" && (
              <p className="text-accent-secondary text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-accent-primary hover:bg-accent-secondary text-background-primary font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Send Request"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
