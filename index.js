
// Задание № 1 

// const delay = ms => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms); 
//     }, logger);
//   });
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms


  // Задание № 2

  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      );

      setTimeout(() => {
        if(updatedUsers) {
          resolve(updatedUsers);
        }
        reject();
      }, 1000);

    })
    
  
    
  };
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  /*
   * Сейчас работает так
   */
  // toggleUserState(users, 'Mango', logger);
  // toggleUserState(users, 'Lux', logger);
  
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);
