import React from 'react';
import './FlashMessage.component.css';

import { Card } from 'semantic-ui-react';


export const FlashMessageComponent = ({ success, message }) => (
    <div styleName="flashMessageComponent" >
      <Card
        fluid
        color={ success ? 'green' : 'red' }
        meta={success? 'Success': 'Error'}
        description={message}
      />
    </div>
    ); 