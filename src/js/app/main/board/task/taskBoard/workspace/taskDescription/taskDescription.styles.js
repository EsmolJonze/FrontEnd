import { cssVariables } from '../../../../../../../style/variables';

export const styles = {
  taskDescription: {
    marginBottom: '24px',
    backgroundColor: cssVariables.color.white.natural,
    borderRadius: '4px',
    boxShadow: '0 2px 6px 0 rgba(70, 79, 87, 0.4)',
    padding: '24px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '100px',
  },
  taskCardLeftSide: {
    margin: 'auto 0',
  },
  taskDescriptionLineOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: cssVariables.color.gunmetal.light,
    fontSize: '13px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.23',
    letterSpacing: '0.8px',
  },
  taskDescriptionMainBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskDescriptionMainBlockButtons: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    margin: 'auto 0',
  },
  taskDescriptionCompanyNameStatusContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  taskDescriptionMainBlockText: {
    color: cssVariables.color.bloobirds.natural,
    fontSize: '14px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.14',
    letterSpacing: '0.8px',
  },
  taskDescriptionMainBlockTextGoalReached: {
    color: `${cssVariables.color.gunmetal.light} !important`,
    marginBottom: '16px',
    textDecoration: 'line-through',
  },
  taskDescriptionMainBlockAQC: {
    color: cssVariables.color.grey.natural,
    fontSize: '30px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.33',
    letterSpacing: 'normal',
    margin: 'auto 0',
    marginRight: 16,
  },
  taskDescriptionMainBlockAQCLink: {
    color: cssVariables.color.bloobirds.natural,
    cursor: 'pointer',
  },
  goalCardContainer: {
    display: 'flex',
    marginTop: '6px',
  },
  goalIcon: {
    height: '10px',
    margin: '0 2px 0 5px',
  },
  boxStatus: {
    width: '130px',
    height: '20px',
    borderRadius: '4px',
    margin: 'auto 8px',
    textAlign: 'center',
    padding: '2px 0',
  },
  orangeBoxStatus: {
    backgroundColor: '#fff6e0',
  },
  greenBoxStatus: {
    backgroundColor: cssVariables.color.melon.veryLight,
  },
  taskCardTitleWrapper: {
    display: 'flex',
  },
};
