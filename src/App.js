import React from 'react';

import AddUser from './components/Users/AddUser';
import UsersLIst from './components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser />
      <UsersLIst users={[]} />
    </div>
  );
}

export default App;
