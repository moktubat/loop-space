"use client";

import { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { BREAKPOINTS, COLORS, FONT } from "@/styles/variables";

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const ModalContainer = styled.div`
  background: ${COLORS.bgDark};
  color: ${COLORS.white};
  width: 100%;
  max-width: 640px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 24px;
  }
`;

const Header = styled.div`
  margin-bottom: 32px;
  
  h2 {
    font-family: ${FONT.helvetica};
    font-size: 36px;
    font-weight: 400;
    line-height: 1;
    margin: 0 0 8px 0;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  p {
    font-family: ${FONT.urbanist};
    font-size: 16px;
    color: ${COLORS.subtle};
    margin: 0;
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
`;

const Label = styled.label`
  font-family: ${FONT.urbanist};
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.subtle};
`;

const Input = styled.input`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 12px 16px;
  color: ${COLORS.white};
  font-family: ${FONT.urbanist};
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: ${COLORS.brandPink};
  }
`;

const Select = styled.select`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 12px 16px;
  color: ${COLORS.white};
  font-family: ${FONT.urbanist};
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    border-color: ${COLORS.brandPink};
  }

  option {
    background: ${COLORS.bgDark};
    color: ${COLORS.white};
  }
`;

const FileUploadWrapper = styled.div`
  position: relative;
  border: 1px dashed rgba(255, 255, 255, 0.25);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  opacity: 0;
  cursor: pointer;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 8px;
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
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  background: ${COLORS.brandPink};
  border-left: 2px solid #f8bdd6;
  border-top: 2px solid #f8bdd6;
  border-right: 2px solid #f8bdd6;
  border-bottom: 4px solid #f8bdd6;
  color: ${COLORS.white};
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

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

const CareerApplyModal = ({ isOpen, onClose, jobTitle }: CareerApplyModalProps) => {
    const { register, handleSubmit, watch, reset } = useForm<ApplyFormInputs>({
        defaultValues: {
            position: jobTitle || "",
        },
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const onSubmit = (data: ApplyFormInputs) => {
        console.log("Application Data:", data);

        alert("Application submitted successfully!");
        reset();
        onClose();
    };

    const resumeFile = watch("resume")?.[0];

    if (!isOpen) return null;

    return (
        <Overlay $isOpen={isOpen} onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <Header>
                    <h2>Join Our Team!</h2>
                    <p>Fill in your details below to apply for this position.</p>
                </Header>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <FieldGroup>
                            <Label>Full Name*</Label>
                            <Input placeholder="John Doe" {...register("name", { required: true })} />
                        </FieldGroup>
                        <FieldGroup>
                            <Label>Email*</Label>
                            <Input type="email" placeholder="johndoe@email.com" {...register("email", { required: true })} />
                        </FieldGroup>
                    </Row>

                    <Row>
                        <FieldGroup>
                            <Label>Phone Number*</Label>
                            <Input placeholder="+880" {...register("phone", { required: true })} />
                        </FieldGroup>
                        <FieldGroup>
                            <Label>LinkedIn Profile*</Label>
                            <Input placeholder="URL" {...register("linkedin", { required: true })} />
                        </FieldGroup>
                    </Row>

                    <FieldGroup>
                        <Label>Portfolio URL*</Label>
                        <Input placeholder="URL" {...register("portfolio", { required: true })} />
                    </FieldGroup>

                    <Row>
                        <FieldGroup>
                            <Label>Position Applied For*</Label>
                            <Select {...register("position", { required: true })}>
                                <option value="Interior Designer">Interior Designer</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="3D Visualizer">3D Visualizer</option>
                            </Select>
                        </FieldGroup>
                        <FieldGroup>
                            <Label>Upload Resume*</Label>
                            <FileUploadWrapper>
                                <FileText $hasFile={!!resumeFile}>
                                    {resumeFile ? resumeFile.name : "Drop your file or browse"}
                                </FileText>
                                <BrowseButton>Browse</BrowseButton>
                                <HiddenFileInput
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    {...register("resume", { required: true })}
                                />
                            </FileUploadWrapper>
                        </FieldGroup>
                    </Row>

                    <ButtonRow>
                        <CancelButton type="button" onClick={onClose}>
                            Cancel
                        </CancelButton>
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </ButtonRow>
                </Form>
            </ModalContainer>
        </Overlay>
    );
};

export default CareerApplyModal;