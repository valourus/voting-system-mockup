import { FC, useContext } from 'react';
import { Button, Dialog, Modal, Typography } from '@material-ui/core';
import { parties } from '../../pages/vote';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { UserContext } from '../../context/UserContext';
import { useAuth } from '../../hooks/useAuth';
import {useVotes} from "../../hooks/useVotes";

interface ConfirmVoteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  name: string;
}

const ModalContent = styled.div`
  padding: 1.5rem;
  max-width: 300px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ConfirmVoteModal: FC<ConfirmVoteModalProps> = ({ isOpen, onCancel, name }): JSX.Element => {
  const { push } = useRouter();
  const { user, setUserInContext } = useContext(UserContext);
  const { vote } = useVotes();

  const party = parties.find((p) => p.leader === name);
  return (
    <Dialog open={isOpen} onClose={onCancel} aria-labelledby="Bevestig stem" aria-describedby="">
      <ModalContent>
        <Typography variant={'h4'} component={'h1'} gutterBottom>
          Bevestig u stem
        </Typography>
        <Typography gutterBottom>
          Weet u zeker dat u op <strong>{party?.leader}</strong> van partij <strong>{party?.name}</strong> wilt stemmen
        </Typography>
        <BtnContainer>
          <Button variant={'outlined'} onClick={onCancel}>
            Ga terug
          </Button>
          <Button
            variant={'contained'}
            color={'primary'}
            onClick={() => {
              setUserInContext({ ...user });
              vote(party)
              push('/confirmed');
            }}
          >
            Bevesig u stem
          </Button>
        </BtnContainer>
      </ModalContent>
    </Dialog>
  );
};
