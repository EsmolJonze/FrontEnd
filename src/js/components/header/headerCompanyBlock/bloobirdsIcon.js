import React from 'react';
import styles from './headerCompanyBlock.module.css';
import { cssVariables } from '../../../style/variables';
import { LogoSvg } from '../../../../assets/svg';
import { servicesEnv } from '../../../misc/api/ApiHosts';

let envColor;
if (servicesEnv === 'production') {
  envColor = cssVariables.color.bloobirds.natural;
} else {
  envColor =
    servicesEnv === 'staging' ? cssVariables.color.banana.light : cssVariables.color.grape.natural;
}

const BloobirdsLogo = () => <LogoSvg className={styles._bloobirds_logo} fill={envColor} />;

export { BloobirdsLogo };
