import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarbar" />
          <Link to="/">DASHBOARD</Link>
        </nav>

        <aside>
          <Link to="/quiz">Quiz</Link>
        </aside>
      </Content>
    </Container>
  );
}
