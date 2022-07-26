import React from 'react'
import {DiHtml5, DiCss3, DiJavascript1, DiJqueryLogo, DiReact, DiPhp, DiWordpress, DiNodejsSmall} from 'react-icons/di'
import {SiWebpack, SiNextdotjs, SiStrapi, SiPhp} from 'react-icons/si';
import { AnimatePresence, motion } from 'framer-motion'
import ToolItem from './ToolItem';

const ToolsList = () => {
  return (
      <div className='tools-list'>
        <AnimatePresence>
            <div className='tools-group'>
                <ToolItem tdelay={0}>
                    <DiHtml5/>
                    <h4>HTML</h4>
                </ToolItem>
                <ToolItem tdelay={0.25}>
                    <DiCss3/>
                    <h4>CSS</h4>
                </ToolItem>
                <ToolItem tdelay={0.5}>
                    <DiJavascript1/>
                    <h4>Javascript</h4>
                </ToolItem>
                <ToolItem tdelay={0.75}>
                    <DiJqueryLogo/>
                    <h4>JQuery</h4>
                </ToolItem>
                <ToolItem tdelay={1.00}>
                    <DiReact/>
                    <h4>React</h4>
                </ToolItem>
                <ToolItem tdelay={1.25}>
                    <SiPhp/>
                    <h4>PHP</h4>
                </ToolItem>
            </div>
        </AnimatePresence>
      </div>
  )
}

export default ToolsList