import React from 'react';
import DOMPurify from 'dompurify';
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

const About = ({ title = 'about', text = '' }) => (
  <StyledWrapper>
    <h1 className="about__title">{title}</h1>
    {/* eslint-disable react/no-danger */}
    <p
      className="about__summary"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
    />
    {/* eslint-enable react/no-danger */}
  </StyledWrapper>
);

export default About;
