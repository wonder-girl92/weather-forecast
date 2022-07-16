import { DailyCards } from '.';

import { shallow } from 'enzyme';

describe('DailyCards', () => {
  const daily = [
    {
      date_epoch: 1631782800,
      day: {
        condition: {
          text: 'Clouds',
          icon: 'http://cdn.weatherapi.com/weather/64x64/day/116.png'
        },
        avgtemp_c: 10
      }
    },
    {
      date_epoch: 1631782800,
      day: {
        condition: {
          text: 'Clouds',
          icon: 'http://cdn.weatherapi.com/weather/64x64/day/116.png'
        },
        avgtemp_c: 15
      }
    },
    {
      date_epoch: 1631783800,
      day: {
        condition: {
          text: 'Clouds',
          icon: 'http://cdn.weatherapi.com/weather/64x64/day/116.png'
        },
        avgtemp_c: 18
      }
    },
    {
      date_epoch: 1631784800,
      day: {
        condition: {
          text: 'Clouds',
          icon: 'http://cdn.weatherapi.com/weather/64x64/day/116.png'
        },
        avgtemp_c: 20
      }
    }
  ];
  const dailyCards = shallow(<DailyCards {...{ daily }} />);
  test('renders DailyCards', () => {
    expect(dailyCards.find('.DailyCards').length).toEqual(1);
  });
  test('renders Select', () => {
    expect(dailyCards.find('.Select').length).toEqual(1);
  });
  test('check Select initial state', () => {
    expect(dailyCards.find('.Select').props().value).toEqual('by_date_asc');
  });
  test('check Select state change', () => {
    expect(dailyCards.find('.Select').props().value).toEqual('by_date_asc');
    dailyCards
      .find('.Select')
      .at(0)
      .simulate('change', {
        target: {
          value: 'by_date_desc',
          name: 'by_date_desc'
        }
      });
    expect(dailyCards.find('.Select').props().value).toEqual('by_date_desc');
  });
});
