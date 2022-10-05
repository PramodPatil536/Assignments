async function display() {
   await createUser({uid : 107,firstName:'mahesh', lastName:'babu'});
   getUsers();
}

display();