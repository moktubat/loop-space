"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { BREAKPOINTS, COLORS, FONT } from "@/styles/variables";

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(12, 13, 18, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const ModalContainer = styled.div`
  position: relative;
  background: ${COLORS.bgDark};
  color: ${COLORS.white};
  width: 100%;
  max-width: 680px;
  max-height: 92vh;
  overflow-y: auto;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 24px 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${COLORS.white};
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: ${COLORS.brandPink};
    border-color: ${COLORS.brandPink};
  }
`;

const Header = styled.div`
  margin-bottom: 32px;
  padding-right: 40px;

  h2 {
    font-family: ${FONT.helvetica};
    font-size: 36px;
    font-weight: 400;
    line-height: 1;
    margin: 0 0 12px;
    text-transform: uppercase;
    letter-spacing: -1px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 28px;
    }
  }

  p {
    font-family: ${FONT.urbanist};
    font-size: 16px;
    color: ${COLORS.subtle};
    margin: 0;
  }

  strong {
    color: ${COLORS.white};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

const Label = styled.label`
  font-family: ${FONT.urbanist};
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.subtle};
`;

const fieldBase = `
  background: transparent;
  padding: 12px 16px;
  color: #fff;
  font-family: var(--font-urbanist), "Urbanist", sans-serif;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
`;

const Input = styled.input<{ $error?: boolean }>`
  ${fieldBase}
  border: 1px solid ${({ $error }) => ($error ? "#f04438" : "rgba(255, 255, 255, 0.15)")};

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  &:focus {
    border-color: ${COLORS.brandPink};
  }
`;

const Select = styled.select<{ $error?: boolean }>`
  ${fieldBase}
  border: 1px solid ${({ $error }) => ($error ? "#f04438" : "rgba(255, 255, 255, 0.15)")};
  cursor: pointer;

  &:focus {
    border-color: ${COLORS.brandPink};
  }
  option {
    background: ${COLORS.bgDark};
    color: ${COLORS.white};
  }
`;

const ErrorText = styled.span`
  font-family: ${FONT.urbanist};
  font-size: 13px;
  color: #ff7a70;
`;

const FileUploadWrapper = styled.div<{ $error?: boolean }>`
  position: relative;
  border: 1px dashed ${({ $error }) => ($error ? "#f04438" : "rgba(255, 255, 255, 0.25)")};
  padding: 12px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${COLORS.brandPink};
  }
`;

const FileText = styled.span<{ $hasFile: boolean }>`
  font-family: ${FONT.urbanist};
  font-size: 14px;
  color: ${({ $hasFile }) => ($hasFile ? COLORS.white : "rgba(255, 255, 255, 0.5)")};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BrowseButton = styled.span`
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 4px;
  font-family: ${FONT.urbanist};
  font-size: 12px;
  font-weight: 600;
  color: ${COLORS.white};
`;

const HiddenFileInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 8px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column-reverse;
  }
`;

const CancelButton = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${COLORS.white};
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  background: ${COLORS.brandPink};
  border: 2px solid #f8bdd6;
  border-bottom-width: 4px;
  color: ${COLORS.white};
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: ${COLORS.brandPinkHover};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 24px 0 8px;

  .tick {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: ${COLORS.brandPink};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin: 0;
    font-family: ${FONT.helvetica};
    font-weight: 400;
    font-size: 36px;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  p {
    margin: 0;
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.6;
    color: ${COLORS.subtle};
  }
`;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface ApplyFormInputs {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  position: string;
  resume: FileList;
}

interface CareerApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

const POSITIONS = ["Interior Designer", "Project Manager", "3D Visualizer"];

