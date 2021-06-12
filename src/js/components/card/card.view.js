import React from 'react';
import CompanyCard from './company';
import TaskCard from './task';
import OpportunityCard from './opportunity';
import { CARD_TYPES } from '../../constants/card';

const CompanyTaskCard = props => <TaskCard {...props} displayDateLastAttempt={false} />;

const VIEWS = {
  [CARD_TYPES.TASK]: TaskCard,
  [CARD_TYPES.COMPANY]: CompanyCard,
  [CARD_TYPES.COMPANY_TASK]: CompanyTaskCard,
  [CARD_TYPES.OPPORTUNITY]: OpportunityCard,
};

const Card = ({ type, ...otherProps }) => {
  const Component = VIEWS[type];
  return <Component {...otherProps} redirect={type === CARD_TYPES.TASK} />;
};

Card.defaultProps = {
  type: CARD_TYPES.TASK,
};

export default Card;
