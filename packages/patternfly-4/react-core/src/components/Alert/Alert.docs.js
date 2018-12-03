import { Alert, AlertVariant } from '@breakaway/react-core';
import SuccessExample from './examples/SuccessAlert';
import DangerExample from './examples/DangerAlert';
import InfoExample from './examples/InfoAlert';
import WarningExample from './examples/WarningAlert';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Alert',
  components: {
    Alert
  },
  enumValues: {
    'Object.values(AlertVariant)': Object.values(AlertVariant)
  },
  examples: [
    {
      component: SuccessExample,
      title: 'Success Alert dec3 - 12:51PM',
      getContainerProps
    },
    {
      component: DangerExample,
      title: 'Danger Alert',
      getContainerProps
    },
    {
      component: InfoExample,
      title: 'Info Alert',
      getContainerProps
    },
    {
      component: WarningExample,
      title: 'Warning Alert',
      getContainerProps
    }
  ]
};