const isUrl = (v: string) => /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(v.trim());

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const CareerApplyModal = ({ isOpen, onClose, jobTitle }: CareerApplyModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormInputs>({
    defaultValues: { position: jobTitle || POSITIONS[0] },
  });

  /* Needed so the portal only renders on the client */
  useEffect(() => setMounted(true), []);

  /* Fresh form every time the modal opens, preselecting the current job */
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      reset({ position: jobTitle || POSITIONS[0] });
    }
  }, [isOpen, jobTitle, reset]);

  /* Lock scroll + close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const resumeFile = watch("resume")?.[0];

  const onSubmit = async (data: ApplyFormInputs) => {
    /* TODO: replace with a real API call (FormData for the resume file) */
    const payload = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "resume") payload.append("resume", (value as FileList)[0]);
      else payload.append(key, value as string);
    });
    await new Promise((r) => setTimeout(r, 600));
    console.log("Application submitted:", Object.fromEntries(payload.entries()));
    setSubmitted(true);
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <Overlay onClick={onClose} role="presentation">
      <ModalContainer
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-title"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton type="button" onClick={onClose} aria-label="Close">
          ×
        </CloseButton>

        {submitted ? (
          <Success>
            <div className="tick">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 id="apply-title">Application sent!</h2>
            <p>
              Thanks for applying for <strong>{watch("position")}</strong>. Our team will review
              your portfolio and get back to you soon.
            </p>
            <SubmitButton type="button" onClick={onClose}>
              Close
            </SubmitButton>
          </Success>
        ) : (
          <>
            <Header>
              <h2 id="apply-title">Join Our Team!</h2>
              <p>
                Applying for <strong>{jobTitle || "a position"}</strong>. Fill in your details below.
              </p>
            </Header>

            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Row>
                <FieldGroup>
                  <Label htmlFor="apply-name">Full Name*</Label>
                  <Input
                    id="apply-name"
                    placeholder="John Doe"
                    $error={!!errors.name}
                    {...register("name", { required: "Please enter your name" })}
                  />
                  {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                </FieldGroup>

                <FieldGroup>
                  <Label htmlFor="apply-email">Email*</Label>
                  <Input
                    id="apply-email"
                    type="email"
                    placeholder="johndoe@email.com"
                    $error={!!errors.email}
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                    })}
                  />
                  {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </FieldGroup>
              </Row>

              <Row>
                <FieldGroup>
                  <Label htmlFor="apply-phone">Phone Number*</Label>
                  <Input
                    id="apply-phone"
                    placeholder="+880"
                    $error={!!errors.phone}
                    {...register("phone", {
                      required: "Please enter your phone number",
                      minLength: { value: 7, message: "Enter a valid phone number" },
                    })}
                  />
                  {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
                </FieldGroup>

                <FieldGroup>
                  <Label htmlFor="apply-linkedin">LinkedIn Profile*</Label>
                  <Input
                    id="apply-linkedin"
                    placeholder="linkedin.com/in/username"
                    $error={!!errors.linkedin}
                    {...register("linkedin", {
                      required: "Please add your LinkedIn URL",
                      validate: (v) => isUrl(v) || "Enter a valid URL",
                    })}
                  />
                  {errors.linkedin && <ErrorText>{errors.linkedin.message}</ErrorText>}
                </FieldGroup>
              </Row>

              <FieldGroup>
                <Label htmlFor="apply-portfolio">Portfolio URL*</Label>
                <Input
                  id="apply-portfolio"
                  placeholder="https://yourportfolio.com"
                  $error={!!errors.portfolio}
                  {...register("portfolio", {
                    required: "Please add your portfolio URL",
                    validate: (v) => isUrl(v) || "Enter a valid URL",
                  })}
                />
                {errors.portfolio && <ErrorText>{errors.portfolio.message}</ErrorText>}
              </FieldGroup>

              <Row>
                <FieldGroup>
                  <Label htmlFor="apply-position">Position Applied For*</Label>
                  <Select
                    id="apply-position"
                    $error={!!errors.position}
                    {...register("position", { required: true })}
                  >
                    {POSITIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </Select>
                </FieldGroup>

                <FieldGroup>
                  <Label>Upload Resume*</Label>
                  <FileUploadWrapper $error={!!errors.resume}>
                    <FileText $hasFile={!!resumeFile}>
                      {resumeFile ? resumeFile.name : "Drop your file or browse"}
                    </FileText>
                    <BrowseButton>Browse</BrowseButton>
                    <HiddenFileInput
                      type="file"
                      accept=".pdf,.doc,.docx"
                      {...register("resume", {
                        validate: (files) =>
                          (files && files.length > 0) || "Please upload your resume",
                      })}
                    />
                  </FileUploadWrapper>
                  {errors.resume && <ErrorText>{errors.resume.message as string}</ErrorText>}
                </FieldGroup>
              </Row>

              <ButtonRow>
                <CancelButton type="button" onClick={onClose}>
                  Cancel
                </CancelButton>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </SubmitButton>
              </ButtonRow>
            </Form>
          </>
        )}
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export default CareerApplyModal;