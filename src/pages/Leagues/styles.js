import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const LeagueList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})``;
