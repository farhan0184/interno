'use client'
import React, { useState } from 'react';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';
import Discription from '../shares/Discription';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-[1px] border-primary/50 ">
      <div
        className="flex justify-between items-center  py-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-bold font-dmSerif text-secondary">{title}</h3>
        <div className={`${isOpen?"text-primary ":' text-secondary'}`}>{isOpen ? <BiDownArrow /> : <BiRightArrow />}</div>
      </div>
      {isOpen && (
        <Discription disc={content} style='pb-3'/>
      )}
    </div>
  );
};

export default Accordion;
