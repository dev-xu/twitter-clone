import React, { useState } from 'react';
import css from 'styled-jsx/css';
import Icon from 'components/Icon';
import Button from 'components/Button';
import SignUpForm from 'components/SignUpForm';
import LogInForm from 'components/LogInForm';
import colors from '../lib/colors';

const { className, styles } = css.resolve`
  button {
    margin: 18px 0 12px;
  }
`;

const HomeForm = () => {
  const [phase, setPhase] = useState('');

  const handleSignUpClick = () => {
    setPhase('signup');
  };

  const handleLogInClick = () => {
    setPhase('login');
  };

  const handleBackClick = () => {
    setPhase('none');
  };

  if (phase === 'login') {
    return <LogInForm onBack={handleBackClick} />;
  }

  if (phase === 'signup') {
    return <SignUpForm onBack={handleBackClick} />;
  }

  return (
    <div className="home-form">
      <Icon name="bird" color={colors.twitterBlue} size="45px" />
      <h1>See what’s happening in the world right now</h1>
      <h2>Join Twitter today.</h2>

      <Button
        primary
        full
        narrow
        className={className}
        onClick={handleSignUpClick}
      >
        Sign Up
      </Button>

      <Button full narrow onClick={handleLogInClick}>
        Log In
      </Button>

      {styles}
      <style jsx>{`
        .home-form {
          max-width: 350px;
        }

        h1 {
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.9em;
          font-weight: bold;
          line-height: 1.1em;
        }

        h2 {
          margin-top: 2rem;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.25em;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default HomeForm;
