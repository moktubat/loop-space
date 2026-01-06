'use client';

import { container } from "@/styles/mixins";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FONT } from "@/styles/variables";

const Section = styled.section`
  padding: 100px 0;
`;

const Wrapper = styled.div`
  ${container}
  display: flex;
  gap: 48px;
`;

/* ---------- LEFT SIDE ---------- */

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactBig = styled.h1`
  color: #1D1F2C;
  font-family: ${FONT.helvetica};
  font-size: 100px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -4px;
  text-transform: uppercase;
  leading-trim: both;
  text-edge: cap;
`;

const UsBlock = styled.div`
  padding: 20px;
  background: #5A378F;
  color: white;
  font-family: ${FONT.helvetica};
  font-size: 100px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -4px;
  text-transform: uppercase;
  display: inline-block;
  leading-trim: both;
  text-edge: cap;
  align-self: flex-start;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #101828;
  font-family: ${FONT.urbanist};
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
`;

/* ---------- MIDDLE DIVIDER ---------- */

const Divider = styled.div`
  width: 1px;
  background: #BAC4D2;
`;

/* ---------- RIGHT SIDE ---------- */

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h2`
  color: #1A1A1A;
  font-family: ${FONT.helvetica};
  font-size: 30px;
  font-weight: 500;
  line-height: 140%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TwoColumn = styled.div`
  display: flex;
  gap: 100px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Label = styled.label`
  color: #1D1F2C;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #9DA7B8;
  padding: 6px 0;
  color: #595B68;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  border: none;
  border-bottom: 1px solid #9DA7B8;
  padding: 6px 0;
  color: #595B68;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &:focus {
    outline: none;
  }
`;

const MessageInput = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid #9DA7B8;
  padding: 6px 0 20px 0;
  min-height: 120px;
  resize: none;
  color: #595B68;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &:focus {
    outline: none;
  }
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-family: ${FONT.urbanist};
  color: #595B68;
  font-size: 16px;
  line-height: 24px;

  a {
    color: #D73615;
  }
`;

const SubmitButton = styled.button`
  background: #EA2B7B;
  border-radius: 6px;
  padding: 12px;
  width: 100%;
  border-left: 2px solid #F8BDD6;
  border-top: 2px solid #F8BDD6;
  border-right: 2px solid #F8BDD6;
  border-bottom: 4px solid #F8BDD6;

  color: #FFF;
  font-family: ${FONT.urbanist};
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;



const ContactHeader = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Section>
      <Wrapper>
        {/* LEFT SIDE */}
        <Left>
          <ContactText>
            <ContactBig>CONTACT</ContactBig>
            <UsBlock>US</UsBlock>
          </ContactText>

          <ContactInfo>
            <InfoRow>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 9.09998V18C21 19.7 19.7 21 18 21H6C4.3 21 3 19.7 3 18V9.09998" stroke="#1D1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 9.09998L9.7 15L12 17L14.3 15L21 9.09998" stroke="#1D1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 9.1L6 6.5" stroke="#1D1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 6.5L21 9.1" stroke="#1D1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.70039 15L3.90039 20.2" stroke="#1D1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.0998 20.2L14.2998 15" stroke="#1D1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 11.8V6.5V5C18 3.9 17.1 3 16 3H8C6.9 3 6 3.9 6 5V6.5V11.8" stroke="#1D1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 9C12.9 10.3333 11.1 10.3333 10 9" stroke="#1D1F2C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg> info@loopspace.com
            </InfoRow>
            <InfoRow>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7.3276 3.01517C8.13096 2.91542 9.03474 3.3144 9.43642 4.01262L9.93852 4.91032C10.4406 5.80802 10.1394 6.80547 9.43642 7.40394L8.8339 7.80292C8.03054 8.50113 7.72928 9.59832 8.3318 10.496C9.03474 11.4935 9.73768 12.4909 10.6415 13.3886C11.5452 14.2863 12.5494 15.0843 13.5536 15.6828C14.4574 16.2812 15.562 15.982 16.1646 15.184L16.5662 14.6853C17.1688 13.8873 18.2734 13.6879 19.0767 14.1866L19.9805 14.6853C20.6835 15.0843 21.0851 15.8822 20.9847 16.7799L20.6835 18.3759L20.4826 19.3733C20.2818 20.3708 19.2776 21.1687 18.2734 20.9692C16.3654 20.7697 14.5578 20.1713 12.8507 19.3733C11.0431 18.5754 9.43642 17.3784 7.93012 15.982C6.42382 14.5856 5.3192 12.8899 4.51584 11.0945C3.8129 9.39883 3.21038 7.50368 3.00954 5.60853C2.90912 4.61108 3.61206 3.61364 4.61626 3.41415L7.3276 3.01517Z" stroke="#1D1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg> (406) 555-0120
            </InfoRow>
            <InfoRow>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path d="M11.25 7.75C11.25 9.13071 10.1307 10.25 8.75 10.25C7.36929 10.25 6.25 9.13071 6.25 7.75C6.25 6.36929 7.36929 5.25 8.75 5.25C10.1307 5.25 11.25 6.36929 11.25 7.75Z" stroke="#1D1F2C" strokeWidth="1.5" />
                <path d="M14.75 15.75L16.75 20.75H0.75L2.75 15.75" stroke="#1D1F2C" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M15.75 7.95C15.75 13.55 8.75 16.75 8.75 16.75C8.75 16.75 1.75 13.55 1.75 7.95C1.75 3.97355 4.88401 0.75 8.75 0.75C12.616 0.75 15.75 3.97355 15.75 7.95Z" stroke="#1D1F2C" strokeWidth="1.5" />
              </svg> 4140 Parker Rd. Allentown, New Mexico 31134
            </InfoRow>
          </ContactInfo>
        </Left>

        {/* DIVIDER */}
        <Divider />

        {/* RIGHT SIDE */}
        <Right>
          <Title>Enquiries</Title>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <TwoColumn>
              <FieldGroup>
                <Label>Full Name*</Label>
                <Input placeholder="Enter your full name" {...register("name")} />
              </FieldGroup>

              <FieldGroup>
                <Label>Email*</Label>
                <Input placeholder="Enter your email" {...register("email")} />
              </FieldGroup>
            </TwoColumn>

            <TwoColumn>
              <FieldGroup>
                <Label>Phone Number*</Label>
                <Input placeholder="Enter your phone number" {...register("phone")} />
              </FieldGroup>

              <FieldGroup>
                <Label>Subject*</Label>
                <Select {...register("subject")}>
                  <option value="">Select subject</option>
                  <option value="Support">Support</option>
                  <option value="Sales">Sales</option>
                  <option value="General">General</option>
                  <option value="Other">Other</option>
                </Select>
              </FieldGroup>
            </TwoColumn>

            <FieldGroup>
              <Label>Message*</Label>
              <MessageInput placeholder="Type your message..." {...register("message")} />
            </FieldGroup>

            <CheckboxRow>
              <input type="checkbox" {...register("agree")} />
              <span>
                I agree to the{" "}
                <a href="#">Terms & Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </span>
            </CheckboxRow>

            <SubmitButton type="submit">
              Submit
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
              >
                <path
                  d="M0.850098 9.18343L9.18343 0.850098M9.18343 0.850098H0.850098M9.18343 0.850098V9.18343"
                  stroke="#fff"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SubmitButton>
          </Form>
        </Right>
      </Wrapper>
    </Section>
  );
};

export default ContactHeader;
