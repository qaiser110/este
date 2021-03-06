/* @flow */
import React from 'react';
import buttonsMessages from '../../common/app/buttonsMessages';
import { Button, FormattedMessage } from '../app/components';
import { connect } from 'react-redux';
import { signOut } from '../../common/auth/actions';

const SignOut = ({ signOut }) => (
  <Button onPress={signOut}>
    <FormattedMessage {...buttonsMessages.signOut} />
  </Button>
);

SignOut.propTypes = {
  signOut: React.PropTypes.func.isRequired,
};

export default connect(null, { signOut })(SignOut);
