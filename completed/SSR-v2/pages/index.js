import React, { Component } from 'react';
import Link from 'next/link'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Главная страница</h1>
        <Link href='/about' >Перейти в раздел о нас</Link>
      </div>
    );
  }
}

export default Home;
