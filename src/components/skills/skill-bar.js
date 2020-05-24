import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
const SkillBar = ({ className, name, level }) => ( // level is used in styled.
  <div className={className}>
    <label htmlFor={`${name}-bar`}>{name}</label>
    <div id={`${name}-bar`} className="skill__bar">
      <div className="skill__level" />
    </div>
  </div>
);


SkillBar.displaName = 'SkillBar';

export default styled(SkillBar)`
  width: 100%;
  .skill__bar {
    width: 100%;
    height: 10px;
    background-color: lightgrey;
    padding: 1px;
  }
  .skill__level {
    background-color: #25303B;
    width: ${(p) => p.level || 0}%;
    height: 8px;
  }
`;
