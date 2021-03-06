import '../assets/index.less';
import Slider from '../src/slider';

export default {
  render: function render() {
    var h = arguments[0];

    var settings = {
      props: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      scopedSlots: {
        customPaging: function customPaging(_ref) {
          var i = _ref.i;

          return h(
            'div',
            {
              style: {
                width: '30px',
                color: 'blue',
                border: '1px blue solid'
              }
            },
            [i + 1]
          );
        },
        appendDots: function appendDots(_ref2) {
          var dots = _ref2.dots;

          return h(
            'div',
            {
              style: {
                backgroundColor: '#ddd',
                borderRadius: '10px',
                padding: '10px'
              }
            },
            [h(
              'ul',
              { style: { margin: '0px' } },
              [' ', dots, ' ']
            )]
          );
        }
      }
    };
    return h('div', [h('h2', ['Append Dots']), h(
      Slider,
      settings,
      [h('div', [h('h3', ['1'])]), h('div', [h('h3', ['2'])]), h('div', [h('h3', ['3'])]), h('div', [h('h3', ['4'])]), h('div', [h('h3', ['5'])]), h('div', [h('h3', ['6'])])]
    )]);
  }
};