import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  .about__summary {
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    .about__title {
      text-align: center;
    }
  }
`;

const About = ({ title = 'about', summary = [] }) => (
  <StyledWrapper>
    <h1 className="about__title">{title}</h1>
    {summary.map(textItem => (
      <p className="about__summary" key={textItem.id}>
        {textItem.content}
      </p>
    ))}
  </StyledWrapper>
);

export default About;
