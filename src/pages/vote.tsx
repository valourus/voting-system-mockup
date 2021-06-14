import React, { FC, useState } from 'react';
import { Container } from '../components/Container';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import { Party } from '../schema/Party';
import styled from 'styled-components';
import { PartyAccordion } from '../components/PartyAccordion';
import { ConfirmVoteModal } from '../components/ConfirmVoteModal/ConfirmVoteModal';

export const parties: Party[] = JSON.parse(
  '[{"name":"VVD","leader":"Mark Rutte"},{"name":"PVV","leader":"Geert Wilders"},{"name":"CDA","leader":"Wopke Hoekstra"},{"name":"D66","leader":"Sigrid Kaag"},{"name":"Groenlinks","leader":"Jesse Klaver"},{"name":"SP","leader":"Lilian Marijnissen"},{"name":"PvdA","leader":"Lilianne Ploumen"},{"name":"ChristenUnie","leader":"Gert-Jan Segers"},{"name":"Partij voor de Dieren","leader":"Esther Ouwehand"},{"name":"50PLUS","leader":"Liane Den Haan"},{"name":"SGP","leader":"Kees van der Staaij"},{"name":"DENK","leader":"Farid Azarkan"},{"name":"Forum voor Democratie","leader":"Thierry Baudet"},{"name":"BIJ1","leader":"Sylvana Simons"},{"name":"JA21","leader":"Kees van der staaij"},{"name":"VOLT","leader":"Laurens Dassen"},{"name":"BBB","leader":"Caroline van der Plas"}]',
);

const VoteButtonWrapper = styled.div`
  margin: 1.5rem 0 2rem 0;
`;

export const Vote: FC = (): JSX.Element => {
  const [state, setState] = useState<Record<string, boolean>>({});
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Typography variant={'h3'} component={'h1'} gutterBottom>
        Op wie wil je stemmen?
      </Typography>
      {parties.map((p) => (
        <PartyAccordion
          key={p.name}
          party={p}
          checked={state[p.leader] || false}
          onChange={(event, checked) => setState({ [p.leader]: checked })}
        />
      ))}
      <VoteButtonWrapper>
        <Button fullWidth variant={'contained'} color={'primary'} onClick={() => setIsOpen(true)}>
          Stem
        </Button>
      </VoteButtonWrapper>
      <ConfirmVoteModal isOpen={isOpen} onCancel={() => setIsOpen(false)} name={Object.keys(state)[0]} />
    </Container>
  );
};

export default Vote;
