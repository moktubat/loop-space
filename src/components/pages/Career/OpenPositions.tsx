'use client';

import { Heading } from "@/components/ui/Heading";
import { FONT } from "@/styles";
import { container } from "@/styles/mixins";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 16px;
`;

const Wrapper = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Job post card
const JobCard = styled.div`
  background: #F9FAFB;
  border: 1px solid #E4E6E9;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// Top section: left and right
const JobTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;

const JobLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const JobTitle = styled.h3`
  font-family: Urbanist;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  color: #1D1F2C;
  margin: 0;
`;

const JobTags = styled.div`
  font-family: Urbanist;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  color: #595B68;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Tag = styled.span`
  &:not(:last-child)::after {
    content: '|';
    margin-left: 8px;
    color: #E4E6E9;
  }
`;

const JobMeta = styled.div`
  display: flex;
  gap: 56px;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const MetaLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MetaLabel = styled.span`
  font-family: Urbanist;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #595B68;
`;

const MetaValue = styled.div`
  font-family: Urbanist;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #1D1F2C;

  span {
    font-weight: 400;
    font-size: 16px;
  }
`;

const MetaRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  align-items: center;
`;

const ActionButton = styled.button`
  width: 172px;
  padding: 12px 16px;
  border-radius: 6px;
  background: #fff;
  border-left: 2px solid #EA2B7B;
  border-top: 2px solid #EA2B7B;
  border-right: 2px solid #EA2B7B;
  border-bottom: 4px solid #EA2B7B;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${FONT.urbanist};
  font-size: 18px;
  font-weight: 600;
  color: #EA2B7B;

  svg {
    stroke: #EA2B7B;
  }

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

const ApplyButton = styled(ActionButton)`
  background: #EA2B7B;
  color: #fff;
  border-left: 2px solid #F8BDD6;
  border-top: 2px solid #F8BDD6;
  border-right: 2px solid #F8BDD6;
  border-bottom: 4px solid #F8BDD6;

  svg {
    stroke: #fff;
  }
`;

// Bottom description
const JobBottom = styled.div`
  font-family: Urbanist;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #595B68;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #E4E6E9;
  
`;

const OpenPositions = () => {
  const jobs = [
    {
      title: "Interior Designer",
      tags: ["Design", "Onsite", "Full Time"],
      salary: "$700 - $1000",
      salaryPeriod: "/Month",
      deadline: "21 Nov 2025",
      description:
        "Join us as an Interior Designer! Create innovative and functional spaces for residential and commercial projects. Apply now!",
    },
    {
      title: "Project Manager",
      tags: ["Design", "Onsite", "Full Time"],
      salary: "$1000 - $1500",
      salaryPeriod: "/Month",
      deadline: "21 Nov 2025",
      description:
        "Join us as a Project Manager! Lead interior design projects, ensuring quality and timely delivery. Apply now!",
    },
    {
      title: "3D Visualizer",
      tags: ["Design", "Onsite", "Full Time"],
      salary: "$600 - $800",
      salaryPeriod: "/Month",
      deadline: "21 Nov 2025",
      description:
        "Join us as a 3D Visualizer! Create stunning 3D renderings and bring interior designs to life. Apply now!",
    },
  ];

  return (
    <Section>
      <Wrapper>
        <Intro>
          <Heading>
            OPEN <span className="highlightTxt">POSITIONS</span>
          </Heading>
        </Intro>

        {jobs.map((job, idx) => (
          <JobCard key={idx}>
            <JobTop>
              <JobLeft>
                <JobTitle>{job.title}</JobTitle>
                <JobTags>
                  {job.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </JobTags>
                <JobMeta>
                  <MetaLeft>
                    <MetaLabel>Salary</MetaLabel>
                    <MetaValue>
                      {job.salary} <span>{job.salaryPeriod}</span>
                    </MetaValue>
                  </MetaLeft>
                  <MetaRight>
                    <MetaLabel>Deadline</MetaLabel>
                    <MetaValue>{job.deadline}</MetaValue>
                  </MetaRight>
                </JobMeta>
              </JobLeft>
              <Buttons>
                <ActionButton>
                  Details
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M0.850098 9.18343L9.18343 0.850098M9.18343 0.850098H0.850098M9.18343 0.850098V9.18343"
                      stroke="#EA2B7B"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ActionButton>

                <ApplyButton>
                  Apply Now
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M0.850098 9.18343L9.18343 0.850098M9.18343 0.850098H0.850098M9.18343 0.850098V9.18343"
                      stroke="#fff"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ApplyButton>
              </Buttons>
            </JobTop>

            <Divider />

            <JobBottom>{job.description}</JobBottom>
          </JobCard>
        ))}
      </Wrapper>
    </Section>
  );
};

export default OpenPositions;
