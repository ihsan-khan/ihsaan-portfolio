import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';

const skills = [
  { name: 'Node JS', icon: images.node, bgColor:'' },
  { name: 'Vue', icon: images.vue, bgColor:'' },
  { name: 'React', icon: images.react, bgColor:'' },
  { name: 'AWS', icon: images.python, bgColor:'' },
  { name: 'GIT', icon: images.git, bgColor:'' },
];

const experiences = [
  { year: '2019', works :[
    { name: 'Laravel dev', company:'softgear', desc:'worked as Laravel Dev'},
    { name: 'Full Stack', company:'softgear', desc:'worked as Full Stack Dev'}
  ]},
  { year: '2020', works :[{ name: 'Laravel dev', company:'SM Chauffeur', desc:'worked as Laravel Dev'}]},
  { year: '2021', works :[{ name: 'Laravel dev', company:'CodesOrbit', desc:'worked as Laravel Dev'}]},
  { year: '2022', works :[{ name: 'Backend Dev', company:'Botnostic Solutions', desc:'worked as Laravel Dev'}]},
];

const Skills = () => {

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
