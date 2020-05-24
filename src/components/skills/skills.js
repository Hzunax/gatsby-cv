import React from 'react';
import styled from 'styled-components';
import SkillBar from './skill-bar';

const StyledWrapper = styled.section`
  @media (max-width: 480px) {
    .skills__title {
      text-align: center;
    }
  }
`;

export default styled(({ className, title = 'Skills', skills = [] }) => (
  <StyledWrapper className={className}>
    <h1 className="skills__title">{title}</h1>
    {skills.map(skill => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
    ))}
  </StyledWrapper>
))`
  width: 100%;
`;
