import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from '../../vc-calendar/src/locale/he_IL';
import TimePickerLocale from '../../time-picker/locale/he_IL';

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'तारीख़ चुनें',
    rangePlaceholder: ['प्रारंभ तिथि', 'समाप्ति तिथि']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;