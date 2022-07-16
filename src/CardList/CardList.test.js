import { shallow } from 'enzyme';

import { CardListNoState } from '.';

test('renders CardList', () => {
  const cardList = shallow(
    <CardListNoState {...{ state: { citiesList: ['Moscow', 'London'] } }} />
  );
  expect(cardList.find('.Select').props().value).toEqual('asc');
  expect(cardList.find('option').at(0).props().value).toEqual('asc');
  expect(cardList.find('option').at(1).props().value).toEqual('desc');
  expect(cardList.find('option').at(0).props().children).toEqual('By name asc');
  expect(cardList.find('option').at(1).props().children).toEqual('By name desc');
  expect(cardList.find('.CardList').props().children[0].props.city).toEqual('London');
  expect(cardList.find('.CardList').props().children[1].props.city).toEqual('Moscow');
  cardList.setState({ orderBy: 'desc' });
  expect(cardList.find('.Select').props().value).toEqual('desc');
  expect(cardList.find('.CardList').props().children[0].props.city).toEqual('Moscow');
  expect(cardList.find('.CardList').props().children[1].props.city).toEqual('London');
});
