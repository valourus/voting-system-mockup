import React, { FC } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Party } from '../../schema/Party';

interface PartyAccordionProps {
  party: Party;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export const PartyAccordion: FC<PartyAccordionProps> = ({ party, checked, onChange}): JSX.Element => (
  <Accordion key={party.name}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant={'h5'}>{party.name}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            name={party.leader}
            color="primary"
          />
        }
        label={party.leader}
      />
    </AccordionDetails>
  </Accordion>
);
